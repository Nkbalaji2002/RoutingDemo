import React, { Suspense, lazy } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
// import Admin from "./components/Admin";
import Layout from "./components/Layout";
import { ErrorBoundary } from "react-error-boundary";
import SkeletonAdmin from "./components/skeletons/SkeletonAdmin";
import ErrorFallback from "./components/ErrorFallback";

const Admin = lazy(() => import("./components/Admin"));

const LazyLoaderApp = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route index Component={Home} />
          {/* <Route path="admin" Component={Admin} /> */}
          <Route
            path="admin"
            element={
              <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => navigate("/")}
              >
                <Suspense fallback={<SkeletonAdmin />}>
                  <Admin />
                </Suspense>
              </ErrorBoundary>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default LazyLoaderApp;

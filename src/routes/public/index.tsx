import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Loader } from "@/components";

const Login = React.lazy(() => import("@/pages/login"));

export default function PublicRoutes(): React.ReactElement {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Suspense>
  );
}

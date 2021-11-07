import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Loader } from "@/components";

const Dashboard = React.lazy(() => import("@/pages/dashboard"));

export default function PrivateRoutes(): React.ReactElement {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Suspense>
  );
}

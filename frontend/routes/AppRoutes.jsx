import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import UploadInvoice from "../pages/UploadInvoice/UploadInvoice";
import InvoiceList from "../pages/InvoiceList/InvoiceList";
import InvoiceDetails from "../pages/InvoiceDetails/InvoiceDetails";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Navigate to="/upload" replace />} />
          <Route path="/upload" element={<UploadInvoice />} />
          <Route path="/invoices" element={<InvoiceList />} />
          <Route path="/invoice/:id" element={<InvoiceDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
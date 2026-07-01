import api from "../src/api/axios"
import API from "../src/api/endpoints";

const uploadInvoice = (formData) =>
  api.post(API.UPLOAD_INVOICE, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

const getInvoices = (username) =>
  api.get(`${API.GET_INVOICES}/${username}`);

const getInvoiceDetails = (id) =>
  api.get(`${API.GET_INVOICE_DETAILS}/${id}`);

const downloadInvoice = (id) =>
  api.get(`${API.DOWNLOAD_INVOICE}/${id}`, {
    responseType: "blob",
  });

const invoiceService = {
  uploadInvoice,
  getInvoices,
  getInvoiceDetails,
  downloadInvoice,
};

export default invoiceService;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@mui/material";

import { getInvoices } from "../../redux/invoice/invoice.actions";
import DataTable from "../../components/common/DataTable/DataTable";
import { getUsername } from "../../utils/storage";
const InvoiceList = () => {

    const dispatch = useDispatch();

    const {
        invoices,
        loading
    } = useSelector(state => state.invoice);

  useEffect(() => {

    const username = getUsername();

    if(username){
        dispatch(getInvoices(username));
    }

}, []);
    const rows = invoices.map((item) => ({
        id: item._id,
        invoiceNumber: item.invoice_number,
        client: item.client_name,
        date: item.date,
        amount: item.total_amount
    }));
console.log("rows", rows);
    const columns = [
        {
            field: "invoiceNumber",
            headerName: "Invoice No",
            flex: 1
        },
        {
            field: "client",
            headerName: "Client",
            flex: 1
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1
        },
        {
            field: "amount",
            headerName: "Amount",
            flex: 1
        }
    ];

    return (
        <>
            <Typography
                variant="h5"
                mb={3}
            >
                Invoice List
            </Typography>

            <DataTable
                rows={rows}
                columns={columns}
                loading={loading}
            />
        </>
    );
};

export default InvoiceList;
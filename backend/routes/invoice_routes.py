from flask import Blueprint
from controllers.invoice_controller import (
    upload_invoice,
    get_invoices,
    get_invoice_details,
    download_invoice
)
invoice_bp = Blueprint("invoice", __name__)


invoice_bp.route(
    "/get-invoices/<username>",
    methods=["GET"]
)(get_invoices)

invoice_bp.route(
    "/upload-invoice",
    methods=["POST"]
)(upload_invoice)

invoice_bp.route(
    "/invoice-details/<invoice_id>",
    methods=["GET"]
)(get_invoice_details)

invoice_bp.route(
    "/download-invoice/<invoice_id>",
    methods=["GET"]
)(download_invoice)
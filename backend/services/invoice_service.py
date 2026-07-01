import os
import uuid

from werkzeug.utils import secure_filename

from config import Config
from models.invoice_model import (
    create_invoice,
    get_invoices_by_username,
    get_invoice_by_id
)
from utils.pdf_extractor import extract_invoice_data

ALLOWED_EXTENSIONS = {"pdf"}

def download_invoice_service(invoice_id):

    invoice = get_invoice_by_id(invoice_id)

    if not invoice:
        return None

    return invoice["file_path"]

def get_invoices_service(username):
    return get_invoices_by_username(username)


def get_invoice_details_service(invoice_id):
    return get_invoice_by_id(invoice_id)

def allowed_file(filename):

    return (
        "." in filename and
        filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS
    )


def upload_invoice_service(username, invoice):

    if invoice.filename == "":
        return False, "No file selected.", None

    if not allowed_file(invoice.filename):
        return False, "Only PDF files are allowed.", None

    filename = secure_filename(invoice.filename)

    unique_filename = f"{uuid.uuid4()}_{filename}"

    file_path = os.path.join(
        Config.UPLOAD_FOLDER,
        unique_filename
    )

    invoice.save(file_path)

    invoice_data = extract_invoice_data(file_path)

    invoice_data["username"] = username
    invoice_data["file_name"] = unique_filename
    invoice_data["file_path"] = file_path

    invoice_id = create_invoice(invoice_data)

    invoice_data["_id"] = invoice_id

    return True, "Invoice uploaded successfully.", invoice_data
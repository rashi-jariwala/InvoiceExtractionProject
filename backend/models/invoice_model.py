from bson import ObjectId
from database import db

invoice_collection = db["invoices"]

def create_invoice(invoice):
    result = invoice_collection.insert_one(invoice)
    return str(result.inserted_id)

def get_invoice_by_id(invoice_id):

    invoice = invoice_collection.find_one(
        {"_id": ObjectId(invoice_id)}
    )

    if invoice:
        invoice["_id"] = str(invoice["_id"])

    return invoice

def get_invoices_by_username(username):

    invoices = list(
        invoice_collection.find(
            {"username": username},
            {"file_path": 0}
        )
    )

    for invoice in invoices:
        invoice["_id"] = str(invoice["_id"])

    return invoices
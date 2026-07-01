from flask import request, jsonify,send_file
from services.invoice_service import (
    upload_invoice_service,
    get_invoices_service,
    get_invoice_details_service,
    download_invoice_service
)

def get_invoices(username):

    invoices = get_invoices_service(username)

    if not invoices:
        return jsonify({
            "success": False,
            "message": "Username not found"
        }), 404

    return jsonify({
        "success": True,
        "count": len(invoices),
        "data": invoices
    }), 200


def download_invoice(invoice_id):

    file_path = download_invoice_service(invoice_id)

    if not file_path:
        return jsonify({
            "success": False,
            "message": "Invoice not found"
        }),404

    return send_file(
        file_path,
        as_attachment=True
    )

def upload_invoice():

    if "invoice" not in request.files:
        return jsonify({
            "success": False,
            "message": "Invoice file is required."
        }), 400

    username = request.form.get("username")

    if not username:
        return jsonify({
            "success": False,
            "message": "Username is required."
        }), 400

    invoice = request.files["invoice"]

    success, message, data = upload_invoice_service(
        username,
        invoice
    )

    if not success:
        return jsonify({
            "success": False,
            "message": message
        }), 400

    return jsonify({
        "success": True,
        "message": message,
        "data": data
    }), 201


def get_invoice_details(invoice_id):

    invoice = get_invoice_details_service(invoice_id)

    if not invoice:
        return jsonify({
            "success": False,
            "message": "Invoice not found"
        }),404

    return jsonify({
        "success": True,
        "data": invoice
    }),200
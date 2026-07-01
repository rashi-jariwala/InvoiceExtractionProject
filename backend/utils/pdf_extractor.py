try:
    import pdfplumber
except ImportError:  # pragma: no cover - optional dependency
    pdfplumber = None

from utils.regex_helper import extract_value


def extract_invoice_data(file_path):

    if pdfplumber is None:
        return {
            "invoice_number": "",
            "date": "",
            "client_name": "",
            "tax": "",
            "total_amount": "",
        }

    text = ""

    with pdfplumber.open(file_path) as pdf:

        for page in pdf.pages:

            page_text = page.extract_text()

            if page_text:
                text += page_text + "\n"

    return {
        "invoice_number": extract_value(
            r"Invoice\s*No\s*:\s*(.*)",
            text
        ),

        "date": extract_value(
            r"Date\s*:\s*(.*)",
            text
        ),

        "client_name": extract_value(
            r"Client\s*Name\s*:\s*(.*)",
            text
        ),

        "tax": extract_value(
            r"Tax\s*:?\s*(.*)",
            text
        ),

        "total_amount": extract_value(
            r"Total\s*Amount\s*:?\s*(.*)",
            text
        )
    }
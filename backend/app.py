from flask import Flask
from flask_cors import CORS
from config import Config
from database import db
from routes.invoice_routes import invoice_bp
app = Flask(__name__)
app.config.from_object(Config)

CORS(app)
app.register_blueprint(invoice_bp)

@app.get("/")
def home():
    return {
        "status": "success",
        "message": "Invoice Extraction API is running..."
    }


if __name__ == "__main__":
    app.run(debug=True)
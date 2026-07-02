import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    MONGO_URI = os.getenv("MONGO_URI") or os.getenv("MONGO_URL")
    MONGO_URL = MONGO_URI
    DATABASE_NAME = os.getenv("DATABASE_NAME", "invoice_db")
    UPLOAD_FOLDER = os.getenv("UPLOAD_FOLDER", "uploads")


MONGO_URI = Config.MONGO_URI
MONGO_URL = Config.MONGO_URL
DATABASE_NAME = Config.DATABASE_NAME
UPLOAD_FOLDER = Config.UPLOAD_FOLDER



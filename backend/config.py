# import os
# from dotenv import load_dotenv

# load_dotenv()

# class Config:
#     MONGO_URI = os.getenv("MONGO_URI")
#     DATABASE_NAME = os.getenv("DATABASE_NAME")
#     UPLOAD_FOLDER = os.getenv("UPLOAD_FOLDER")



# print("========== CONFIG ==========")
# print("MONGO_URI:", repr(Config.MONGO_URI))
# print("DATABASE_NAME:", repr(Config.DATABASE_NAME))
# print("UPLOAD_FOLDER:", repr(Config.UPLOAD_FOLDER))
# print("============================")
import os


db_name = "invoice_db"
MONGO_USER = "rashi1999"
MONGO_PASSWORD = "R1a9s9h9i9$" ## Safely encode the password to convert the '!' into its URL-friendly format (%21)
user_collection_name = "collection_user"
data_collection_name = "collection_data"
MONGO_URL = f"=mongodb+srv://rashi1999:{MONGO_PASSWORD}@docdb-cluster-20260702-0812.global.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000"



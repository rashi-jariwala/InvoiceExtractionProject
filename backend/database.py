from pymongo import MongoClient
from config import Config

client = MongoClient(Config.MONGO_URI)

db = client[Config.DATABASE_NAME]

try:
    client.admin.command("ping")
    print("✅ MongoDB Connected Successfully")
except Exception as e:
    print(f"❌ MongoDB Connection Failed: {e}")
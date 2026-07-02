from pymongo import MongoClient
from config import Config

mongo_uri = Config.MONGO_URI or Config.MONGO_URL
client = MongoClient(mongo_uri) if mongo_uri else None
db = None

if client is not None:
    db = client[Config.DATABASE_NAME]
    try:
        client.admin.command("ping")
        print("✅ MongoDB Connected Successfully")
    except Exception as e:
        print(f"❌ MongoDB Connection Failed: {e}")
else:
    print("⚠️ MongoDB URI not configured. Skipping connection.")
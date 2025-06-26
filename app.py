from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient("mongodb://localhost:27017/")
db = client["codtech"]
collection = db["timelogs"]

@app.route("/log", methods=["POST"])
def log_time():
    data = request.get_json()
    collection.insert_one(data)
    return jsonify({"message": "Time logged successfully!"})

if __name__ == "__main__":
    app.run(port=5000)

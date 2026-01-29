import qwen
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    question = data.get("question")
    answer = qwen.talk_local(question)
    return jsonify({"response" : answer})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=46317)



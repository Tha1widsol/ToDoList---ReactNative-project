from flask import Flask
from flask.json import jsonify

app = Flask(__name__)

@app.route("/api",methods = ['GET'])
def p():
    return {
        'name':'hello world'
    }


if __name__ == "__main__":
    app.run(debug=True)
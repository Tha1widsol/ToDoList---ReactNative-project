from flask import Flask,request
from flask.json import jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
ma = Marshmallow(app)


app.config['SECRET_KEY'] = "helsgddo"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class ToDo(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    item = db.Column(db.String(100))

    def __init__(self,item):
        self.item = item

class ToDoSchema(ma.Schema):
    class Meta:
        fields = ("id","item")

todo_schema = ToDoSchema()
todos_schema = ToDoSchema(many = True)



@app.route("/get",methods = ['GET'])
def get_todos():
    all_todos = ToDo.query.all()
    results = todos_schema.dump(all_todos)
    return jsonify(results)

@app.route("/get/<id>/",methods = ['GET'])
def post_details(id):
    todo = ToDo.query.get(id)
    return todo_schema.jsonify(todo)

@app.route("/add",methods = ['POST'])
def add_todo():
    item = request.json['item']
    todos = ToDo(item)
    db.session.add(todos)
    db.session.commit()
    return todo_schema.jsonify(todos)

@app.route("/update/<id>/",methods = ['PUT'])
def update_todo(id):
    todo = ToDo.query.get(id)
    item = request.json['item']
    todo.item = item

    db.session.commit()
    return todo_schema.jsonify(todo)
    
db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
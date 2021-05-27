from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/login")
def login():
    return "<h1>login</h1>"

@app.route("/logout")
def logout():
    return "<h1>logout</h1>"

@app.route("/game")
def game():
    return "<h1>game</h1>"

if __name__ == '__main__':
    app.run(debug=True, port=5003)
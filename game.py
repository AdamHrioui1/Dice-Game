from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", title = 'Home')

@app.route("/login", methods=['GET', 'POST'])
def login():
    return render_template("login.html", title = "Login")

@app.route("/logout", methods=['GET', 'POST'])
def logout():
    return render_template("logout.html", title = "Logout")

@app.route("/game", methods=['GET', 'POST'])
def game():
    return render_template("game.html", title = "Game")

@app.route("/score", methods=['GET', 'POST'])
def score():
    return render_template("score.html", title = "Score")

if __name__ == '__main__':
    app.run(debug=True, port=5003)
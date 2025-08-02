from flask import Flask, render_template, request
import random

app = Flask(__name__)

number = random.randint(1, 100)
attempts = 0

@app.route("/", methods=["GET", "POST"])
def index():
    global number, attempts
    message = ""
    if request.method == "POST":
        guess = int(request.form["guess"])
        attempts += 1
        if guess < number:
            message = "Too low! Try again."
        elif guess > number:
            message = "Too high! Try again."
        else:
            message = f"🎉 Correct! You guessed it in {attempts} tries."
            number = random.randint(1, 100)  # Reset game
            attempts = 0
    return render_template("index.html", message=message)

if __name__ == "__main__":
    app.run(debug=True)
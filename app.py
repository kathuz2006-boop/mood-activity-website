from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    result = ""

    if request.method == "POST":
        mood = request.form["mood"]

        if mood == "happy":
            result = "🎉 Activity: Dance or listen to music | Quote: Keep smiling! | Tip: Share your joy"
            "🍦 Activity: Treat yourself | Quote: Happiness is homemade | Tip: Enjoy a favorite snack"
        elif mood == "sad":
            result = "🚶 Activity: Go for a walk | Quote: This too shall pass | Tip: Talk to a friend"
            "📖 Activity: Read a book | Quote: Knowledge is comfort | Tip: Relax your mind"
        elif mood == "angry":
            result = "🧘 Activity: Deep breathing | Quote: Calm brings power | Tip: Take a break"
            "🏋️‍♂️💪 Activity: Exercise | Quote: Sweat out stress | Tip: Release tension physically"
        elif mood == "tired":
            result = "😴 Activity: Take rest | Quote: Rest is productive | Tip: Drink water"
            "🛀💤 Activity: Relax in a bath | Quote: Recharge yourself | Tip: Unwind your mind"
        elif mood == "stressed":
            result = "🧘 Activity: Meditation | Quote: One step at a time | Tip: Write your thoughts"
            "🌿😌 Activity: Nature walk | Quote: Calm mind heals | Tip: Breathe deeply"
        elif mood == "bored":
            result = "🎮 Activity: Play a game | Quote: Try something new | Tip: Learn a fun skill"
            "📚🤔 Activity: Learn something new | Quote: Curiosity is key | Tip: Challenge your mind"
        elif mood == "Excited":
            result = "📷 Activity: Capture the moment | Quote: Enjoy the energy | Tip: Share your joy"
            "🎉😆 Activity: Celebrate small wins | Quote: Life is a party | Tip: Be spontaneous"
        elif mood == "Lonely":
            result = "📞 Activity: Call a friend | Quote: You are not alone | Tip: Connect with someone"
            "🐾😌 Activity: Spend time with pets | Quote: Love surrounds you | Tip: Feel the comfort"

    return render_template("index.html", result=result)


if __name__ == "__main__":
    # Use the port Render gives you
    port = int(os.environ.get("PORT", 5000))  # fallback to 5000 for local testing
    app.run(host="0.0.0.0", port=port)


const suggestions = {
    happy: [
        "🎉 Activity: Dance or listen to music | Quote: Keep smiling! | Tip: Share your joy",
        "🍦 Activity: Treat yourself | Quote: Happiness is homemade | Tip: Enjoy a favorite snack"
    ],
    sad: [
        "🚶 Activity: Go for a walk | Quote: This too shall pass | Tip: Talk to a friend",
        "📖 Activity: Read a book | Quote: Knowledge is comfort | Tip: Relax your mind"
    ],
    angry: [
        "🧘 Activity: Deep breathing | Quote: Calm brings power | Tip: Take a break",
        "🏋️ Activity: Exercise | Quote: Sweat out stress | Tip: Release tension physically"
    ],
    bored: [
        "🎮 Activity: Play a game | Quote: Try something new | Tip: Learn a fun skill",
        "🎨 Activity: Draw or paint | Quote: Creativity is fun | Tip: Express yourself"
    ],
    tired: [
        "😴 Activity: Take rest | Quote: Rest is productive | Tip: Drink water",
        "🛀 Activity: Relax in a bath | Quote: Recharge yourself | Tip: Unwind your mind"
    ],
    stressed: [
        "🧘 Activity: Meditation | Quote: One step at a time | Tip: Write your thoughts",
        "🌿 Activity: Nature walk | Quote: Calm mind heals | Tip: Breathe deeply"
    ],
    Excited: [
        "📷 Activity: Capture the moment | Quote: Enjoy the energy | Tip: Share your joy",
        "🎉 Activity: Celebrate small wins | Quote: Life is a party | Tip: Be spontaneous"
    ],
    Lonely: [
        "📞 Activity: Call a friend | Quote: You are not alone | Tip: Connect with someone",
        "🐾 Activity: Spend time with pets | Quote: Love surrounds you | Tip: Feel the comfort"
    ]
};

// Get DOM elements
const moodSelect = document.getElementById("mood");
const result = document.getElementById("result");

// Function to pick a random suggestion from an array
function getRandomSuggestion(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

// Event listener for mood change
moodSelect.addEventListener("change", function() {
    const mood = moodSelect.value;

    if (mood === "") {
        result.textContent = ""; // Clear result if blank
    } else if (suggestions[mood]) {
        result.textContent = getRandomSuggestion(suggestions[mood]);
    }
});

// Array of science facts
const scienceFacts = [
    "The Earth is about 4.5 billion years old.",
    "Water covers about 71% of the Earth's surface.",
    "The human body contains about 37.2 trillion cells.",
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
    "A day on Venus is longer than a year on Venus. Venus has an extremely slow rotation period.",
    "There are more stars in the universe than grains of sand on all the Earth's beaches.",
    "The speed of light is approximately 299,792 kilometers per second (186,282 miles per second).",
    "Bananas are berries, but strawberries aren't. Botanically, a berry is a fruit produced from the ovary of a single flower with seeds embedded in the flesh."
];

// Function to display a random science fact
function showFact() {
    const randomIndex = Math.floor(Math.random() * scienceFacts.length);
    const fact = scienceFacts[randomIndex];
    document.getElementById('fact').textContent = fact;
}

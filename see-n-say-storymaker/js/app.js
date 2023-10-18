// Set the text to be spoken for each button
var textToSpeakButton1 = "Diwash, Eren, Mikasa, Kruger,  John";
var textToSpeakButton2 = "Saw, Spoke, Stood, Rode,  Caught";
var textToSpeakButton3 = "A gentle, A curious, A helpful, A tall, and A clever";
var textToSpeakButton4 = "Man, Bug, Cow, Dolphin, and Alligator";
var textToSpeakButton5 = "On the gate., In his lace., On the computer., On the library., and In the airport.";

// Arrays of words for each button
var buttonWords = [
    ["Diwash", "Eren", "Mikasa", "John", "Kruger"],
    ["Saw", "Spoke", "Stood", "Rode", "Caught"],
    ["A gentle", "A curious", "A helpful", "A tall", "A clever"],
    ["Man", "Bug", "Cow", "Dolphin", "Alligator"],
    ["On the gate", "In his lace", "On the computer", "On the library", "In the airport"]
];

// Function to trigger text-to-speech for a given text
function speakText(text) {
    // Check if the SpeechSynthesis API is supported by the browser
    if ('speechSynthesis' in window) {
        var speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    } else {
        alert('Text-to-speech is not supported in your browser.');
    }
}

// Function to display associated paragraphs for a specific button
function displayAssociatedParagraphs(buttonNumber) {
    // Hide all paragraphs initially
    var allParagraphs = document.querySelectorAll('.button-container p');
    allParagraphs.forEach(function (paragraph) {
        paragraph.style.display = 'none';
    });

    // Show the associated paragraphs for the clicked button
    var associatedParagraphs = document.querySelectorAll('.button-container:nth-child(' + buttonNumber + ') p');
    associatedParagraphs.forEach(function (paragraph) {
        paragraph.style.display = 'block';
    });

    // Speak the appropriate text based on the button number
    switch (buttonNumber) {
        case 1:
            speakText(textToSpeakButton1);
            break;
        case 2:
            speakText(textToSpeakButton2);
            break;
        case 3:
            speakText(textToSpeakButton3);
            break;
        case 4:
            speakText(textToSpeakButton4);
            break;
        case 5:
            speakText(textToSpeakButton5);
            break;
        default:
            break;
    }
}

// Function to generate a random story using one word from each button
function generateRandomStory() {
    var story = "";

    // Select one word randomly from each button
    for (var i = 0; i < buttonWords.length; i++) {
        var randomIndex = Math.floor(Math.random() * buttonWords[i].length);
        story += buttonWords[i][randomIndex] + " ";
    }

    // Display the generated story
    document.getElementById('storyDisplay').innerText = story;

    // Speak the generated story
    speakText(story);
}

// Add event listeners to each button to trigger the display function
document.querySelectorAll('.button-container button').forEach(function (button, index) {
    button.addEventListener('click', function () {
        displayAssociatedParagraphs(index + 1); // Button numbers are 1-based
    });
});

// Add event listener for the "Generate Random Story" button
document.getElementById('randomStoryButton').addEventListener('click', generateRandomStory);

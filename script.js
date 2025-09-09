// ==========================================================
// Assignment: Mastering JavaScript Fundamentals - Kenya Theme
// ==========================================================

// ----------------------------------------------------------
// Part 1: Mastering JavaScript Basics
// - Variables, Data Types, Conditionals, and DOM interaction for output
// ----------------------------------------------------------

// Variable declarations
const welcomeButton = document.getElementById('welcomeButton');
const nameInput = document.getElementById('nameInput');
const welcomeMessage = document.getElementById('welcomeMessage');

// Event listener for user interaction
welcomeButton.addEventListener('click', () => {
    // Capture user input
    let userName = nameInput.value;

    // Use a conditional (if/else) to process logic
    if (userName.trim() === '') {
        // Change text content based on condition
        welcomeMessage.textContent = 'Please enter your name!';
        welcomeMessage.style.color = 'red';
    } else {
        // Output result to the webpage
        welcomeMessage.textContent = `Jambo, ${userName}! Karibu to our page about Kenya.`;
        welcomeMessage.style.color = 'green';
    }
});

// ----------------------------------------------------------
// Part 2: JavaScript Functions
// - Creating reusable blocks of logic
// ----------------------------------------------------------

// Custom function 1: Takes an input and returns a calculated value
function convertKesToUsd(kesAmount) {
    // A simple exchange rate for demonstration purposes
    const exchangeRate = 120; // 1 USD ≈ 120 KES
    let usdAmount = kesAmount / exchangeRate;
    return usdAmount.toFixed(2); // Return with 2 decimal places
}

// Custom function 2: Toggles content or a class
function toggleContent(element, content) {
    // Check if the element already has the content
    if (element.textContent === content) {
        element.textContent = 'Click an icon to learn more!';
    } else {
        element.textContent = content;
    }
}

// Event listener to use the conversion function
const convertButton = document.getElementById('convertButton');
const kesAmountInput = document.getElementById('kesAmount');
const conversionResult = document.getElementById('conversionResult');

convertButton.addEventListener('click', () => {
    let amount = parseFloat(kesAmountInput.value);
    if (!isNaN(amount) && amount > 0) {
        const usdValue = convertKesToUsd(amount);
        conversionResult.textContent = `${amount} KES is approximately ${usdValue} USD.`;
    } else {
        conversionResult.textContent = 'Please enter a valid amount in KES.';
    }
});


// ----------------------------------------------------------
// Part 3: JavaScript Loops
// - Using loops for repetitive tasks
// ----------------------------------------------------------

// Example 1: `while` loop for a countdown
const startCountdownButton = document.getElementById('startCountdown');
const countdownList = document.getElementById('countdownList');

startCountdownButton.addEventListener('click', () => {
    // Clear previous list items
    countdownList.innerHTML = '';
    
    let count = 5;
    while (count >= 0) {
        const listItem = document.createElement('li');
        if (count > 0) {
            listItem.textContent = `Countdown: ${count}...`;
        } else {
            listItem.textContent = 'The Great Migration is starting!';
            listItem.style.color = 'red';
            listItem.style.fontWeight = 'bold';
        }
        countdownList.appendChild(listItem);
        count--;
    }
});


// Example 2: `forEach` loop to iterate through an array
const facts = [
    "Mount Kenya is the second highest peak in Africa.",
    "The official languages of Kenya are Swahili and English.",
    "Kenya is famous for its long-distance runners.",
    "Nairobi National Park is the only national park within a city.",
    "The Maasai are a semi-nomadic people living in Kenya and northern Tanzania."
];

const addFactButton = document.getElementById('addFactButton');

addFactButton.addEventListener('click', () => {
    // Check if the facts are already displayed to avoid duplicates
    const factListItems = document.querySelectorAll('#funFacts li');
    if (factListItems.length > 0) {
        alert('Facts are already displayed!');
        return;
    }
    
    // Create a new unordered list element
    const factList = document.createElement('ul');
    factList.id = 'funFacts';

    // Loop through the 'facts' array using forEach
    facts.forEach(fact => {
        // Create a new list item for each fact
        const listItem = document.createElement('li');
        listItem.textContent = fact;
        factList.appendChild(listItem);
    });

    // Append the new list to the section
    document.querySelector('.section-card:last-of-type').appendChild(factList);
});


// ----------------------------------------------------------
// Part 4: Mastering the DOM with JavaScript
// - Selecting elements, listening to events, and dynamic updates
// ----------------------------------------------------------

// DOM Interaction 1: Select elements and listen to click events
const lionIcon = document.getElementById('lion-icon');
const maasaiIcon = document.getElementById('maasai-icon');
const flagIcon = document.getElementById('flag-icon');
const iconDescription = document.getElementById('icon-description');

// Update image sources dynamically
lionIcon.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg';
maasaiIcon.src = 'https://www.worldanimalprotection.org/sites/default/files/images/maasai_man_walking.jpg';
flagIcon.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/1200px-Flag_of_Kenya.svg.png';

// DOM Interaction 2 & 3: Listen for click events and change content
lionIcon.addEventListener('click', () => {
    // Use the function from Part 2 to toggle content
    toggleContent(iconDescription, "The lion is one of the 'Big Five' found in Kenya's national parks.");
});

maasaiIcon.addEventListener('click', () => {
    toggleContent(iconDescription, "The Maasai people are renowned for their distinctive customs and dress.");
});

flagIcon.addEventListener('click', () => {
    toggleContent(iconDescription, "The Kenyan flag's colors represent black (the people), red (the struggle for independence), green (the land), and white (peace).");
});

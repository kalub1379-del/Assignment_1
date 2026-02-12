// Target the HTML elements like form, input fields, buttons
const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");

// Take 2 sample events for Add sample event data
let sampleEvent = [
    {
        title: "web dev",
        date: "4-6-2026",
        category: "workshop",
        description: "ahgs h adg ihai dgjabds"
    },
    {
        title: "web dev2",
        date: "4-7-2026",
        category: "conference",
        description: "ahgs dsfchjh adg ihai dgjabds"
    }
];

// Create event card which contains the user data and store it inside a div
function createEventCard(eventData) {
    const card = document.createElement("div");
    card.classList.add("event-card"); // optional styling class
    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div>${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p> 
    `;
    return card;
}

// Add the created event and append inside the event container
function addEvent(eventData) {
    // If empty-state is present then remove it when new card will be added
    const emptyState = document.getElementById("empty-state");
    if (emptyState) emptyState.remove();

    eventContainer.appendChild(createEventCard(eventData));
}

// Form handling using submit event
eventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // eventData stores the user given value
    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    addEvent(eventData);
});
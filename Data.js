// Map your actual image filenames to App Labels
const apps = [
    { name: "Phone", icon: "phone.png" },
    { name: "Messages", icon: "messages.png" },
    { name: "Contacts", icon: "contacts.png" },
    { name: "Calendar", icon: "calendar.png" },
    { name: "Camera", icon: "camera.png" },
    { name: "Clock", icon: "clock.png" },
    { name: "Calculator", icon: "calculator.png" },
    { name: "Files", icon: "my_files.png" }
];

const homeScreen = document.getElementById('home-screen');
const timeDisplay = document.getElementById('time');

// 1. Render the Apps
apps.forEach(app => {
    const appDiv = document.createElement('div');
    appDiv.className = 'app-icon';
    
    // We assume images are inside the 'images' folder as shown in your video
    appDiv.innerHTML = `
        <img src="images/${app.icon}" alt="${app.name}">
        <span>${app.name}</span>
    `;

    appDiv.onclick = () => alert(`Opening ${app.name}...`);
    homeScreen.appendChild(appDiv);
});

// 2. Simple Clock Logic
function updateClock() {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

setInterval(updateClock, 1000);
updateClock();

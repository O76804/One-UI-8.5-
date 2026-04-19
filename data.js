// Data for the application
const appConfig = {
    dialerKeys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'],
    messages: [
        { sender: "3235356796", preview: "SM-N975F TPA", date: "Nov 10" },
        { sender: "Jeff Springer", preview: "Check out the new video!", date: "Today" }
    ]
};

// Functions to handle UI
window.showApp = (appId) => {
    document.querySelectorAll('.app-screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(appId).classList.add('active');
    document.getElementById('app-title').textContent = appId.charAt(0).toUpperCase() + appId.slice(1);
};

// Initialize Dialer
const dialerContainer = document.getElementById('dialer-keys');
const phoneDisplay = document.getElementById('phone-display');

appConfig.dialerKeys.forEach(key => {
    const btn = document.createElement('div');
    btn.className = 'key';
    btn.textContent = key;
    btn.onclick = () => {
        if(phoneDisplay.textContent === '_') phoneDisplay.textContent = '';
        phoneDisplay.textContent += key;
    };
    dialerContainer.appendChild(btn);
});

// Initialize Messages
const messageList = document.getElementById('message-list');
appConfig.messages.forEach(msg => {
    const item = document.createElement('div');
    item.style.borderBottom = "1px solid #eee";
    item.style.padding = "10px 0";
    item.innerHTML = `<strong>${msg.sender}</strong><br><small>${msg.preview}</small>`;
    messageList.appendChild(item);
});

// Default App
showApp('dialer');
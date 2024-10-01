// Countdown Timer
document.addEventListener("DOMContentLoaded", function() {
    const countdownTimer = document.getElementById("timer");
    const navratriDate = new Date("2024-10-03T00:00:00").getTime(); // Update this date accordingly

    const updateCountdown = () => {
        const now = new Date().getTime();
        const timeRemaining = navratriDate - now;

        if (timeRemaining >= 0) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            
            countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            countdownTimer.innerHTML = "Happy Navratri!";
        }
    };

    setInterval(updateCountdown, 1000); // Update the countdown every second
});

// Adding Friend Input Fields
let friendCount = 0;
const maxFriends = 10;

document.getElementById('addFriendBtn').addEventListener('click', function() {
    if (friendCount < maxFriends) {
        const friendsInput = document.getElementById('friendsInput');
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Friend ${friendCount + 1} Name`;
        input.id = `friendName${friendCount}`;
        friendsInput.appendChild(input);
        friendCount++;
    } else {
        alert("You can only add up to 10 friends.");
    }
});

// Generate Personalized Greetings
document.getElementById('generateGreetingBtn').addEventListener('click', function() {
    const senderName = document.getElementById('senderName').value.trim();
    const personalizedMessages = document.getElementById('personalizedMessages');
    personalizedMessages.innerHTML = ''; // Clear previous messages

    if (senderName) {
        for (let i = 0; i < friendCount; i++) {
            const friendName = document.getElementById(`friendName${i}`).value.trim();
            if (friendName) {
                const message = `Dear ${friendName},\nWishing you a joyous Navratri filled with blessings!\nBest regards,\n${senderName}\n\n`;
                personalizedMessages.innerHTML += message;
            }
        }
        personalizedMessages.style.display = 'block';
        document.getElementById('whatsappShareBtn').style.display = 'block';
    } else {
        alert("Please enter your name.");
    }
});

// Send Link to Friend
document.getElementById('sendLinkBtn').addEventListener('click', function() {
    const friendName = document.getElementById('friendLink').value.trim();
    const link = window.location.href; // Gets the current page URL
    const message = `Hello ${friendName},\nCheck out this link to create a personalized Navratri greeting: ${link}`;
    const whatsappMessage = encodeURIComponent(message);
    
    if (friendName) {
        window.open(`https://wa.me/?text=${whatsappMessage}`, '_blank');
    } else {
        alert("Please enter your friend's name.");
    }
});

// Share on WhatsApp
document.getElementById('whatsappShareBtn').addEventListener('click', function() {
    const messages = document.getElementById('personalizedMessages').innerText;
    const whatsappMessage = encodeURIComponent(messages);

    window.open(`https://wa.me/?text=${whatsappMessage}`, '_blank');
});

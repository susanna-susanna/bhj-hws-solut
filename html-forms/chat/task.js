const chatWidget = document.querySelector('.chat-widget');
const openChat = document.querySelector('.chat-widget__side');
const inputChat = document.getElementById('chat-widget__input');
const chatMessages = document.getElementById('chat-widget__messages');
const botMessages = ["Hi! I'm here", "I don't understand anything", "Please, expect an answer", "Waiting time is two years"];

openChat.addEventListener('click', function() {
    chatWidget.classList.add('chat-widget_active');
})

function time() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    return `${hours}:${minutes}:${seconds}`;
}

function chating() {
    inputChat.addEventListener('keydown', event => {
        if(event.key == "Enter" && inputChat.value) {
            chatMessages.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">${time()}</div>
                    <div class="message__text">${inputChat.value}</div>
                </div>
            `;
            chatMessages.innerHTML += `
                <div class="message">
                    <div class="message__time">${time()}</div>
                    <div class="message__text">
                        ${botMessages[Math.floor(Math.random() * botMessages.length)]}
                    </div>
                </div>
            `;

            inputChat.value = '';
        }
    })
}
chating();
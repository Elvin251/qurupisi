
   

   function sendMessage() {
    const messageInput = document.querySelector(".textinput");
    const chatMessages = document.querySelector(".chat-messages");
    // // const messageText = messageInput.value.trim();
    // if (!messageText) return;
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", "sent");
    messageElement.textContent = messageInput.value;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    messageInput.value = "";
    messageInput.focus();
}

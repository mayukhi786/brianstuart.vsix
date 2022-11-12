let firstMsg = true;

document.addEventListener('DOMContentLoaded', () => {

    // // Preserve chat for a single session 
    //(commented out because I don't need prev session preservation on each activation)
    // if (localStorage.getItem('msgHistory') === null) {
    //     localStorage.setItem('msgHistory', JSON.stringify([]));
    // } else {
    //     try {
    //         const msgHistory = JSON.parse(localStorage.getItem('msgHistory'));
    //         msgHistory.map((each) => {
    //             addMessage({ text: each.text, fromDaddy: each.fromDaddy }, false);
    //         });
    //     } catch (e) {
    //         console.log('failed to restore chat history');
    //         console.log(e);
    //     }
    // }

    const textarea = document.querySelector('#ddbInput textarea');
    textarea.focus();
    //listen to user input presses
    textarea.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && event.target.value) {
            addMessage({ text: event.target.value });
            event.preventDefault();
            reply(event.target.value);
            event.target.value = '';
        }
    });
});

//save prev message from user and corresponding reply from bot ON EACH SESSION ONLY
function saveMessage({ text, fromDaddy }) {
    let messages = JSON.parse(localStorage.getItem('msgHistory'));
    messages.push({
        text: text,
        fromDaddy: fromDaddy
    });
    localStorage.setItem('msgHistory', JSON.stringify(messages));
}

//functionality for spans for message input and exchange
function addMessage({ text, fromDaddy }, saveMsg = true) {
    const chatElt = document.createElement('p');
    chatElt.className = 'ddbChat'; //main parent

    //spans for user and Daddy, depending on last message span
    const borderElt = document.createElement('span');
    borderElt.className = `ddbChatBorder ${fromDaddy ? 'ddbChatBorder-Daddy' : 'ddbChatBorder-User'}`;
    chatElt.appendChild(borderElt);

    const authorElt = document.createElement('span');
    authorElt.className = 'ddbAuthorName';
    authorElt.innerHTML = "<b>" + (fromDaddy ? 'Brian Daddy' : 'you') + '</b>';
    chatElt.appendChild(authorElt);

    const messageElt = document.createElement('span');
    messageElt.className = 'ddbChatMessage';
    messageElt.innerHTML = formatMessageText(text);
    chatElt.appendChild(messageElt);

    const chatText = document.querySelector('#ddbChatText');
    chatText.appendChild(chatElt);
    chatText.scrollTop = chatText.scrollHeight;

    if (saveMsg) {
        saveMessage({ text: text, fromDaddy: fromDaddy });
    }
}

//function for bot's reply haha
function reply(prevMsg) {
    let reply = "too much abstraction ".repeat(1 + getRandomInt(3)).trim();
    if (prevMsg && prevMsg.endsWith("!")) {
        reply += "!";
    }
    if (firstMsg) {
        timeout = 250; //this creates a feel of "random starup response times"
    } else {
        timeout = 500 * (1 + Math.random() * 2);
        firstMsg = false;
    }
    //IMPORTANT!! Timeout the function after each reply from the bot or replies CONTINUE after initial message has been sent!
    setTimeout(() => addMessage({ text: reply, fromDaddy: true }), timeout);
}

function formatMessageText(text) {
    return text.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .replace(/\n/g, '<br/>');
}

//generates random integer between 1 and max
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
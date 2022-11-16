let firstMsg = true;

document.addEventListener('DOMContentLoaded', () => {

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> a5e2142fd27b0c6de99f4bde2d7aac2a300fc9ea
>>>>>>> 34d6f4a7f95babe2911951a549d4ce0503affb06
    // Preserve chat for a single session
    if (localStorage.getItem('msgHistory') === null) {
        localStorage.setItem('msgHistory', JSON.stringify([]));
    } else {
        try {
            const msgHistory = JSON.parse(localStorage.getItem('msgHistory'));
            msgHistory.map((each) => {
                addMessage({ text: each.text, fromDuck: each.fromDuck }, false);
            });
        } catch (e) {
            console.log('ddb50: failed to restore chat history');
            console.log(e);
        }
    }

    const textarea = document.querySelector('#ddbInput textarea');
    textarea.focus();
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 34d6f4a7f95babe2911951a549d4ce0503affb06
=======
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
>>>>>>> 1a72b38977fce3fd2ac9c20cdced9b9624586ed2
<<<<<<< HEAD
=======
>>>>>>> a5e2142fd27b0c6de99f4bde2d7aac2a300fc9ea
>>>>>>> 34d6f4a7f95babe2911951a549d4ce0503affb06
    textarea.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && event.target.value) {
            addMessage({ text: event.target.value });
            event.preventDefault();
            reply(event.target.value);
            event.target.value = '';
        }
    });
});

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> a5e2142fd27b0c6de99f4bde2d7aac2a300fc9ea
>>>>>>> 34d6f4a7f95babe2911951a549d4ce0503affb06
function saveMessage({ text, fromDuck }) {
    let messages = JSON.parse(localStorage.getItem('msgHistory'));
    messages.push({
        text: text,
        fromDuck: fromDuck
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 34d6f4a7f95babe2911951a549d4ce0503affb06
=======
//save prev message from user and corresponding reply from bot ON EACH SESSION ONLY
function saveMessage({ text, fromDaddy }) {
    let messages = JSON.parse(localStorage.getItem('msgHistory'));
    messages.push({
        text: text,
        fromDaddy: fromDaddy
>>>>>>> 1a72b38977fce3fd2ac9c20cdced9b9624586ed2
<<<<<<< HEAD
=======
>>>>>>> a5e2142fd27b0c6de99f4bde2d7aac2a300fc9ea
>>>>>>> 34d6f4a7f95babe2911951a549d4ce0503affb06
    });
    localStorage.setItem('msgHistory', JSON.stringify(messages));
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> a5e2142fd27b0c6de99f4bde2d7aac2a300fc9ea
>>>>>>> 34d6f4a7f95babe2911951a549d4ce0503affb06
function addMessage({ text, fromDuck }, saveMsg = true) {
    const chatElt = document.createElement('p');
    chatElt.className = 'ddbChat';

    const borderElt = document.createElement('span');
    borderElt.className = `ddbChatBorder ${fromDuck ? 'ddbChatBorder-Duck' : 'ddbChatBorder-User'}`;
<<<<<<< HEAD
=======
//functionality for spans for message input and exchange
function addMessage({ text, fromDaddy }, saveMsg = true) {
    const chatElt = document.createElement('p');
    chatElt.className = 'ddbChat'; //main parent

    //spans for user and Daddy, depending on last message span
    const borderElt = document.createElement('span');
    borderElt.className = `ddbChatBorder ${fromDaddy ? 'ddbChatBorder-Daddy' : 'ddbChatBorder-User'}`;
>>>>>>> 1a72b38977fce3fd2ac9c20cdced9b9624586ed2
    chatElt.appendChild(borderElt);

    const authorElt = document.createElement('span');
    authorElt.className = 'ddbAuthorName';
<<<<<<< HEAD
    authorElt.innerHTML = "<b>" + (fromDuck ? 'Daddy Brian' : 'you') + '</b>';
=======
    authorElt.innerHTML = "<b>" + (fromDaddy ? 'Brian Daddy' : 'you') + '</b>';
>>>>>>> 1a72b38977fce3fd2ac9c20cdced9b9624586ed2
    chatElt.appendChild(authorElt);

    const messageElt = document.createElement('span');
    messageElt.className = 'ddbChatMessage';
    messageElt.innerHTML = formatMessageText(text);
    chatElt.appendChild(messageElt);

=======
<<<<<<< HEAD
    chatElt.appendChild(borderElt);

    const authorElt = document.createElement('span');
    authorElt.className = 'ddbAuthorName';
    authorElt.innerHTML = "<b>" + (fromDuck ? 'Brian Daddy' : 'you') + '</b>';
    chatElt.appendChild(authorElt);

    const messageElt = document.createElement('span');
    messageElt.className = 'ddbChatMessage';
    messageElt.innerHTML = formatMessageText(text);
    chatElt.appendChild(messageElt);

    const chatText = document.querySelector('#ddbChatText');
    chatText.appendChild(chatElt);
    chatText.scrollTop = chatText.scrollHeight;

    if (saveMsg) {
        saveMessage({ text: text, fromDuck: fromDuck });
=======
=======
//functionality for spans for message input and exchange
function addMessage({ text, fromDaddy }, saveMsg = true) {
    const chatElt = document.createElement('p');
    chatElt.className = 'ddbChat'; //main parent

    //spans for user and Daddy, depending on last message span
    const borderElt = document.createElement('span');
    borderElt.className = `ddbChatBorder ${fromDaddy ? 'ddbChatBorder-Daddy' : 'ddbChatBorder-User'}`;
>>>>>>> 1a72b38977fce3fd2ac9c20cdced9b9624586ed2
    chatElt.appendChild(borderElt);

    const authorElt = document.createElement('span');
    authorElt.className = 'ddbAuthorName';
<<<<<<< HEAD
    authorElt.innerHTML = "<b>" + (fromDuck ? 'Daddy Brian' : 'you') + '</b>';
=======
    authorElt.innerHTML = "<b>" + (fromDaddy ? 'Brian Daddy' : 'you') + '</b>';
>>>>>>> 1a72b38977fce3fd2ac9c20cdced9b9624586ed2
    chatElt.appendChild(authorElt);

    const messageElt = document.createElement('span');
    messageElt.className = 'ddbChatMessage';
    messageElt.innerHTML = formatMessageText(text);
    chatElt.appendChild(messageElt);

>>>>>>> 34d6f4a7f95babe2911951a549d4ce0503affb06
    const chatText = document.querySelector('#ddbChatText');
    chatText.appendChild(chatElt);
    chatText.scrollTop = chatText.scrollHeight;

    if (saveMsg) {
<<<<<<< HEAD
        saveMessage({ text: text, fromDuck: fromDuck });
=======
        saveMessage({ text: text, fromDaddy: fromDaddy });
>>>>>>> 1a72b38977fce3fd2ac9c20cdced9b9624586ed2
<<<<<<< HEAD
=======
>>>>>>> a5e2142fd27b0c6de99f4bde2d7aac2a300fc9ea
>>>>>>> 34d6f4a7f95babe2911951a549d4ce0503affb06
    }
}

//function for bot's reply haha
function reply(prevMsg) {
    let reply = "too much abstraction ".repeat(1 + getRandomInt(3)).trim();
    if (prevMsg && prevMsg.endsWith("!")) {
        reply += "!";
    }
    if (firstMsg) {
<<<<<<< HEAD
        timeout = 250;
=======
<<<<<<< HEAD
        timeout = 250; //this creates a feel of "random starup response times"
>>>>>>> 1a72b38977fce3fd2ac9c20cdced9b9624586ed2
=======
<<<<<<< HEAD
        timeout = 250;
=======
        timeout = 250; //this creates a feel of "random starup response times"
>>>>>>> 1a72b38977fce3fd2ac9c20cdced9b9624586ed2
>>>>>>> a5e2142fd27b0c6de99f4bde2d7aac2a300fc9ea
>>>>>>> 34d6f4a7f95babe2911951a549d4ce0503affb06
    } else {
        timeout = 500 * (1 + Math.random() * 2);
        firstMsg = false;
    }
<<<<<<< HEAD
    setTimeout(() => addMessage({ text: reply, fromDuck: true }), timeout);
=======
<<<<<<< HEAD
    //IMPORTANT!! Timeout the function after each reply from the bot or replies CONTINUE after initial message has been sent!
    setTimeout(() => addMessage({ text: reply, fromDaddy: true }), timeout);
>>>>>>> 1a72b38977fce3fd2ac9c20cdced9b9624586ed2
=======
<<<<<<< HEAD
    setTimeout(() => addMessage({ text: reply, fromDuck: true }), timeout);
=======
    //IMPORTANT!! Timeout the function after each reply from the bot or replies CONTINUE after initial message has been sent!
    setTimeout(() => addMessage({ text: reply, fromDaddy: true }), timeout);
>>>>>>> 1a72b38977fce3fd2ac9c20cdced9b9624586ed2
>>>>>>> a5e2142fd27b0c6de99f4bde2d7aac2a300fc9ea
>>>>>>> 34d6f4a7f95babe2911951a549d4ce0503affb06
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
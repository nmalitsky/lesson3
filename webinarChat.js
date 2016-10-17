const ChatApp = require('./ChatApp').ChatApp;
const chatOnMessage = require('./ChatApp').chatOnMessage;
const chatOnPrepareToAnswer = require('./ChatApp').chatOnPrepareToAnswer;

let webinarChat = new ChatApp('webinar');

webinarChat
       //.once('message', chatOnPrepareToAnswer); // 1.1 - как вариант когда единожды срабатывает только при запуске чата
       .on( 'message', chatOnMessage)
       .on('message', chatOnPrepareToAnswer); // 1.1

// отписаться от chatOnMessage
setTimeout( ()=> {
  webinarChat.removeListener('message', chatOnMessage);
}, 30000 );

const ChatApp = require('./ChatApp').ChatApp;
const chatOnMessage = require('./ChatApp').chatOnMessage;
const chatOnPrepareToAnswer = require('./ChatApp').chatOnPrepareToAnswer;
const chatOnClose = require('./ChatApp').chatOnClose;

let facebookChat = new ChatApp('=========facebook');
facebookChat.on('message', chatOnMessage); 

// Закрыть фейсбук
setTimeout( ()=> {
  console.log('Закрываю фейсбук, все внимание — вебинару!');
  facebookChat.removeListener('message', chatOnMessage);
}, 15000 );

const ChatApp = require('./ChatApp').ChatApp;
const chatOnMessage = require('./ChatApp').chatOnMessage;
const chatOnPrepareToAnswer = require('./ChatApp').chatOnPrepareToAnswer;
const chatOnClose = require('./ChatApp').chatOnClose;

let vkChat = new ChatApp('---------vk');

vkChat.setMaxListeners(2) // 1.2
       //.once('message', chatOnPrepareToAnswer); // 1.1 - как вариант когда единожды срабатывает только при запуске чата
       .on('message', chatOnMessage)
       .on('message', chatOnPrepareToAnswer) // 1.3 (1.1)
       .on('close', chatOnClose); // 2.2

// Закрыть вконтакте
setTimeout( ()=> {
  console.log('Закрываю вконтакте...');
  vkChat.close('Чат вконтакте закрылся :('); // 2.3
  vkChat.removeListener('message', chatOnMessage);
}, 10000 );

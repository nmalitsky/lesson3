const EventEmitter = require('events');

const ChatApp = class ChatApp extends EventEmitter {
  /**
   * @param {String} title
   */
  constructor(title) {
    super();

    this.title = title;

    // Посылать каждую секунду сообщение
    setInterval(() => {
      this.emit('message', `${this.title}: ping-pong`);
    }, 1000);
  }

  close(message) {
      this.emit('close', message);
  }
}

const chatOnMessage = (message) => {
  console.log(message);
};

const chatOnPrepareToAnswer = () => {
  console.log('Готовлюсь к ответу');
};

// 2.2
const chatOnClose = (message) => {
  console.log(message);
};


module.exports.ChatApp = ChatApp;
module.exports.chatOnMessage = chatOnMessage;
module.exports.chatOnPrepareToAnswer = chatOnPrepareToAnswer;
module.exports.chatOnClose = chatOnClose;




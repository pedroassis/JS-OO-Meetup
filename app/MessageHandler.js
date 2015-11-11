
'@RequestHandler("/message")'
function MessageHandler (Messages) {
    
    '@Get("/all")'
    this.fetchAll = function() {
        return Messages;
    };

}

module.exports = MessageHandler;
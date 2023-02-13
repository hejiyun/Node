const Logger = require('egg-logger').Logger;
const CoustomTransport = require('./CoustomTransport.js');

module.exports = function(ctx){
    const logger = new Logger();
    console.log(ctx, '请求')
    logger.set('file', new CoustomTransport({
        level: 'INFO',
        file: `./logs/NodeEgg/NodeEgg.log`,
    }, ctx));
    return logger;
};
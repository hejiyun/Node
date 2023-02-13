const CustomLogger = require('./CustomLogger');
module.exports = {
    get swLog() {
        return CustomLogger(this);
    }
};
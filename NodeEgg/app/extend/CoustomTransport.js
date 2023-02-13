const FileTransport = require('egg-logger').FileTransport;
const moment = require('moment');

class CoustomTransport extends FileTransport {
    constructor(options, ctx) {
        super(options);
        this.ctx = ctx;
    }
    log(level, args, meta) {
        const prefixStr = this.buildFormat(level);
        for (let i in args) {
            if (args.hasOwnProperty(i)) {
                if (parseInt(i, 10) === 0) {
                    args[i] = `${prefixStr}${args[i]}`;
                }
                if (parseInt(i, 10) === args.length - 1) {
                    args[i] += '\n';
                }
            }
        }
        super.log(level, args, meta);
    }

    buildFormat(level) {
        // 时间
        const timeStr = `[${moment().format('YYYY-MM-DD HH:mm:ss.SSS')}]`;
        // 用户
        const threadNameStr = `[userID:${process.pid}]`;
        // 请求类型
        const methodtype = `[${this.ctx.request.method}]` 
        // 请求地址
        const urlStr = `[${this.ctx.request.url}]`
        
        return `${timeStr}${threadNameStr}${methodtype}${urlStr}`;
    }

    setUserId(userId) {
        this.userId = userId;
    }
}

module.exports = CoustomTransport;
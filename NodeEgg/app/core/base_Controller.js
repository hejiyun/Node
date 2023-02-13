
const { Controller } = require('egg');
class BaseController extends Controller {
  get user() {
    return this.ctx.session.user;
  }
  success(data) {
    this.ctx.swLog.info('success');
    this.ctx.body = { success: true, data };
  }
  notFound(msg) {
    ctx.swLog.error(msg);
    this.ctx.throw(404, msg || 'not found');
  }
}
module.exports = BaseController;
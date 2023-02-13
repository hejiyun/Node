'use strict';

const BaseController = require('../../core/base_Controller');
class DetailController extends BaseController {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.user.all()
    this.success(res)
  }
}

module.exports = DetailController;

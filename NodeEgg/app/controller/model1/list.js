'use strict';

const BaseController = require('../../core/base_Controller');

class ListController extends BaseController {
  async index() {
    const { ctx } = this;
    // console.log(ctx.req.file, '这里是', ctx.req.body)
    console.log(ctx.request.files[0])
     // 处理file字段， 简单处理一下
     ctx.request.body.file = `http://www.xxxx2.com?` + ctx.request.files[0].filename
     ctx.body = {
        filename: ctx.request.files[0].filename,//返回文件名
        body:ctx.request.body
      }
    const res = await ctx.service.user.insert(ctx.request.body)
    this.success(res)
  }
}

module.exports = ListController;

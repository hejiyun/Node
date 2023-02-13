// 引用用户模版数据
const User = require('../models/user.js');

const userController = {
  // showUser 获取用户数据并返回到页面
  showUser:async function(ctx, name){
    try{
      let userData = await User.all()
      ctx.body = {
        code: 200,
        message: "操作成功",
        data: userData
      }
    }catch(e){
      ctx.app.emit('error', e, ctx);
      ctx.body = {
          code: ctx.response.status,
          msg: e.message
      };
    }
  },
  addUser: async function(ctx, name){
    // console.log(ctx.request.body)
    try{
      await User.insert(ctx.request.body)
      ctx.body = {
        code: 200,
        message: "操作成功",
        data: {}
      }
    }catch(e){
      ctx.app.emit('error', e, ctx);
      ctx.body = {
        code: ctx.response.status,
        msg: e.message
      };
    }       
  },
  updateUser: async function(ctx,name){
    console.log(ctx.request.body)
    try{
      await User.update(ctx.request.body.id, ctx.request.body)
      ctx.body = {
        code: 200,
        message: "操作成功",
        data: {}
      }
    }catch(e){
      ctx.app.emit('error', e, ctx);
      ctx.body = {
        code: ctx.response.status,
        msg: e.message
      };
    }
  },
  deleteUser:async function(ctx,name){
    console.log(ctx.request.body)
    try{
      await User.delete(ctx.request.body.id)
      ctx.body = {
        code: 200,
        message: "操作成功",
        data: {}
      }
    }catch(e){
      ctx.app.emit('error', e, ctx);
      ctx.body = {
        code: ctx.response.status,
        msg: e.message
      };
    }
  },
  addFile: async function(ctx,next){
    console.log(ctx.request.body, ctx.req.body)
    // console.log(ctx.req.file, '这里是', ctx.req.body)
     // 处理file字段， 简单处理一下
     ctx.req.body.file = `http://www.xxxx2.com?` + ctx.req.file.originalname
     ctx.body = {
        filename: ctx.req.file.filename,//返回文件名
        body:ctx.req.body
      }
    try{
      ctx.body = {
        code: 200,
        message: "操作成功",
        data: ctx.req.body
      }
      await User.insert(ctx.req.body)
    }catch(e){
      ctx.app.emit('error', e, ctx);
      ctx.body = {
        code: ctx.response.status,
        msg: e.message
      };
    }       
  },
}

module.exports = userController;
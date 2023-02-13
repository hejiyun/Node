// 引用用户模版数据
const User = require('../models/user.js');

const userController = {
  // showUser 获取用户数据并返回到页面
  showUser: async function(req,res,next){
    try{
      let userData = await User.all()
      res.json({
        code: 200,
        message: "操作成功",
        data: userData
      })
    }catch(e){
      res.json({ code: 0, message: "操作失败", data: e })
    }
  },
  addUser: async function(req,res,next){
    try{
      await User.insert(req.body)
      res.json({
        code: 200,
        message: "操作成功",
        data: {}
      })
    }catch(e){
      res.json({ code: 0, message: "操作失败", data: e })
    }       
  },
  updateUser: async function(req,res,next){
    try{
      await User.update(req.body.id, req.body)
      res.json({
        code: 200,
        message: "操作成功",
        data: {}
      })
    }catch(e){
      res.json({ code: 0, message: "操作失败", data: e })
    }
  },
  deleteUser: async function(req,res,next){
    console.log(req.body, 'zheki')
    try{
      await User.delete(req.body.id)
      res.json({
        code: 200,
        message: "操作成功",
        data: {}
      })
    }catch(e){
      res.json({ code: 0, message: "操作失败", data: e })
    }
  },
  addFile: async function(req,res,next){
    console.log(req.body, req.file)
     // 处理file字段， 简单处理一下
    req.body.file = `http://www.xxxx.com?` + req.file.originalname
    try{
      await User.insert(req.body)
      res.json({
        code: 200,
        message: "操作成功",
        data: {}
      })
    }catch(e){
      res.json({ code: 0, message: "操作失败", data: e })
    }       
  },
}

module.exports = userController;
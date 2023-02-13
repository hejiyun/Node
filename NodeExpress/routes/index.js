var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');
// 1. 引入包
const multer = require('multer');
// 2. 配置
const upload = multer({dest:'uploads/'}) // 上传的文件会保存在这个目录下,名称可以任意取


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 获取用户信息
router.get('/get_user', userController.showUser);

// 新增用户信息
router.post('/add_user', userController.addUser);

// 更新用户信息
router.post('/update_user', userController.updateUser);

// 删除用户信息
router.post('/delete_user', userController.deleteUser);

// 新增用户信息带文件
router.post('/add_file',upload.single('file'), (req,res,next) => {userController.addFile(req,res,next)});

module.exports = router;

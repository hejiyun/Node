const router = require('koa-router')()
const userController = require('../controllers/user');
// 1. 引入包
const multer = require('koa-multer');
// 2. 配置
const upload = multer({dest:'uploads/'}) // 上传的文件会保存在这个目录下,名称可以任意取


router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

// 获取用户信息
router.get('/get_user', userController.showUser);

// 新增用户信息
router.post('/add_user', userController.addUser);

// 更新用户信息
router.post('/update_user', userController.updateUser);

// 删除用户信息
router.post('/delete_user', userController.deleteUser);


// 新增用户信息带文件
// 新增用户信息带文件
router.post('/add_file',upload.single('file'), (ctx) => {userController.addFile(ctx)});

module.exports = router

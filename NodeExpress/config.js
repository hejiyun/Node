const configs = {
    mysql: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: '00000000',  // 自己设置的密码
      database: 'NodeExpress' // 数据库的名字
    },
    // 打印错误
    log: {
      error (message) {
        console.log('[knex error]', message)
      }
    }
  }
  
  module.exports = configs
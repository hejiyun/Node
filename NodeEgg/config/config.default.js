/* eslint valid-jsdoc: "off" */

'use strict';
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1675908643589_9009';

  // add your middleware config here
  config.middleware = [];
  // config.slow = {
	// 	threshold: 1,
	// 	// match: "/model1/list",
	// };
  config.security = {
    csrf: {
      enable: false,
    }
  }
  config.multipart = {
    mode: 'file',  // 对应文件类型 
  }
  config.i18n = {
    enable: false
}

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  exports.knex = {
    // database configuration
    client: {
      // database dialect
      dialect: 'mysql',
      connection: {
        // host
        host: '127.0.0.1',
        // port
        port: '3306',
        // username
        user: 'root',
        // password
        password: '00000000',
        // database
        database: 'NodeExpress',
      },
      // connection pool
      pool: { min: 0, max: 5 },
      // acquire connection timeout, millisecond
      acquireConnectionTimeout: 30000,
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  return {
    ...config,
    ...userConfig,
  };
};

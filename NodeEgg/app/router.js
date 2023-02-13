'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/model1')(app)
};

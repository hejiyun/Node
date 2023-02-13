'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  knex: {
    enable: true,
    package: 'egg-knex',
  }
};

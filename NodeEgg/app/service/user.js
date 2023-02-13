'use strict';

const { Service } = require('egg');


class User extends Service {

    // 查找
    async all() {
      const all = await this.app.knex('user').select()
      return all;
    }
  
    // 新增
    async insert(params) {
      const insert = await this.app.knex('user').insert(params)
      return insert
    }
  
    // 更改
    async update(id, params) {
      const update = await this.app.knex('user')
        .where('id', '=', id).update(params)
      return update
    }

    // 删除
    async delete(id) {
        const update = await this.app.knex('user')
          .where('id', '=', id)
          .del()
        return update
    }
  }
  
module.exports = User;
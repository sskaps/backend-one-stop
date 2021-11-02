/**
 * @description 实例化 Sequelize
 * @author sskaps
 */

const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const { isTest } = require('../utils/env')

const { database, user, password, host, pool } = MYSQL_CONF
const conf = {
    host,
    dialect: 'mysql',
    pool
}

// 单元测试，关闭sql输出
if (isTest) {
    conf.logging = () => {}
}

const seq = new Sequelize(database, user, password, conf)

module.exports = seq

/**
 * @description 配置文件
 * @author sskaps
 */

const { isProd } = require('../utils/env')

// redis 配置
let REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
}

// mysql 配置

let MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'frontend_one_stop',
    pool: {}
}

// 线上环境
if (isProd) {
    REDIS_CONF = {
        port: 6379,
        host: ''
    }

    conf.pool = {
        max: 5,
        min: 0,
        idle: 10000 // 如果一个连接池 10 s 之内没有被使用，则释放
    }
}

module.exports = {
    REDIS_CONF,
    MYSQL_CONF
}

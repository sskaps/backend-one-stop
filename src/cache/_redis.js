/**
 * @description 连接redis的方法 get set
 * @author sskaps
 */

const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
redisClient.on('error', err => {
    console.error('redis error:', err)
})

/**
 * set
 * @param {string} key
 * @param {string} value
 * @param {number} timeout 过期时间，单位 s
 */
function set(key, value, timeout = 60 * 60) {
    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }
    redisClient.set(key, value)
    redisClient.expire(key, timeout)
}

/**
 * get
 * @param {string} key
 */
function get(key) {
    const promise = new Promise((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if (err) {
                reject(err)
                return
            }
            if (val === null) {
                resolve(null)
                return
            }
            // 防止存的时候被转成了字符串
            try {
                resolve(
                    JSON.parse(val)
                )
            } catch (error) {
                // 出错则，正常返回val就行
                resolve(val)
            }
        })
    })
    return promise
}

module.exports = {
    set,
    get
}
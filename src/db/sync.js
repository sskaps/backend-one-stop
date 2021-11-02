/**
 * @description 同步Sequlize
 * @author sskaps
 */

const seq = require('./seq')

// 测试连接
seq.authenticate().then(() => {
    console.log('auth ok')
}).catch(() => {
    console.log('auth error')
})

// 执行同步, force: true 每次清空数据表重新建表
seq.sync({ force: true }).then(() => {
    console.log('sync ok')
    process.exit()
})

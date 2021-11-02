/**
 * @description json test
 * @author sskaps
 */

const server = require('./server')

test('json 接口返回数据格式正确', async() => {
    const res = await server.get('/json')
    expect(res.body).toEqual({
        title: 'koa2 json'
    })
    expect(res.body.title).toBe('koa2 json')
})

// test('post 接口返回数据格式正确', async() => {
//     const res = await server.post('/login').send({
//         userName: '',
//         password: ''
//     })
//     expect(res.body).toEqual({
//         title: 'koa2 json'
//     })
//     expect(res.body.title).toBe('koa2 json')
// })
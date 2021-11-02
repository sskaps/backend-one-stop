const Koa = require('koa')
const main = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(main)

// middlewares
main.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
main.use(json())
main.use(logger())
main.use(require('koa-static')(__dirname + '/public'))

main.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
main.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
main.use(index.routes(), index.allowedMethods())
main.use(users.routes(), users.allowedMethods())

// error-handling
main.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = main

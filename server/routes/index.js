const router = require('koa-router')()
const controllers = require('../controllers')

router.use('', controllers.weapp.index.routes(), controllers.weapp.index.allowedMethods())

router.get('/demo', controllers.demo)

module.exports = router

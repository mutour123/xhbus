const Koa = require('koa');
const app = new Koa();
const static = require('koa-static')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const rt = require('./controller/router')
const path= require('path')

app.use(bodyParser())
app.use(router.routes())
app.use( static(path.join(__dirname+ "/static")));

router.get('/', rt.root)
router.get('/collection', rt.collection)
router.post('/login', rt.login)
router.post('/reg', rt.reg)
router.post('/modify', rt.modify)


app.listen('3000',()=>{
	console.log('server is running port at 3000...')
})

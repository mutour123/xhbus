exports.root = async ctx => {
  ctx.body = "hello world"
}

exports.collection = async ctx => {
  ctx.type = 'json'
  ctx.body = '收藏成功'
}
exports.login = async ctx => {
  ctx.type = 'json'
  ctx.body = '登录成功'
}
exports.reg = async ctx => {
  ctx.type = 'json'
  ctx.body = '注册成功'
}
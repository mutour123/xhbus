exports.root = async ctx => {
  ctx.body = "hello world"
}

exports.collection = async ctx => {
  ctx.type = 'json'
  ctx.body = '收藏成功'
}
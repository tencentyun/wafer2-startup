const { mysql } = require('../qcloud')
const uuid = require('uuid/v4')

module.exports.add = async (ctx, next) => {
  if (typeof ctx.request.query !== 'object') {
    var message = '请求传参应为 object 类型，但实际传了 ' + (typeof ctx.request.query) + ' 类型';
    throw new RequestError(constants.ERR_INVALID_PARAMS, message);
  }
  console.log("GET请求入参：" + JSON.stringify(ctx.request.query));
  let bookBo = ctx.request.query;
  var tablename = "cBook"
  var id = uuid()
  // 增
  var book = {
    id: id,
    name: bookBo.name,
    price: bookBo.price
  }
  await mysql(tablename).insert(book)
  // 查
  var res = await mysql(tablename).where({ id }).first()

  ctx.state.data = {
    id: res.id,
    msg: '增执行结束->' +JSON.stringify(res)
  }
}

module.exports.update = async (ctx, next) => {
  var result='成功'
  var tablename = "cBook"
  var id = ctx.query.id
  if (id === '' || id == null || id == undefined) {
    result = "请先添加数据"
  }
  var res = await mysql(tablename).where({ id }).first()
  if (res == null || res == undefined) {
    result='数据不存在'
  }
  // 改
  await mysql(tablename).update({ price: 111, name:"更新后->update" }).where({ id })
  // 查
  res = await mysql(tablename).where({ id }).first()
  ctx.state.data = {
    msg: '改执行结束，成功与否->' + result
  }
}

module.exports.del = async (ctx, next) => {
  var result = '成功'
  var tablename = "cBook"
  var id = ctx.query.id
  if (id === '' || id == null || id == undefined) {
    result = "请先添加数据"
  }
  var res = await mysql(tablename).where({ id }).first()
  if (res == null || res == undefined) {
    result = '数据不存在'
  }
  // 删
  await mysql(tablename).del().where({ id })
  ctx.state.data = {
    msg: '删除执行结束，成功与否：' + result
  }
}

module.exports.query = async (ctx, next) => {
  var result = ''
  var tablename = "cBook"
  var id = ctx.query.id
  if(id==='' || id== null || id== undefined){
      result="请先添加数据"
  }
  var res = await mysql(tablename).where({ id }).first()
  if (res == null || res == undefined) {
    result = '数据不存在'
  }else{
    result=JSON.stringify(res)
  }
  ctx.state.data = {
    id: id,
    msg: '查询执行结束，成功与否：' + result
  }
}
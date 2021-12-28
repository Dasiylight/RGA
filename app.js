const express = require('express')
const app = express()
const port = 8866
// 接口地址为 http://localhost:9527/getData 
app.get('/main/ans/addAnswer', (req, res) => {
    let tmpData = {
        code: 200,
        msg: '成功',
        data: '这是后台返回的数据！'
    }
  res.send(tmpData)
})

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

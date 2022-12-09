import express from 'express'
const app = express()
import fetch from 'node-fetch'

app.post('/handler', async (req, res) => {
    const action = req?.body?.action || "open";
    const pass = req?.body?.pass;
    fetch('http://portao.c2atec.com:30147/handler?pass=' + pass + '&action=' + action).then(() => {
        res.send("ok")
    })
})

app.listen(6000);
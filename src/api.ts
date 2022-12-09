import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/handler', async (req, res) => {
    try {
        console.log(req.body);
        const action = req?.body?.action || "open";
        const pass = req?.body?.pass;
        fetch('http://portao.c2atec.com:30147/handler?pass=' + pass + '&action=' + action).then(() => {
            res.send({ msg: "ok" })
        }).catch(err => {
            console.log("Erro no fetch", err);
            res.send(err);
        })
    }
    catch (err) {
        console.log("Erro fora fetch", err);

        res.send(err);
    }
})

app.listen(30147);
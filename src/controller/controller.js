import bd from "../database/bd.js"

const controllerUser = (app, db) =>{
    app.post("/creat",(req, res)=>{
        const body = req.body
        bd.tips.push(body.tips)
    })
    app.get("/tips",(req, res) =>{
        res.json({
            "tips": bd.tips[parseInt(Math.random() * db.tips.length)]
        })
    })
}


export default controllerUser
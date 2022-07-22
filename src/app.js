import express from "express"
import bd from "./database/bd.js"
import controller from "./controller/controller.js"


const app = express()
const port = 3000

app.use(express.json())

controller(app, bd)




app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})


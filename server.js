const path = require("path")
const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()
// const {errorHandler} = require("./middleware/errorMiddleware")

const pubRoutes = require("./routes/pubRoute");
const reportRoutes = require("./routes/reportRoute");


const { urlencoded } = require("express");

const connectDB = require("./config/config")
port =  process.env.PORT || 3031;

connectDB()
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());

// // Routes 
app.use(`/api/cpr`, pubRoutes)
app.use(`/api/reports`, reportRoutes)

// if(process.env.NODE_ENV === 'production'){

//     app.use(express.static(path.join(__dirname, '../frontend/build')))
    
//     app.get('*', (req, res) => {
//         res.sendFile(
//             path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
//         )
//     })
// } else{
//     app.get('/', (req, res) => {
//         res.send("Please, switch to production ")
//     }) 
// }


app.listen(port, () => {
    console.log("server is up and runing")
}) 
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const path = require("path")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")

const PORT = process.env.PORT || 5000

dotenv.config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: '10mb' }))
app.use(cors())

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

// Mount API routes under /api to avoid clashing with frontend routes
app.use('/api', Routes);

// Serve frontend build in production
const buildPath = path.join(__dirname, "../frontend/build")
app.use(express.static(buildPath))
app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})
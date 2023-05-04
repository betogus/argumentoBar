import express from 'express'
import { createTransport } from "nodemailer";
import dotenv from 'dotenv'
import path from 'path'
import Toastify from 'toastify-js'


const __dirname = path.resolve();
dotenv.config()
const app = express()
let port = process.env.PORT || 8080
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
const server = app.listen(port, () => console.log("Server Up"))




const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: process.env.TEST_MAIL,
        pass: process.env.TEST_PASS //Contraseña del link
    }
});

const etherealMail = async (data) => {
    

} 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.post('/',  async (req, res) => {
    let data = req.body
    if (data.name && data.email && data.message) {
        const mailOptions = {
            from: `${data.email}`,
            to: process.env.TEST_MAIL,
            subject: `Mensaje de ${data.name}`,
            html: `<p>${data.message}</p>`
        }
        try {
            await transporter.sendMail(mailOptions)
            res.status(201).send()
        } catch (error) {
            res.status(400).send()
        }
        
    } else {
        res.status(500).send()
    }
})
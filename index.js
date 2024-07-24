process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

//instanciations
const test = require("./routes/test");
const skill = require("./routes/skill");
const formations = require("./routes/formations");
const realization = require("./routes/realization");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/test",test);
app.use("/skill",skill);
app.use("/formations",formations);
app.use("/realization", realization);

app.post('/send-mail', async (req , res) => {
    const {name,email,objectMail,message} = req.body;
  

    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : 'antsakana@gmail.com',
            pass : 'oomj ieqp aclk uwjd'
        }
    });

    const mailOptions = {
        from : email,
        to : 'antsakana@gmail.com',
        objectMail : objectMail,
        text : `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({message : 'Email ok'})
    } catch(error) {
        console.error('Erreur lors de l envoie', error);
        res.status(500).json({error: 'Error de lenvoie'});
    }
});

const PORT = process.env.PORT || '9001';
app.listen(PORT , () => {
    console.log(`App listen to ${PORT}`);
})

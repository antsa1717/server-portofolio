const express = require('express');
const app = express();
const cors = require('cors');

//instanciations
const test = require("./routes/test");
const skill = require("./routes/skill");

app.use(cors());
app.use(express.json());

app.use("/test",test);
app.use("/skill",skill);

const PORT = process.env.PORT || '9001';
app.listen(PORT , () => {
    console.log(`App listen to ${PORT}`);
})

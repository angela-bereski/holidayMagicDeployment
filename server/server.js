const express = require('express');
const app = express();
const cors = require('cors')  
app.use(cors())  

require("./config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));


require('./routes/magicMaker.routes')(app);

const port = 8000;
app.listen(port, () => console.log(`Party on port: ${port}`));
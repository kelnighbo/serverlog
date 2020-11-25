require('dotenv').config();
let express = require('express');
let app = express();

let journal = require('./controllers/journalcontroller');
let user = require('./controllers/usercontroller');

let sequelize = require("./db");
sequelize.sync();

app.use(express.json())

app.use('/user', user);

app.use(require('./middleware/validate-session'));
app.use('/journal', journal)

app.listen(7001, function(){
    console.log("app is listening on port 7001")
});
const express =  require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

//path to dotenv file
dotenv.config({path:'config.env'})
const port = process.env.port || 5000;

//log requests
app.use(morgan('tiny'));

//parse requests to body-parser
app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set("view engine", "ejs");


//Load my public folder
app.use('/css', express.static(path.resolve(__dirname, "public/css")))
app.use('/img', express.static(path.resolve(__dirname, "public/img")))
app.use('/js', express.static(path.resolve(__dirname, "public/js")))

app.get('/', (req, res) =>{
    res.render('index');
});

app.get('/add_user', (req, res) =>{
    res.render('add_user');
});

app.get('/update_user', (req, res) =>{
    res.render('update_user');
});

app.listen(port, console.log(`Server listening on http://localhost:${port}...Type Ctrl C to exit`));

/*const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening on port ${port}...`));
    }
    catch (error) {
        console.log(error);
    }
}

start();*/
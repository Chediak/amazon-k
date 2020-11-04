const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require("./models/user");
const {
    json
} = require('body-parser');

dotenv.config();

const app = express();

mongoose.connect(
    process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connect to the database");
        }
    }
);

// Middleware 
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Require apis
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');
const ownerRoutes = require('./routes/owner');
const userRoutes = require("./routes/auth");
const reviewRoutes = require('./routes/review');
const addressRoutes = require('./routes/address');
const paymentRoutes = require('./routes/payment');

app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api', ownerRoutes);
app.use('/api', userRoutes);
app.use('/api', reviewRoutes);
app.use('/api', addressRoutes);
app.use('/api', paymentRoutes);

app.listen(3000, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on PORT", 3000);
    }
});
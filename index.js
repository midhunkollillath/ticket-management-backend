const mongoose = require('mongoose')
const express = require("express");


var cors = require('cors')
const bookingsRoute = require('./Routes/booking');
const movieRoute = require('./Routes/movie');
const screenRoute = require('./Routes/screen');
const screeningRoute = require('./Routes/screening');


const movie = require('./model/movie');
const booking = require('./model/booking')

const app = express();
app.use(cors())
const port = 3000

main().then(data=>console.log("connected to mongodb"))
.catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb+srv://Midhunk:QcsvM7u8rDUNKFnm@cluster0.jpr92gw.mongodb.net/?retryWrites=true&w=majority');
}
app.use(express.json());
66
app.use('/movies',movieRoute)
app.use('/screens',screenRoute)
app.use('/screenings',screeningRoute)
app.use('/bookings',bookingsRoute)


 app.listen(port, () =>{
    console.log('Example app listening on port ${port}')

 })


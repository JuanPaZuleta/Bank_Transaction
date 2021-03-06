const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.set('port', process.env.PORT || 4000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/transactions", require('./routes/transaction.routes'))
app.use("/api/receivers", require('./routes/receiver.routes'))

module.exports = app;
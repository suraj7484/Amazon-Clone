const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')
('sk_test_51HxY0vLRUd5fNwQPfhtgiX2EbBiY5e4Iqc3iBdVIrOfdQXng1ek6RPDym1RwXQWCISYxRSDeOkECzstNTz8Ci3L7009Y4EP05V')

// API

// App config
const app = express()

// MIddleware
app.use(cors({origin: true}));
app.use(express.json())

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request , response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-ba82b/us-central1/api
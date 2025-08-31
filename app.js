const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.routes');
const roleRoutes = require('./routes/role.routes');
const professionalRoutes = require('./routes/professional.routes');
const serviceRoutes = require('./routes/service.routes');
const bookingRoutes = require('./routes/booking.routes');


require("dotenv").config();

console.log("MONGODB_URI desde .env:", process.env.MONGODB_URI);


app.use(cors());
app.use(express.json());



app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});


app.get("/api/test", (req, res) => {
    res.json({ message: "Servidor funcionando correctamente " });
});


app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/profesionales', professionalRoutes);
app.use('/api/servicios', serviceRoutes);
app.use('/api/reservas', bookingRoutes);

const PORT = process.env.PORT || 3000;

connectDB()
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
    })
    .catch((err) => {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
    });
const express = require('express');
const app =  express();
const authRoutes = require('./routes/auth');
const protectedRoute = require('./routes/protectedRoute');
const mongoose = require('mongoose');

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/protected', protectedRoute);

mongoose.connect('mongodb+srv://aayush1967jha:Aayush2001@cluster0.sv87u1k.mongodb.net/').then(()=> {
    console.log('connected to mongodb');
}).catch((error) => {
    console.error("error connecting to MongoDB:", error);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
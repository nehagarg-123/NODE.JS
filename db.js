const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/mydatabase'; // ✅ Correct port and path

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log(' Connected to MongoDB server');
});

db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('🔌 MongoDB disconnected');
});

module.exports = db; 

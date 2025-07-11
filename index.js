// [SECTION] Dependencies and Modules 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// [SECTION] Routes
const userRoutes = require('./routes/user.js');
const movieRoutes = require('./routes/movie.js');
const commentRoutes = require('./routes/comment.js');

// [SECTION] Server setup
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow specific origins (adjust if needed)
const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:4000'],
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// [SECTION] Database Setup (hardcoded URI)
const MONGODB_URI = '';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});

// [SECTION] Backend Routes
app.use('/users', userRoutes); 
app.use('/movies', movieRoutes);
app.use('/movies', commentRoutes);


// [SECTION] Server Listener
if (require.main === module) {
    app.listen(4000, () => {
        console.log(`API is now online on port 4000`);
    });
}

module.exports = { app, mongoose };

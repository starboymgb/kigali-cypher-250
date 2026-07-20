const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set template engine
app.set('view engine', 'ejs');

// Static folder configuration
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    const artists = [
        { name: "Bruce Melodie", genre: "R&B / Afrobeat", bio: "Umwe mu bahanzi bakomeye b'i Kigali." },
        { name: "Ish Kevin", genre: "Hip Hop / Trap", bio: "Uri ku gasongero ka Trap music mu Rwanda." },
        { name: "Jules Sentore", genre: "Kinya / Traditional Fusion", bio: "Umuhanzi ufite umwihariko mu gakondo." }
    ];
    res.render('index', { artists });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
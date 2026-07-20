const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set template engine
app.set('view engine', 'ejs');

// Static folder for CSS and Images
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    const artists = [
        { name: "Bruce Melodie", genre: "R&B / Afrobeat", bio: "Umwe mu bahanzi bakomeye b'i Kigali." },
        { name: "Ish Kevin", genre: "Hip Hop / Trap", bio: "Uri ku gasongero ka Trap music mu Rwanda." },
        { name: "Jules Sentore", Gynre: "Kinya / Traditional Fusion", bio: "Umuhanzi ufite umwihariko mu gakondo." }
    ];
    res.render('index', { artists });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
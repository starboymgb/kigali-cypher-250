body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #121212;
    color: #ffffff;
    margin: 0;
    padding: 0;
}

header {
    text-align: center;
    padding: 2rem;
    background-color: #1a1a1a;
    border-bottom: 3px solid #ffcc00;
}

.logo-container img {
    max-width: 150px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(255, 204, 0, 0.3);
}

header h1 {
    color: #ff3333;
    margin: 10px 0;
    letter-spacing: 2px;
}

main {
    padding: 2rem;
    max-width: 1100px;
    margin: auto;
}

.intro {
    text-align: center;
    margin-bottom: 2rem;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

.card {
    background-color: #1e1e1e;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #ffcc00;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

.card h3 {
    margin-top: 0;
    color: #ffcc00;
}

.genre {
    display: inline-block;
    background: #ff3333;
    color: white;
    padding: 3px 8px;
    font-size: 0.8rem;
    border-radius: 4px;
    margin-bottom: 10px;
}

.card button {
    background-color: #ffcc00;
    border: none;
    color: #121212;
    padding: 8px 15px;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
}

.card button:hover {
    background-color: #ff3333;
    color: white;
}

footer {
    text-align: center;
    padding: 1.5rem;
    background-color: #1a1a1a;
    margin-top: 3rem;
    font-size: 0.9rem;
    color: #888;
}
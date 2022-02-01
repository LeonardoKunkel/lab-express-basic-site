// 1. Importar
const express = require('express');
const app = express();

// 2. Middlewares
require("dotenv").config()
app.use(express.static('public'));

app.set('views', __dirname + '/views');

app.set('view engine', 'hbs');

// 3. Rutas
app.use('/', require('./routes/index.routes'));

// 4. Servidor
app.listen(process.env.PORT, () => {
    console.log(`It's alive`);
});

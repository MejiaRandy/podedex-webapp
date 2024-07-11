const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { sequelize } = require('./models');
const pokemonRoutes = require('./routes/pokemonRoutes');
const regionRoutes = require('./routes/regionRoutes');
const typeRoutes = require('./routes/typeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/pokemons', pokemonRoutes);
app.use('/regions', regionRoutes);
app.use('/types', typeRoutes);

app.get('/', (req, res) => {
  res.redirect('/pokemons');
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

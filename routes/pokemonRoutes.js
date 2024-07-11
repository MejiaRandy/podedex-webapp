const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', pokemonController.getAllPokemons);
router.get('/create', pokemonController.createPokemon);
router.post('/store', pokemonController.storePokemon);

// Similar routes for edit, update, delete

module.exports = router;

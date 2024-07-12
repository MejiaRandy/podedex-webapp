const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/', pokemonController.getAllPokemons);
router.get('/create', pokemonController.createPokemon);
router.post('/store', pokemonController.storePokemon);
router.get('/edit/:id', pokemonController.editPokemon); // Add this line
router.post('/update/:id', pokemonController.updatePokemon); // Add this line
router.get('/delete/:id', pokemonController.deletePokemon); // Add this line

module.exports = router;

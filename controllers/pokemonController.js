const { Pokemon, Region, Type } = require('../models');

exports.getAllPokemons = async (req, res) => {
  const pokemons = await Pokemon.findAll({ include: [Region, Type] });
  res.render('pokemons/index', { pokemons });
};

exports.createPokemon = async (req, res) => {
  const regions = await Region.findAll();
  const types = await Type.findAll();
  res.render('pokemons/create', { regions, types });
};

exports.storePokemon = async (req, res) => {
  await Pokemon.create(req.body);
  res.redirect('/pokemons');
};

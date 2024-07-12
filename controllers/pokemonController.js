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

exports.editPokemon = async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id, { include: [Region, Type] });
  const regions = await Region.findAll();
  const types = await Type.findAll();
  res.render('pokemons/edit', { pokemon, regions, types });
};

exports.updatePokemon = async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  await pokemon.update(req.body);
  res.redirect('/pokemons');
};

exports.deletePokemon = async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  await pokemon.destroy();
  res.redirect('/pokemons');
};
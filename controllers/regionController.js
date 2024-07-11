const { Region } = require('../models');

exports.getAllRegions = async (req, res) => {
  const regions = await Region.findAll();
  res.render('regions/index', { regions });
};

exports.createRegion = (req, res) => {
  res.render('regions/create');
};

exports.storeRegion = async (req, res) => {
  await Region.create(req.body);
  res.redirect('/regions');
};

exports.editRegion = async (req, res) => {
  const region = await Region.findByPk(req.params.id);
  res.render('regions/edit', { region });
};

exports.updateRegion = async (req, res) => {
  const region = await Region.findByPk(req.params.id);
  await region.update(req.body);
  res.redirect('/regions');
};

exports.deleteRegion = async (req, res) => {
  const region = await Region.findByPk(req.params.id);
  await region.destroy();
  res.redirect('/regions');
};

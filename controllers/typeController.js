const { Type } = require('../models');

exports.getAllTypes = async (req, res) => {
  const types = await Type.findAll();
  res.render('types/index', { types });
};

exports.createType = (req, res) => {
  res.render('types/create');
};

exports.storeType = async (req, res) => {
  await Type.create(req.body);
  res.redirect('/types');
};

exports.editType = async (req, res) => {
  const type = await Type.findByPk(req.params.id);
  res.render('types/edit', { type });
};

exports.updateType = async (req, res) => {
  const type = await Type.findByPk(req.params.id);
  await type.update(req.body);
  res.redirect('/types');
};

exports.deleteType = async (req, res) => {
  const type = await Type.findByPk(req.params.id);
  await type.destroy();
  res.redirect('/types');
};

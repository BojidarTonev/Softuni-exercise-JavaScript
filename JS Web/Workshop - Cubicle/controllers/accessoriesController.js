const accessories = require("../models/Accessory");
const cubes = require('../models/cubicModel');

function getCreateAccessory(req, res) {
  req.app.locals.title = 'Create Accessory';

  res.render("accessories/create");1
};

function postCreateAccessory(req, res) {
  const { name = null, description = null, imageUrl = null } = req.body;

  accessories.create({ name, description, imageUrl }).then(() => {
    res.redirect('/');
  })

};

async function getAttachAccessory(req, res){
  req.app.locals.title = 'Attach Accessory';

  const cubeId = req.params.id;
  const cube = await cubes.findById(cubeId);
  const accessoriesData = await accessories.find().then(a => {
    return a.filter(item => {
      let cubeAccessries = cube.accessories.map(item => item._id);

      return cubeAccessries.indexOf(item._id) < 0
    }).map(item => item.name);
  });

  res.render('accessories/attach', { name: cube.name, imageUrl: cube.imageUrl, accessories: accessoriesData });
}

async function postAttachAccessory(req, res){
  const cubeId = req.headers.referer.split('/')[5];
  const accessoryName = req.body.accessory;

  const accessory = await accessories.findOne({ name: accessoryName });

  Promise.all([
    cubes.updateOne({ _id: cubeId }, { $push: {accessories : accessory._id}}),
    accessories.updateOne({ _id: accessory._id }, { $push: { cubes: cubeId }})
  ]).then(() => {
    res.redirect('/');
  })
}

module.exports = {
  getCreateAccessory,
  postCreateAccessory,
  getAttachAccessory,
  postAttachAccessory
}

   

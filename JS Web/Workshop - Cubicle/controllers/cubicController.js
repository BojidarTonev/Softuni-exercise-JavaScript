const Cubic = require("../models/cubicModel.js");

function getCreate(req, res) {
  req.app.locals.title = "Create cube";

  res.render("cubes/create.hbs");
};

function postCreate(req, res) {
  const { name = null, description = null, imageUrl = null, difficultyLevel = null} = req.body
  const { user } = req;

  try{
    Cubic.create({ name, description, imageUrl, difficultyLevel, creatorId: user._id }).then(cubic => {
      res.redirect('/');
    })
  } catch(err){
    res.redirect('/', { message: err })
  }
  

};

async function getDetails(req, res, next) {
  req.app.locals.title = "Cube Details";

  let cubeId = req.params.id;
  let user = req.user;

  const cube = await Cubic.findById(cubeId);
  if(!cube){ res.redirect('/404.hbs'); return; }
  const isCreator = JSON.stringify(cube.creatorId) == JSON.stringify(user._id);
  res.render('cubes/details', {cube, isCreator})
  
};

function getEdit(req, res) {
  req.app.locals.title = "Edit Cube";

  const cubeId = req.params.id;
  const user = req.user;

  Cubic.findOne({ _id:cubeId, creatorId: user._id}).then(cube => {
    res.render('cubes/edit', { cube })
  })
};

function postEdit(req, res) {
  let cubeId = req.params.id;

  const { name = null, description = null, imageUrl = null, difficultyLevel = null} = req.body;

  Cubic.updateOne({ _id: cubeId }, { name, description, imageUrl, difficultyLevel }).populate('accessories').then(cube => {
    res.redirect('/');
  })
  
};

function getDelete(req, res) {
  req.app.locals.title = "Delete Cube";

  const cubeId = req.params.id;
  const user = req.user;

  Cubic.findOne({ _id:cubeId, creatorId: user._id}).then(cube => {
    res.render('cubes/delete', { cube })
  })
};

function postDelete(req, res) {
  let cubeId = req.params.id;

  Cubic.deleteOne({ _id: cubeId }).then(() => {
    res.redirect('/');
  })
};

module.exports = {
  getCreate,
  postCreate,
  getDelete,
  postDelete,
  getEdit,
  postEdit,
  getDetails,
  postEdit
}

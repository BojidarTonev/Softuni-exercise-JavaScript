const models = require('../models');

function getCreate(req, res){
    req.app.locals.title = 'Create Course';

    res.render('../views/courses/create-course', {user: req.user});
}

function postCreate(req, res){
    let { title = null, description = null, imageUrl = null, isPublic = null } = req.body;
    const creatorId = req.user._id;
    const createdAt = getToday();
    
    if(isPublic == null){
        isPublic = false;
    } else {
        isPublic = true;
    }

    models.courseModel.create({title, description, imageUrl, isPublic, createdAt, creatorId}).then(course => {
        res.redirect('/');
    }).catch(err => {
        console.log(err)
        res.render('courses/create-course', {message: err.message, user: req.user})
    })
}

function getDetails(req, res) {
    let courseId = req.params.id;
    let userHasEnrolled = false;
    if(req.user.enrolledCourses.indexOf(courseId) != -1){
        userHasEnrolled = true
    }

    models.courseModel.findById(courseId).then(course => {
        if(req.user._id.toString() == course.creatorId.toString()){
            res.render('courses/course-details', {course: course, userHasEnrolled: userHasEnrolled, isCreator: true, user: req.user})
        } else {
            res.render('courses/course-details', {course: course, userHasEnrolled: userHasEnrolled, isCreator: false, user: req.user})
        }
        
    })
}

function getEdit(req, res) {
    let courseId = req.params.id;

    models.courseModel.findById(courseId).then(course => {
        res.render('courses/course-edit', {course:course, user:req.user})
    })
}

function postEdit(req, res) {
    let courseId = req.params.id;
    let { title = null, description = null, imageUrl = null, isPublic = null } = req.body;
    if(isPublic == null){
        isPublic = false;
    } else {
        isPublic = true;
    }

    models.courseModel.updateOne( {_id: courseId }, { title, description, imageUrl, isPublic }).then(cube => {
        res.redirect('/')
    })

    
}

function deleteCourse(req, res) {
    let courseId = req.params.id;

    models.courseModel.deleteOne({ _id: courseId} ).then(course => {
        res.redirect('/')
    });
}

function enrollUser(req, res) {
    let courseId = req.params.id;

    models.userModel.updateOne({ _id: req.user._id }, { $push: {enrolledCourses: courseId} }).then(user => {
        models.courseModel.updateOne({ _id: courseId }, { $push : {usersEnrolled: req.user._id}}).then(course => {
            res.redirect('/');
        })
    })
    
}

function getToday() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return today;
}

module.exports = {
    getCreate,
    postCreate,
    getDetails,
    getEdit,
    postEdit,
    deleteCourse,
    enrollUser
}
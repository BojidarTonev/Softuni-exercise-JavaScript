const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const formidable = require('formidable');
const breeds = require('../data/breeds.json');
const cats = require('../data/cats');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname === '/cats/add-cat' && req.method === 'GET') {
        const filePath = path.normalize(
            path.join(__dirname, "../views/addCat.html")
        );

        fs.readFile(filePath, function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end(err.message)
            }
            let catBreedsPlaceholder = breeds.map((breed) => `<option value="${breed}">${breed}</option>`);
            let modifiedData = data.toString().replace('{{ catBreeds }}', catBreedsPlaceholder);

            res.writeHead(200);
            res.write(modifiedData);
        });

    } else if (pathname === '/cats/add-breed' && req.method === 'GET') {
        const filePath = path.normalize(
            path.join(__dirname, "../views/addBreed.html")
        );

        fs.readFile(filePath, function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end(err.message)
            }
            res.writeHead(200);
            res.end(data);
        });

    } else if (pathname === '/cats/add-cat' && req.method === 'POST') {
        let form = new formidable.IncomingForm({
            uploadDir: __dirname + '../../content/images/',
            keepExtensions: true,
            keepFileNames: true
        });

        form.on('fileBegin', function (name, file) {
            file.path = __dirname + '../../content/images/' + file.name;
        });

        form.parse(req, (err, fields, files) => {
            if (err) {
                throw err;
            }

            let catName = fields.name;
            let catDescription = fields.description;
            let catBreed = fields.breed;

            let catImageName = files.upload.name;
            let filePath = `/content/images/${catImageName}`;

            fs.readFile('./data/cats.json', function (err, data) {
                if (err) {
                    throw err;
                }

                let array = JSON.parse(data);
                let catObj = {
                    id: Number(array.length + 1),
                    name: catName,
                    description: catDescription,
                    breed: catBreed,
                    image: filePath
                }

                array.push(catObj);
                fs.writeFile('./data/cats.json', JSON.stringify(array), function (err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log("The cats data has been updated.");
                })
            })
        });


        res.writeHead(301,
            { Location: '/' }
        );
        res.end();

    } else if (pathname === '/cats/add-breed' && req.method === 'POST') {
        let body = '';
        req.on('data', function (data) {
            body += data;
        })

        req.on('end', function () {
            let breedInput = qs.parse(body).breed;

            fs.readFile('./data/breeds.json', function (err, data) {
                if (err) {
                    console.log(err);
                }

                let array = JSON.parse(data);
                array.push(breedInput);
                fs.writeFile('./data/breeds.json', JSON.stringify(array), function (err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log("The data has been updated.")
                })
            })
        })

        res.writeHead(301,
            { Location: '/' }
        );
        res.end();

    } else if (pathname.includes('/cats-edit') && req.method === 'GET') {
        const filePath = path.normalize(
            path.join(__dirname, "../views/editCat.html")
        );

        fs.readFile(filePath, function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end(err.message)
            }

            let id = req.url.split('/')[2];
            let currentCat = cats.find(cat => cat.id == id);

            let modifiedData = data.toString().replace('{{id}}', id);

            modifiedData = modifiedData.replace('{{name}}', currentCat.name);
            modifiedData = modifiedData.replace('{{description}}', currentCat.description);
            modifiedData = modifiedData.replace('{{breed}}', currentCat.breed);

            const breedsAsOptions = breeds.map((b) => `<option value="${b}">${b}</option>`);
            modifiedData = modifiedData.replace('{{catBreeds}}', breedsAsOptions.join('/'));

            res.writeHead(200);
            res.write(modifiedData);
            res.end();
        });

    } else if (pathname.includes('/cats-find-new-home') && req.method === 'GET') {
        const filePath = path.normalize(
            path.join(__dirname, "../views/catShelter.html")
        );

        fs.readFile(filePath, function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end(err.message)
            }

            let id = req.url.split('/')[2];
            let currentCat = cats.find(cat => cat.id == id);

            let modifiedData = data.toString().replace('{{id}}', id);

            modifiedData = modifiedData.replace('{{name}}', currentCat.name);
            modifiedData = modifiedData.replace('{{description}}', currentCat.description);
            modifiedData = modifiedData.replace('{{breed}}', currentCat.breed);
            modifiedData = modifiedData.replace('{{image}}', currentCat.image);

            const breedsAsOptions = breeds.map((b) => `<option value="${b}">${b}</option>`);
            modifiedData = modifiedData.replace('{{catBreeds}}', breedsAsOptions.join('/'));

            res.writeHead(200);
            res.write(modifiedData);
            res.end();
        });

    } else if (pathname.includes('/cats-edit') && req.method === 'POST') {
        let form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) {
                throw err;
            }

            let id = req.url.split('/')[2];
            let catName = fields.name;
            let catDescription = fields.description;
            let catBreed = fields.breed;

            let currentCat = cats.find(cat => cat.id == id);
            let currentCatIndex = cats.indexOf(currentCat);

            let catObj = {
                id: currentCat.id,
                name: catName,
                description: catDescription,
                breed: catBreed,
                image: currentCat.image
            }

            cats.splice(currentCatIndex, 1);
            cats.push(catObj);

            fs.writeFile('./data/cats.json', JSON.stringify(cats), function (err) {
                if (err) {
                    console.log(err);
                }
                console.log("The cats data has been updated.");
            })
        })

        res.writeHead(301,
            { Location: '/' }
        );
        res.end();

    } else if (pathname.includes('/cats-find-new-home') && req.method === 'POST') {
        let id = req.url.split('/')[2];
        let currentCat = cats.find(cat => cat.id == id);
        let currentCatIndex = cats.indexOf(currentCat);

        cats.splice(currentCatIndex, 1);
        fs.writeFile('./data/cats.json', JSON.stringify(cats), function (err) {
            if (err) {
                console.log(err);
            }
            console.log("The cats data has been updated.");
        });

        res.writeHead(301,
            { Location: '/' }
        );
        res.end();

    } else {
        return true;
    }
}
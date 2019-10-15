let FilmStudio = require('../filmStudio');
let assert = require('Chai').assert;

describe('film studio tests', function(){
    it('films is an empty array by default', function(){
        let filmStudio = new FilmStudio('zdravei');
        assert.equal(filmStudio.films.length, 0, `Must be empty array upon initialization.`);
    })
    it('should have the same name as passed', function(){
        let filmStudio = new FilmStudio('zdravei');
        assert.equal(filmStudio.name, 'zdravei', `Must have the same name as passed`);
    })
    it('3 arguments on make a movie should throw error', function(){
        let filmStudio = new FilmStudio('zdravei');
        assert.throws(() => filmStudio.makeMovie(1,2,3), `Invalid arguments count`);
    })
    it('passing invalid arguments should throw error', function(){
        let filmStudio = new FilmStudio('zdravei');
        assert.throws(() => filmStudio.makeMovie(1, 2), `Invalid arguments`);
    })
    it('passing an unexistand movie should throw error', function(){
        let filmStudio = new FilmStudio('zdravei');
        assert.throws(() => filmStudio.lookForProducer('Vasko'), `Vasko do not exist yet, but we need the money...`);
    })
    it('trying to add casting when there are no movies should return error', function(){
        let filmStudio = new FilmStudio('zdravei');
        let result = filmStudio.casting('aktior', 'rolq');
        assert.equal(result, `There are no films yet in zdravei.`);
    })
    it('the actor gets the role if there is movie and role for him', function(){
        let filmStudio = new FilmStudio('zdravei');
        filmStudio.makeMovie('film1', ['rolq1', 'rolq2']);
        let result = filmStudio.casting('aktior1', 'rolq1');
        assert.equal(result, 'You got the job! Mr. aktior1 you are next rolq1 in the film1. Congratz!')
    });
    it('the actor wont get the role if there is a movie but not a role for him', function(){
        let filmStudio = new FilmStudio('zdravei');
        filmStudio.makeMovie('film1', ['rolq1', 'rolq2']);
        let result = filmStudio.casting('aktior1', 'rolq3');
        assert.equal(result, 'aktior1, we cannot find a rolq3 role...')
    });
    it('should correcetly display data if the film exists', function(){
        let filmStudio = new FilmStudio('zdravei');
        filmStudio.makeMovie('film1', ['rolq1', 'rolq2']);
        let result = filmStudio.lookForProducer('film1');
        let expected = {
            filmName: 'film1',
            filmRoles: [{
                role: 'rolq1',
                actor: false,
            }, {
                role: 'rolq2',
                actor: false
            }]
        };

        assert.equal(result, expected);
    })
})
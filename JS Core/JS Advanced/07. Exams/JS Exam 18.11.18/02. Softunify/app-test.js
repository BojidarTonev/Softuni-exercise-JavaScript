const assert = require('chai').assert;
const softunify = require('../app.js');

describe('softunify', function(){
    it('all songs should be empty object upon initialization', function(){
        let obj = new softunify();
        assert.equal(obj.allSongs, {});
    })
    it('play song should return error messege if no songs were added', function(){
        let obj = new softunify();
        assert.equal(obj.playSong, "You have not downloaded a {song} song yet. Use SoftUniFy's function downloadSong() to change that!")
    })
});
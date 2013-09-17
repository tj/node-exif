
var exif = require('..');
var fs = require('fs');
var buf = fs.readFileSync('test/fixtures/forest.jpeg');

suite('exif()', function(){
  bench('file', function(next){
    exif('test/fixtures/image.jpg', next);
  })
})
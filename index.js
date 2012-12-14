
/**
 * Module dependencies.
 */

var exec = require('child_process').exec
  , command = require('shelly');

/**
 * Fetch EXIF data from `file` and invoke `fn(err, data)`.
 *
 * @param {String} file
 * @param {Function} fn
 * @api public
 */

module.exports = function(file, fn){
  var cmd = command('exiftool ?', file);
  exec(cmd, function(err, str){
    if (err) return fn(err);
    
    var obj = str.split('\n').reduce(function(obj, line){
      var i = line.indexOf(':');
      var key = slug(line.slice(0, i));
      var val = line.slice(i + 1, line.length).trim();
      if ('' == key || '' == val) return obj;
      obj[key] = val;
      return obj;
    }, {});

    fn(null, obj);
  });
};

/**
 * Slug `str`.
 */

function slug(str) {
  return str
    .trim()
    .replace(/[^\w]+/g, ' ')
    .toLowerCase();
}

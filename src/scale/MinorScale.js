/**
 * @depends Scale.js
 */
var MinorScale = function() {
  MinorScale.superclass.call(this, [0, 2, 3, 5, 7, 8, 10]); 
}
extend(MinorScale, Scale);

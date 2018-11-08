function randomBetween(range) {
    var min = range[0],
      max = range[1];
  if (min < 0) {
      return min + Math.random() * (Math.abs(min)+max);
  }else {
      return min + Math.random() * max;
  }
}
 $.prototype.equalizerAnimation = function(speed, barsHeight){
  var $equalizer = $(this);
  var ref = setInterval(function(){
        $equalizer.find('span').each(function(i){
        $(this).css({ height:randomBetween(barsHeight[i])+'px' });
      });
  },speed);
//   $equalizer.on('click',function(){
//       $equalizer.toggleClass('paused');
//   });
  return ref
}
 var barsHeight = [
[20, 40],
[30, 70],
[40, 80],
[30, 80],
[30, 60]
];


var settings = {
  width: window.innerWidth,
  height: window.innerHeight,
  radius: 10,
  color: 'white'
};

var nodes = [];

var getRandAngle = function(){
  return Math.random() * 360;
  // return Math.sin(angle) * settings.radius;
};

var getRandX = function(angle){
  return settings.radius * Math.cos(angle);
};

var getRandY = function(angle){
  return settings.radius * Math.sin(angle);
};

var svg = d3.select('body').append('svg')
  .attr('class', 'arena')
  .append('g');

d3.selectAll('svg.arena').on('mousemove', function(event){
  var coord = d3.mouse(this);
  var node = { x: coord[0], y: coord[1] };
  svg.selectAll('circle')
    .data([node])
    .enter()
    .append('circle')
    .attr('r', settings.radius)
    .attr('fill', settings.color)
    .attr('cx', function(d) { return Math.random() * settings.width; })
    .attr('cy', function() { return Math.random() * settings.height; })
    .transition()
    .duration(1500)
    .delay(function() { return Math.random() * 1000; })
    .attr('cx', function() { return Math.random() * 10 + coord[0]; })
    .attr('cy', function() { return Math.random() * 10 + coord[1]; });
});


var settings = {
  width: window.innerWidth,
  height: window.innerHeight,
  nodeCount: 20,
  radius: 10,
  color: 'white'
};

var nodes = [];
var angle;

var getRandAngle = function(){
  angle = Math.random() * 360;
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
  // nodes.push({
    console.log("test");
  // })
  // create
  var coord = d3.mouse(this);
  d3.selectAll('circle')
    .data(d3.range(settings.nodeCount))
    .enter()
    .append('circle')
    .attr('r', settings.radius)
    .attr('fill', settings.color)
    .attr('cx', function(d) { getRandAngle(); return getRandX(angle); })
    .attr('cy', function() { return getRandY(angle)})
    .transition()
    .duration(1500)
    .attr('cx', coord[0])
    .attr('cy', coord[1]);
});

/* Server side example*/

const {
    performance
  } = require('perf_hooks');
global.getTime = performance.now.bind(performance) ;

//Dependencies:

//Base of node graph system. (There are some modifications to make it work properly with gl-matrix)
require("gl-matrix").glMatrix

LiteGraph = require("litegraph.js").LiteGraph;

require("hbtree-extension"); //(contains modified HBTree and LiteGraph)

var BehaviourPlanner = require("behaviour-planner.js").BehaviourPlanner;
const fs = require('fs');

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var bplanner = new BehaviourPlanner();


let now = performance.now(); //not in NodeJS
let last = 0;
init()

function init(){
  parseArgs()
  bplanner.play();
  requestAnimationFrame(animate);
  bplanner.onActions = onActions;
  

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
  });
}

function onActions(actions){
  console.log(actions)
  for(var i in actions)
    console.log(actions[i].data)
}
rl.on('line', (input) => {
  var msg = {"type":"data", "data":{"user": {"text": input}}}
  bplanner.onData(msg)

});
function parseArgs(){
  var myArgs = process.argv.slice(2);
  console.log('myArgs: ', myArgs);
  switch (myArgs[0]) {
    case '-f':
      let rawdata = fs.readFileSync(myArgs[1]);
      behaviorData = JSON.parse(rawdata);
      bplanner.loadEnvironment(behaviorData);
      break;
    
    default:
        console.log('Sorry, that is not something I know how to do.');
    }
}
function animate(dt){
   
    
    last = now;
    now = performance.now(); //not in NodeJS
    dt = (now - last) * 0.001;
    bplanner.update(dt);
    requestAnimationFrame(animate);//not in NodeJS!!!!!!!!!!!
    
    
}
function requestAnimationFrame(f){
    setImmediate(()=>f(performance.now()))
  }
  
//Let's assume only 1 agent and user
/*var agent = behaviorData.env.agents[0];
var user = behaviorData.env.user; 
var graphs = [];
for(var g of behaviorData.env.graphs){
    graphs.push(g);
}*/
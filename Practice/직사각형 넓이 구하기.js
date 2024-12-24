const { dot } = require("node:test/reporters");

function solution(dots) {
    let xValues = dots.map(dot => dot[0]);
    let yValues = dots.map(dot => dot[1]);
    
    let X = Math.max(...xValues) - Math.min(...xValues);
    let Y = Math.max(...yValues) - Math.min(...yValues);
    
    return X*Y;
}

//풀이

function solution(dots){
    var answer = 0;
    let difX = 0;
    let difY = 0;

    const initX = dots[0][0]
    const initY = dots[0][1]
    for(let i =1; i<dots.length; i++){
        if(dots[i][0]!==initX){
            difX = Math.abs(dots[i][0]-initX)
        }
        if(dots[i][1]!==initY){
            difY = Math.abs(dots[i][1]-initY)
        }
    }
    return;
}
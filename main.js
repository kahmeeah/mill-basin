// main.js - this file contains the main/general javascript code and functions

var c = document.getElementById("one");
var ctx = c.getContext("2d");
ctx.font = "10px Arial";
ctx.fillText("Hello World", 10, 50);


var c = document.getElementById("two");
var ctx = c.getContext("2d");
ctx.font = "10px Arial";
ctx.fillText("Hello World", 10, 50);

gsap.registerPlugin(ScrollTrigger)

const main = document.getElementById('main')
const temp = document.getElementById('template')

const blockHeight = window.innerHeight * 3; // 300vh / 100px = 3
let isTrapped = false; // ?

const queue = [];
let iterCount = 0;

function getRandomColor() {
      return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    }

// TODO
// print normal copy of scenes onto screen
// premake new iteration on stack
// watch scrollbar -> when it passes scene two - append new iter, remove old one from stack
// ^ so thats all one func ig 
// repeat

function preload(){

}

function pushBlock(){

}

function handleMain(){

}

function popBlock(){

}

//event listeners here

// var Jimp = require("jimp");
// var uuid = require("uuid");
// console.log("Hello");

// Jimp.read("./imgs.png")
//   .then((image) => {
//     var imgname = uuid.v4();
//     Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then((font) => {
//       image
//         .print(font, 10, 10, "Hello world that wraps!")
//         .write(`${imgname}.png`);
//     });
//   })
//   .catch((err) => {
//     console.log("Image could not be read (sad face emoji)");
//   });

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
// const addFont = require("add-font");

var d3 = require("d3");
const fs = require("fs");

const dom = new JSDOM(
  `<!DOCTYPE html> <head> <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"> </head> <body> </body>`
);

let body = d3.select(dom.window.document.querySelector("body"));

let svg = body
  .append("svg")
  .attr("width", 114)
  .attr("height", 121)
  .attr("xmlns", "http://www.w3.org/2000/svg");

let image = svg.append("image").attr("xlink:href", "./sample.svg");
let text = svg
  .append("text")
  .attr("x", "15")
  .attr("y", "110")
  .attr("fill", "#e3b365")
  .attr("font-size", "11")
  .text("Total Contributions")
  .style("font-family", "pacifico");
// let rect = svg
//   .append("rect")
//   .attr("width", 114)
//   .attr("height", 121)
//   .style("fill", "#132027")
//   .attr("rx", 7);
// let ellipse = svg
//   .append("ellipse")
//   .attr("rx", 37)
//   .attr("ry", 37)
//   .attr("stroke", "#a12568")
//   .attr("stroke-width", "3")
//   .attr("fill", "none")
//   .attr("cx", "57")
//   .attr("cy", "57");

fs.writeFileSync("out.svg", body.html());

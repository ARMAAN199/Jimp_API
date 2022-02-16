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

var contri = 2439;
var category = "gt1000";
if (contri < 10) category = "lt10";
else if (contri < 100) category = "lt100";
else if (contri < 1000) category = "lt1000";

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
if (category == "lt10") {
  let text = svg
    .append("text")
    .attr("fill", "#e3b365")
    .attr("x", 55)
    .attr("y", 60)
    .attr("font-size", "32px")
    .text(`${contri}`)
    .style("font-family", "helvetica")
    .style("text-anchor", "middle");
}
if (category == "lt100") {
  let text = svg
    .append("text")
    .attr("fill", "#e3b365")
    .attr("x", 55)
    .attr("y", 60)
    .attr("font-size", "32px")
    .text(`${contri}`)
    .style("font-family", "helvetica")
    .style("text-anchor", "middle");
}
if (category == "lt1000") {
  let text = svg
    .append("text")
    .attr("fill", "#e3b365")
    .attr("x", 57)
    .attr("y", 60)
    .attr("font-size", "26px")
    .text(`${contri}`)
    .style("font-family", "helvetica")
    .style("text-anchor", "middle");
}
if (category == "gt1000") {
  let text = svg
    .append("text")
    .attr("fill", "#e3b365")
    .attr("x", 59)
    .attr("y", 60)
    .attr("font-size", "20px")
    .text(`${contri}`)
    .style("font-family", "helvetica")
    .style("text-anchor", "middle");
}

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

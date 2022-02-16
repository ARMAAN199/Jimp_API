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

var d3 = require("d3");
const fs = require("fs");

const dom = new JSDOM(`<!DOCTYPE html><body></body>`);

let body = d3.select(dom.window.document.querySelector("body"));
let svg = body
  .append("svg")
  .attr("width", 100)
  .attr("height", 100)
  .attr("xmlns", "http://www.w3.org/2000/svg");
svg
  .append("rect")
  .attr("x", 10)
  .attr("y", 10)
  .attr("width", 80)
  .attr("height", 80)
  .style("fill", "orange");

fs.writeFileSync("out.svg", body.html());

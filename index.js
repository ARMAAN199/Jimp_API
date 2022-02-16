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
const express = require("express");
app = express();
const { JSDOM } = jsdom;
// const addFont = require("add-font");

var d3 = require("d3");
const fs = require("fs");
const { url } = require("inspector");
const { append } = require("express/lib/response");

app.get("/:contri", (req, res) => {
  res.sendFile(__dirname + sendimg(req.params.contri));
});

var font = "monospace";

function sendimg(contri) {
  const dom = new JSDOM(
    `<!DOCTYPE html> <head> <link href="./fonts/pacifico/Pacifico.ttf" rel="stylesheet"> </head> <body> </body>`
  );
  let body = d3.select(dom.window.document.querySelector("body"));

  let svg = body
    .append("svg")
    .attr("width", 114)
    .attr("height", 121)
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .attr("xmlns:xlink", "http://www.w3.org/1999/xlink");

  var category = "gt1000";
  if (contri < 10) category = "lt10";
  else if (contri < 100) category = "lt100";
  else if (contri < 1000) category = "lt1000";

  // let image = svg
  //   .append("image")
  //   .attr("href", __dirname + "/sample.svg")
  //   .attr("width", 114)
  //   .attr("height", 121)
  //   .attr("x", 0)
  //   .attr("y", 0);

  let image = svg
    .append("image")
    .attr(
      "xlink:href",
      "data:image/svg+xml;base64," +
        "PHN2ZyB3aWR0aD0iMTE0IiBoZWlnaHQ9IjEyMSIgdmlld0JveD0iMCAwIDExNCAxMjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMTQiIGhlaWdodD0iMTIxIiByeD0iNyIgZmlsbD0iIzEzMjAyNyIvPgo8cGF0aCBkPSJNMjEuMjUxIDkzLjg3QzIxLjQ3ODMgOTMuOTE0IDIxLjY0NyA5My45OTEgMjEuNzU3IDk0LjEwMUMyMS44NzQzIDk0LjIxMSAyMS45MzMgOTQuMzM5MyAyMS45MzMgOTQuNDg2QzIxLjkzMyA5NC43MjggMjEuODYzMyA5NC45MDQgMjEuNzI0IDk1LjAxNEMyMS41OTIgOTUuMTI0IDIxLjM3OTMgOTUuMTY4IDIxLjA4NiA5NS4xNDZDMjAuNDI2IDk1LjA5NDcgMTkuOTA5IDk1LjA2MTcgMTkuNTM1IDk1LjA0N0MxOS4xNjgzIDk1LjAyNSAxOC42ODQzIDk1LjAxMDMgMTguMDgzIDk1LjAwM0MxNy44MTE3IDk2LjM1MjMgMTcuNTYyMyA5Ny43MDkgMTcuMzM1IDk5LjA3M0MxNy4yNTQzIDk5LjU3MTcgMTcuMTcgMTAwLjE1MSAxNy4wODIgMTAwLjgxMUMxNi45OTQgMTAxLjQ2NCAxNi45MzUzIDEwMS45OTIgMTYuOTA2IDEwMi4zOTVDMTYuODkxMyAxMDIuNjA4IDE2LjgwMzMgMTAyLjc3MyAxNi42NDIgMTAyLjg5QzE2LjQ4MDcgMTAzIDE2LjI4NjMgMTAzLjA1NSAxNi4wNTkgMTAzLjA1NUMxNS44MTcgMTAzLjA1NSAxNS42MyAxMDIuOTk2IDE1LjQ5OCAxMDIuODc5QzE1LjM2NiAxMDIuNzYyIDE1LjMgMTAyLjYwOCAxNS4zIDEwMi40MTdDMTUuMyAxMDIuMjQxIDE1LjMyNTcgMTAxLjk1MSAxNS4zNzcgMTAxLjU0OEMxNS40MzU3IDEwMS4xMzcgMTUuNTAxNyAxMDAuNzA4IDE1LjU3NSAxMDAuMjYxQzE1LjY1NTcgOTkuODEzNyAxNS43MTggOTkuNDI1IDE1Ljc2MiA5OS4wOTVDMTUuODQyNyA5OC41Mzc3IDE1LjkzNDMgOTcuOTg0IDE2LjAzNyA5Ny40MzRDMTYuMTM5NyA5Ni44ODQgMTYuMjQyMyA5Ni4zNjMzIDE2LjM0NSA5NS44NzJDMTYuMzY3IDk1Ljc2MiAxNi4zOTI3IDk1LjYzNzMgMTYuNDIyIDk1LjQ5OEMxNi40NTEzIDk1LjM1MTMgMTYuNDg0MyA5NS4xOSAxNi41MjEgOTUuMDE0QzE1LjgwMjMgOTUuMDM2IDE1LjIzNzcgOTUuMDk0NyAxNC44MjcgOTUuMTlDMTQuNDE2MyA5NS4yODUzIDE0LjEyMyA5NS40MjEgMTMuOTQ3IDk1LjU5N0MxMy43NzgzIDk1Ljc2NTcgMTMuNjk0IDk1Ljk4NTcgMTMuNjk0IDk2LjI1N0MxMy42OTQgOTYuNTA2MyAxMy43NjczIDk2Ljc0NDcgMTMuOTE0IDk2Ljk3MkMxMy45NDMzIDk3LjAyMzMgMTMuOTU4IDk3LjA3ODMgMTMuOTU4IDk3LjEzN0MxMy45NTggOTcuMjc2MyAxMy44NzM3IDk3LjQwODMgMTMuNzA1IDk3LjUzM0MxMy41NDM3IDk3LjY1MDMgMTMuMzc1IDk3LjcwOSAxMy4xOTkgOTcuNzA5QzEzLjA3NDMgOTcuNzA5IDEyLjk3MTcgOTcuNjcyMyAxMi44OTEgOTcuNTk5QzEyLjc0NDMgOTcuNDc0MyAxMi42MjMzIDk3LjI5ODMgMTIuNTI4IDk3LjA3MUMxMi40MzI3IDk2LjgzNjMgMTIuMzg1IDk2LjU3MjMgMTIuMzg1IDk2LjI3OUMxMi4zODUgOTUuNjU1NyAxMi41ODY3IDk1LjE1NyAxMi45OSA5NC43ODNDMTMuNDAwNyA5NC40MDE3IDE0LjAyMDMgOTQuMTIzIDE0Ljg0OSA5My45NDdDMTUuNjg1IDkzLjc3MSAxNi43NTU3IDkzLjY4MyAxOC4wNjEgOTMuNjgzQzE4Ljg2NzcgOTMuNjgzIDE5LjUwOTMgOTMuNjk3NyAxOS45ODYgOTMuNzI3QzIwLjQ3IDkzLjc1NjMgMjAuODkxNyA5My44MDQgMjEuMjUxIDkzLjg3Wk0yNC44MTk2IDk5LjYyM0MyNC45MTUgOTkuNjIzIDI0Ljk4ODMgOTkuNjcwNyAyNS4wMzk2IDk5Ljc2NkMyNS4wOTEgOTkuODYxMyAyNS4xMTY2IDk5Ljk4MjMgMjUuMTE2NiAxMDAuMTI5QzI1LjExNjYgMTAwLjQ4MSAyNS4wMTAzIDEwMC42OSAyNC43OTc2IDEwMC43NTZDMjQuMzU3NiAxMDAuOTEgMjMuODczNiAxMDAuOTk4IDIzLjM0NTYgMTAxLjAyQzIzLjIwNjMgMTAxLjYzNiAyMi45MzEzIDEwMi4xMzEgMjIuNTIwNiAxMDIuNTA1QzIyLjExIDEwMi44NzIgMjEuNjQ0MyAxMDMuMDU1IDIxLjEyMzYgMTAzLjA1NUMyMC42ODM2IDEwMy4wNTUgMjAuMzA2IDEwMi45NDkgMTkuOTkwNiAxMDIuNzM2QzE5LjY4MjYgMTAyLjUyMyAxOS40NDggMTAyLjI0MSAxOS4yODY2IDEwMS44ODlDMTkuMTI1MyAxMDEuNTM3IDE5LjA0NDYgMTAxLjE1NiAxOS4wNDQ2IDEwMC43NDVDMTkuMDQ0NiAxMDAuMTg4IDE5LjE1MSA5OS42OTI3IDE5LjM2MzYgOTkuMjZDMTkuNTc2MyA5OC44MiAxOS44Njk2IDk4LjQ3OSAyMC4yNDM2IDk4LjIzN0MyMC42MTc2IDk3Ljk4NzcgMjEuMDMyIDk3Ljg2MyAyMS40ODY2IDk3Ljg2M0MyMi4wNDQgOTcuODYzIDIyLjQ5MTMgOTguMDU3MyAyMi44Mjg2IDk4LjQ0NkMyMy4xNzMzIDk4LjgyNzMgMjMuMzc1IDk5LjMwMDMgMjMuNDMzNiA5OS44NjVDMjMuNzc4MyA5OS44NDMgMjQuMTg5IDk5Ljc2OTcgMjQuNjY1NiA5OS42NDVDMjQuNzI0MyA5OS42MzAzIDI0Ljc3NTYgOTkuNjIzIDI0LjgxOTYgOTkuNjIzWk0yMS4yMTE2IDEwMS44ODlDMjEuNDQ2MyAxMDEuODg5IDIxLjY0OCAxMDEuNzk0IDIxLjgxNjYgMTAxLjYwM0MyMS45OTI2IDEwMS40MTIgMjIuMTEgMTAxLjEzNyAyMi4xNjg2IDEwMC43NzhDMjEuOTQxMyAxMDAuNjI0IDIxLjc2NTMgMTAwLjQyMiAyMS42NDA2IDEwMC4xNzNDMjEuNTIzMyA5OS45MjM3IDIxLjQ2NDYgOTkuNjU5NyAyMS40NjQ2IDk5LjM4MUMyMS40NjQ2IDk5LjI2MzcgMjEuNDc1NiA5OS4xNDYzIDIxLjQ5NzYgOTkuMDI5SDIxLjQ0MjZDMjEuMTQ5MyA5OS4wMjkgMjAuOTAzNiA5OS4xNzIgMjAuNzA1NiA5OS40NThDMjAuNTE1IDk5LjczNjcgMjAuNDE5NiAxMDAuMTMzIDIwLjQxOTYgMTAwLjY0NkMyMC40MTk2IDEwMS4wNDkgMjAuNDk2NiAxMDEuMzU3IDIwLjY1MDYgMTAxLjU3QzIwLjgxMiAxMDEuNzgzIDIwLjk5OSAxMDEuODg5IDIxLjIxMTYgMTAxLjg4OVpNMjkuMzU3OCAxMDAuNTQ3QzI5LjQ1MzIgMTAwLjU0NyAyOS41MjY1IDEwMC41OTEgMjkuNTc3OCAxMDAuNjc5QzI5LjYzNjUgMTAwLjc2NyAyOS42NjU4IDEwMC44ODggMjkuNjY1OCAxMDEuMDQyQzI5LjY2NTggMTAxLjMzNSAyOS41OTYyIDEwMS41NjMgMjkuNDU2OCAxMDEuNzI0QzI5LjE0MTUgMTAyLjExMyAyOC43OTY4IDEwMi40MzIgMjguNDIyOCAxMDIuNjgxQzI4LjA0ODggMTAyLjkzIDI3LjYxOTggMTAzLjA1NSAyNy4xMzU4IDEwMy4wNTVDMjUuNjM5OCAxMDMuMDU1IDI0Ljg5MTggMTAyLjAwMyAyNC44OTE4IDk5Ljg5OEMyNC44OTE4IDk5LjU3NTMgMjQuOTAyOCA5OS4yNDkgMjQuOTI0OCA5OC45MTlIMjQuNDk1OEMyNC4yNzU4IDk4LjkxOSAyNC4xMjU1IDk4Ljg3ODcgMjQuMDQ0OCA5OC43OThDMjMuOTcxNSA5OC43MTczIDIzLjkzNDggOTguNTg5IDIzLjkzNDggOTguNDEzQzIzLjkzNDggOTguMDAyMyAyNC4wOTk4IDk3Ljc5NyAyNC40Mjk4IDk3Ljc5N0gyNS4wNTY4QzI1LjE4MTUgOTYuOTkwMyAyNS4zNzIyIDk2LjI1MzMgMjUuNjI4OCA5NS41ODZDMjUuODg1NSA5NC45MTg3IDI2LjE5MzUgOTQuMzg3IDI2LjU1MjggOTMuOTkxQzI2LjkxOTUgOTMuNTk1IDI3LjMxMTggOTMuMzk3IDI3LjcyOTggOTMuMzk3QzI4LjAzNzggOTMuMzk3IDI4LjI3OTggOTMuNTMyNyAyOC40NTU4IDkzLjgwNEMyOC42MzE4IDk0LjA3NTMgMjguNzE5OCA5NC40MTYzIDI4LjcxOTggOTQuODI3QzI4LjcxOTggOTUuOTYzNyAyOC4yNDMyIDk2Ljk1MzcgMjcuMjg5OCA5Ny43OTdIMjguNTIxOEMyOC42MzkyIDk3Ljc5NyAyOC43MjM1IDk3LjgyMjcgMjguNzc0OCA5Ny44NzRDMjguODI2MiA5Ny45MjUzIDI4Ljg1MTggOTguMDIwNyAyOC44NTE4IDk4LjE2QzI4Ljg1MTggOTguNjY2IDI4LjQzNzUgOTguOTE5IDI3LjYwODggOTguOTE5SDI2LjI2NjhDMjYuMjUyMiA5OS4yODU3IDI2LjI0NDggOTkuNTcxNyAyNi4yNDQ4IDk5Ljc3N0MyNi4yNDQ4IDEwMC41NCAyNi4zMzI4IDEwMS4wNzUgMjYuNTA4OCAxMDEuMzgzQzI2LjY5MjIgMTAxLjY5MSAyNi45NzgyIDEwMS44NDUgMjcuMzY2OCAxMDEuODQ1QzI3LjY4MjIgMTAxLjg0NSAyNy45NjA4IDEwMS43NSAyOC4yMDI4IDEwMS41NTlDMjguNDQ0OCAxMDEuMzY4IDI4LjczMDggMTAxLjA4MiAyOS4wNjA4IDEwMC43MDFDMjkuMTQ4OCAxMDAuNTk4IDI5LjI0NzggMTAwLjU0NyAyOS4zNTc4IDEwMC41NDdaTTI3LjQzMjggOTQuNDUzQzI3LjMyMjggOTQuNDUzIDI3LjE5ODIgOTQuNTkyMyAyNy4wNTg4IDk0Ljg3MUMyNi45MjY4IDk1LjE0MjMgMjYuNzk4NSA5NS41MjM3IDI2LjY3MzggOTYuMDE1QzI2LjU1NjUgOTYuNDk5IDI2LjQ1NzUgOTcuMDM4IDI2LjM3NjggOTcuNjMyQzI2LjgwOTUgOTcuMjU4IDI3LjEzMjIgOTYuODQgMjcuMzQ0OCA5Ni4zNzhDMjcuNTY0OCA5NS45MDg3IDI3LjY3NDggOTUuNDgzMyAyNy42NzQ4IDk1LjEwMkMyNy42NzQ4IDk0LjY2OTMgMjcuNTk0MiA5NC40NTMgMjcuNDMyOCA5NC40NTNaTTMwLjEyMzIgMTAzLjA1NUMyOS42Njg1IDEwMy4wNTUgMjkuMzA1NSAxMDIuODkgMjkuMDM0MiAxMDIuNTZDMjguNzYyOSAxMDIuMjMgMjguNjI3MiAxMDEuNzk3IDI4LjYyNzIgMTAxLjI2MkMyOC42MjcyIDEwMC42NzUgMjguNzYyOSAxMDAuMTIyIDI5LjAzNDIgOTkuNjAxQzI5LjMwNTUgOTkuMDczIDI5LjY2NDkgOTguNjUxMyAzMC4xMTIyIDk4LjMzNkMzMC41NjY5IDk4LjAxMzMgMzEuMDQ3MiA5Ny44NTIgMzEuNTUzMiA5Ny44NTJDMzEuNzE0NSA5Ny44NTIgMzEuODIwOSA5Ny44ODUgMzEuODcyMiA5Ny45NTFDMzEuOTMwOSA5OC4wMDk3IDMxLjk3ODUgOTguMTE5NyAzMi4wMTUyIDk4LjI4MUMzMi4xNjkyIDk4LjI1MTcgMzIuMzMwNSA5OC4yMzcgMzIuNDk5MiA5OC4yMzdDMzIuODU4NSA5OC4yMzcgMzMuMDM4MiA5OC4zNjUzIDMzLjAzODIgOTguNjIyQzMzLjAzODIgOTguNzc2IDMyLjk4MzIgOTkuMTQyNyAzMi44NzMyIDk5LjcyMkMzMi43MDQ1IDEwMC41NjUgMzIuNjIwMiAxMDEuMTUyIDMyLjYyMDIgMTAxLjQ4MkMzMi42MjAyIDEwMS41OTIgMzIuNjQ1OSAxMDEuNjggMzIuNjk3MiAxMDEuNzQ2QzMyLjc1NTkgMTAxLjgxMiAzMi44MjkyIDEwMS44NDUgMzIuOTE3MiAxMDEuODQ1QzMzLjA1NjUgMTAxLjg0NSAzMy4yMjUyIDEwMS43NTcgMzMuNDIzMiAxMDEuNTgxQzMzLjYyMTIgMTAxLjM5OCAzMy44ODg5IDEwMS4xMDQgMzQuMjI2MiAxMDAuNzAxQzM0LjMxNDIgMTAwLjU5OCAzNC40MTMyIDEwMC41NDcgMzQuNTIzMiAxMDAuNTQ3QzM0LjYxODUgMTAwLjU0NyAzNC42OTE5IDEwMC41OTEgMzQuNzQzMiAxMDAuNjc5QzM0LjgwMTkgMTAwLjc2NyAzNC44MzEyIDEwMC44ODggMzQuODMxMiAxMDEuMDQyQzM0LjgzMTIgMTAxLjMzNSAzNC43NjE1IDEwMS41NjMgMzQuNjIyMiAxMDEuNzI0QzM0LjMyMTUgMTAyLjA5OCAzNC4wMDI1IDEwMi40MTMgMzMuNjY1MiAxMDIuNjdDMzMuMzI3OSAxMDIuOTI3IDMzLjAwMTUgMTAzLjA1NSAzMi42ODYyIDEwMy4wNTVDMzIuNDQ0MiAxMDMuMDU1IDMyLjIyMDUgMTAyLjk3NCAzMi4wMTUyIDEwMi44MTNDMzEuODE3MiAxMDIuNjQ0IDMxLjY2NjkgMTAyLjQxNyAzMS41NjQyIDEwMi4xMzFDMzEuMTgyOSAxMDIuNzQ3IDMwLjcwMjUgMTAzLjA1NSAzMC4xMjMyIDEwMy4wNTVaTTMwLjUxOTIgMTAxLjk0NEMzMC42ODA1IDEwMS45NDQgMzAuODM0NSAxMDEuODQ5IDMwLjk4MTIgMTAxLjY1OEMzMS4xMjc5IDEwMS40NjcgMzEuMjM0MiAxMDEuMjE0IDMxLjMwMDIgMTAwLjg5OUwzMS43MDcyIDk4Ljg3NUMzMS4zOTkyIDk4Ljg4MjMgMzEuMTEzMiA5OC45OTk3IDMwLjg0OTIgOTkuMjI3QzMwLjU5MjUgOTkuNDQ3IDMwLjM4NzIgOTkuNzQwMyAzMC4yMzMyIDEwMC4xMDdDMzAuMDc5MiAxMDAuNDc0IDMwLjAwMjIgMTAwLjg2MiAzMC4wMDIyIDEwMS4yNzNDMzAuMDAyMiAxMDEuNSAzMC4wNDYyIDEwMS42NjkgMzAuMTM0MiAxMDEuNzc5QzMwLjIyOTUgMTAxLjg4OSAzMC4zNTc5IDEwMS45NDQgMzAuNTE5MiAxMDEuOTQ0Wk0zNy4xMTYyIDEwMS40NDlDMzcuMTk2OCAxMDEuMzc2IDM3LjI3NzUgMTAxLjMzOSAzNy4zNTgyIDEwMS4zMzlDMzcuNDQ2MiAxMDEuMzM5IDM3LjUxNTggMTAxLjM5IDM3LjU2NzIgMTAxLjQ5M0MzNy42MjU4IDEwMS41ODggMzcuNjU1MiAxMDEuNzA2IDM3LjY1NTIgMTAxLjg0NUMzNy42NTUyIDEwMi4xNTMgMzcuNTQ1MiAxMDIuMzk5IDM3LjMyNTIgMTAyLjU4MkMzNi45NDM4IDEwMi44OTcgMzYuNTExMiAxMDMuMDU1IDM2LjAyNzIgMTAzLjA1NUMzNS4zMzA1IDEwMy4wNTUgMzQuODIwOCAxMDIuNzY1IDM0LjQ5ODIgMTAyLjE4NkMzNC4xNzU1IDEwMS41OTkgMzQuMDE0MiAxMDAuODM3IDM0LjAxNDIgOTkuODk4QzM0LjAxNDIgOTkuMDAzMyAzNC4xMjc4IDk3Ljk4NCAzNC4zNTUyIDk2Ljg0QzM0LjU4OTggOTUuNjk2IDM0LjkzMDggOTQuNzEzMyAzNS4zNzgyIDkzLjg5MkMzNS44MzI4IDkzLjA3MDcgMzYuMzcxOCA5Mi42NiAzNi45OTUyIDkyLjY2QzM3LjM0NzIgOTIuNjYgMzcuNjIyMiA5Mi44MjUgMzcuODIwMiA5My4xNTVDMzguMDI1NSA5My40Nzc3IDM4LjEyODIgOTMuOTQzMyAzOC4xMjgyIDk0LjU1MkMzOC4xMjgyIDk1LjQyNDcgMzcuODg2MiA5Ni40MzY3IDM3LjQwMjIgOTcuNTg4QzM2LjkyNTUgOTguNzM5MyAzNi4yNzI4IDk5Ljg3NiAzNS40NDQyIDEwMC45OThDMzUuNDk1NSAxMDEuMjk5IDM1LjU4NzIgMTAxLjUxNSAzNS43MTkyIDEwMS42NDdDMzUuODUxMiAxMDEuNzc5IDM2LjAzMDggMTAxLjg0NSAzNi4yNTgyIDEwMS44NDVDMzYuMzgyOCAxMDEuODQ1IDM2LjUyMjIgMTAxLjgwOCAzNi42NzYyIDEwMS43MzVDMzYuODM3NSAxMDEuNjYyIDM2Ljk4NDIgMTAxLjU2NiAzNy4xMTYyIDEwMS40NDlaTTM2Ljc1MzIgOTMuNzQ5QzM2LjU4NDUgOTMuNzQ5IDM2LjM5MzggOTQuMDUzMyAzNi4xODEyIDk0LjY2MkMzNS45Njg1IDk1LjI3MDcgMzUuNzgxNSA5Ni4wMjYgMzUuNjIwMiA5Ni45MjhDMzUuNDU4OCA5Ny44MyAzNS4zNzA4IDk4LjY5NTMgMzUuMzU2MiA5OS41MjRDMzUuODc2OCA5OC42NjYgMzYuMjkxMiA5Ny44MDggMzYuNTk5MiA5Ni45NUMzNi45MDcyIDk2LjA4NDcgMzcuMDYxMiA5NS4yOTYzIDM3LjA2MTIgOTQuNTg1QzM3LjA2MTIgOTQuMDI3NyAzNi45NTg1IDkzLjc0OSAzNi43NTMyIDkzLjc0OVpNNDIuOTk5MSAxMDMuMDU1QzQyLjI4MDUgMTAzLjA1NSA0MS43MTk1IDEwMi44NTMgNDEuMzE2MSAxMDIuNDVDNDAuOTIwMSAxMDIuMDM5IDQwLjcyMjEgMTAxLjUgNDAuNzIyMSAxMDAuODMzQzQwLjcyMjEgMTAwLjIzOSA0MC44Mzk1IDk5LjcxODMgNDEuMDc0MSA5OS4yNzFDNDEuMzA4OCA5OC44MjM3IDQxLjYxMzEgOTguNDc5IDQxLjk4NzEgOTguMjM3QzQyLjM2MTEgOTcuOTk1IDQyLjc1MzUgOTcuODc0IDQzLjE2NDEgOTcuODc0QzQzLjU2NzUgOTcuODc0IDQzLjg3OTEgOTcuOTk1IDQ0LjA5OTEgOTguMjM3QzQ0LjMyNjUgOTguNDcxNyA0NC40NDAxIDk4Ljc3NiA0NC40NDAxIDk5LjE1QzQ0LjQ0MDEgOTkuNDU4IDQ0LjM3MDUgOTkuNzE4MyA0NC4yMzExIDk5LjkzMUM0NC4wOTkxIDEwMC4xNDQgNDMuOTIzMSAxMDAuMjUgNDMuNzAzMSAxMDAuMjVDNDMuNTYzOCAxMDAuMjUgNDMuNDUwMSAxMDAuMjE3IDQzLjM2MjEgMTAwLjE1MUM0My4yODE1IDEwMC4wODUgNDMuMjQxMSA5OS45OTMzIDQzLjI0MTEgOTkuODc2QzQzLjI0MTEgOTkuODI0NyA0My4yNDg1IDk5Ljc2NiA0My4yNjMxIDk5LjdDNDMuMjc3OCA5OS42MzQgNDMuMjg4OCA5OS41ODYzIDQzLjI5NjEgOTkuNTU3QzQzLjMzMjggOTkuNDQ3IDQzLjM1MTEgOTkuMzQ0MyA0My4zNTExIDk5LjI0OUM0My4zNTExIDk5LjE1MzcgNDMuMzI1NSA5OS4wODAzIDQzLjI3NDEgOTkuMDI5QzQzLjIzMDEgOTguOTc3NyA0My4xNjQxIDk4Ljk1MiA0My4wNzYxIDk4Ljk1MkM0Mi45MDc1IDk4Ljk1MiA0Mi43NDk4IDk5LjAyOSA0Mi42MDMxIDk5LjE4M0M0Mi40NTY1IDk5LjMyOTcgNDIuMzM5MSA5OS41MzEzIDQyLjI1MTEgOTkuNzg4QzQyLjE2MzEgMTAwLjA0NSA0Mi4xMTkxIDEwMC4zMjcgNDIuMTE5MSAxMDAuNjM1QzQyLjExOTEgMTAxLjQ4NiA0Mi40ODk1IDEwMS45MTEgNDMuMjMwMSAxMDEuOTExQzQzLjUzMDggMTAxLjkxMSA0My44NTM1IDEwMS44MTIgNDQuMTk4MSAxMDEuNjE0QzQ0LjU1MDEgMTAxLjQwOSA0NC44OTQ4IDEwMS4xMDQgNDUuMjMyMSAxMDAuNzAxQzQ1LjMyMDEgMTAwLjU5OCA0NS40MTkxIDEwMC41NDcgNDUuNTI5MSAxMDAuNTQ3QzQ1LjYyNDUgMTAwLjU0NyA0NS42OTc4IDEwMC41OTEgNDUuNzQ5MSAxMDAuNjc5QzQ1LjgwNzggMTAwLjc2NyA0NS44MzcxIDEwMC44ODggNDUuODM3MSAxMDEuMDQyQzQ1LjgzNzEgMTAxLjMyMSA0NS43Njc1IDEwMS41NDggNDUuNjI4MSAxMDEuNzI0QzQ1LjI4MzUgMTAyLjE0OSA0NC44NjkxIDEwMi40NzkgNDQuMzg1MSAxMDIuNzE0QzQzLjkwODUgMTAyLjk0MSA0My40NDY1IDEwMy4wNTUgNDIuOTk5MSAxMDMuMDU1Wk01MC41NTc5IDk5LjYyM0M1MC42NTMzIDk5LjYyMyA1MC43MjY2IDk5LjY3MDcgNTAuNzc3OSA5OS43NjZDNTAuODI5MyA5OS44NjEzIDUwLjg1NDkgOTkuOTgyMyA1MC44NTQ5IDEwMC4xMjlDNTAuODU0OSAxMDAuNDgxIDUwLjc0ODYgMTAwLjY5IDUwLjUzNTkgMTAwLjc1NkM1MC4wOTU5IDEwMC45MSA0OS42MTE5IDEwMC45OTggNDkuMDgzOSAxMDEuMDJDNDguOTQ0NiAxMDEuNjM2IDQ4LjY2OTYgMTAyLjEzMSA0OC4yNTg5IDEwMi41MDVDNDcuODQ4MyAxMDIuODcyIDQ3LjM4MjYgMTAzLjA1NSA0Ni44NjE5IDEwMy4wNTVDNDYuNDIxOSAxMDMuMDU1IDQ2LjA0NDMgMTAyLjk0OSA0NS43Mjg5IDEwMi43MzZDNDUuNDIwOSAxMDIuNTIzIDQ1LjE4NjMgMTAyLjI0MSA0NS4wMjQ5IDEwMS44ODlDNDQuODYzNiAxMDEuNTM3IDQ0Ljc4MjkgMTAxLjE1NiA0NC43ODI5IDEwMC43NDVDNDQuNzgyOSAxMDAuMTg4IDQ0Ljg4OTMgOTkuNjkyNyA0NS4xMDE5IDk5LjI2QzQ1LjMxNDYgOTguODIgNDUuNjA3OSA5OC40NzkgNDUuOTgxOSA5OC4yMzdDNDYuMzU1OSA5Ny45ODc3IDQ2Ljc3MDMgOTcuODYzIDQ3LjIyNDkgOTcuODYzQzQ3Ljc4MjMgOTcuODYzIDQ4LjIyOTYgOTguMDU3MyA0OC41NjY5IDk4LjQ0NkM0OC45MTE2IDk4LjgyNzMgNDkuMTEzMyA5OS4zMDAzIDQ5LjE3MTkgOTkuODY1QzQ5LjUxNjYgOTkuODQzIDQ5LjkyNzMgOTkuNzY5NyA1MC40MDM5IDk5LjY0NUM1MC40NjI2IDk5LjYzMDMgNTAuNTEzOSA5OS42MjMgNTAuNTU3OSA5OS42MjNaTTQ2Ljk0OTkgMTAxLjg4OUM0Ny4xODQ2IDEwMS44ODkgNDcuMzg2MyAxMDEuNzk0IDQ3LjU1NDkgMTAxLjYwM0M0Ny43MzA5IDEwMS40MTIgNDcuODQ4MyAxMDEuMTM3IDQ3LjkwNjkgMTAwLjc3OEM0Ny42Nzk2IDEwMC42MjQgNDcuNTAzNiAxMDAuNDIyIDQ3LjM3ODkgMTAwLjE3M0M0Ny4yNjE2IDk5LjkyMzcgNDcuMjAyOSA5OS42NTk3IDQ3LjIwMjkgOTkuMzgxQzQ3LjIwMjkgOTkuMjYzNyA0Ny4yMTM5IDk5LjE0NjMgNDcuMjM1OSA5OS4wMjlINDcuMTgwOUM0Ni44ODc2IDk5LjAyOSA0Ni42NDE5IDk5LjE3MiA0Ni40NDM5IDk5LjQ1OEM0Ni4yNTMzIDk5LjczNjcgNDYuMTU3OSAxMDAuMTMzIDQ2LjE1NzkgMTAwLjY0NkM0Ni4xNTc5IDEwMS4wNDkgNDYuMjM0OSAxMDEuMzU3IDQ2LjM4ODkgMTAxLjU3QzQ2LjU1MDMgMTAxLjc4MyA0Ni43MzczIDEwMS44ODkgNDYuOTQ5OSAxMDEuODg5Wk01MC42OTE4IDEwMy4wNTVDNTAuNDEzMSAxMDMuMDU1IDUwLjIxNTEgMTAyLjkwOCA1MC4wOTc4IDEwMi42MTVDNDkuOTg3OCAxMDIuMzIyIDQ5LjkzMjggMTAxLjg1MiA0OS45MzI4IDEwMS4yMDdDNDkuOTMyOCAxMDAuMjU0IDUwLjA2ODUgOTkuMzQ4IDUwLjMzOTggOTguNDlDNTAuNDA1OCA5OC4yNzczIDUwLjUxMjEgOTguMTIzMyA1MC42NTg4IDk4LjAyOEM1MC44MTI4IDk3LjkyNTMgNTEuMDI1NSA5Ny44NzQgNTEuMjk2OCA5Ny44NzRDNTEuNDQzNSA5Ny44NzQgNTEuNTQ2MSA5Ny44OTIzIDUxLjYwNDggOTcuOTI5QzUxLjY2MzUgOTcuOTY1NyA1MS42OTI4IDk4LjAzNTMgNTEuNjkyOCA5OC4xMzhDNTEuNjkyOCA5OC4yNTUzIDUxLjYzNzggOTguNTE5MyA1MS41Mjc4IDk4LjkzQzUxLjQ1NDUgOTkuMjIzMyA1MS4zOTU4IDk5LjQ4IDUxLjM1MTggOTkuN0M1MS4zMDc4IDk5LjkyIDUxLjI3MTEgMTAwLjE5MSA1MS4yNDE4IDEwMC41MTRDNTEuNDgzOCA5OS44ODMzIDUxLjc1NTEgOTkuMzcgNTIuMDU1OCA5OC45NzRDNTIuMzU2NSA5OC41NzggNTIuNjQ5OCA5OC4yOTU3IDUyLjkzNTggOTguMTI3QzUzLjIyOTEgOTcuOTU4MyA1My40OTY4IDk3Ljg3NCA1My43Mzg4IDk3Ljg3NEM1NC4yMTU1IDk3Ljg3NCA1NC40NTM4IDk4LjExMjMgNTQuNDUzOCA5OC41ODlDNTQuNDUzOCA5OC44NzUgNTQuMzczMSA5OS4zOTIgNTQuMjExOCAxMDAuMTRDNTQuMDcyNSAxMDAuNzc4IDU0LjAwMjggMTAxLjIgNTQuMDAyOCAxMDEuNDA1QzU0LjAwMjggMTAxLjY5OCA1NC4xMDkxIDEwMS44NDUgNTQuMzIxOCAxMDEuODQ1QzU0LjQ2ODUgMTAxLjg0NSA1NC42NDA4IDEwMS43NTcgNTQuODM4OCAxMDEuNTgxQzU1LjA0NDEgMTAxLjM5OCA1NS4zMTU1IDEwMS4xMDQgNTUuNjUyOCAxMDAuNzAxQzU1Ljc0MDggMTAwLjU5OCA1NS44Mzk4IDEwMC41NDcgNTUuOTQ5OCAxMDAuNTQ3QzU2LjA0NTEgMTAwLjU0NyA1Ni4xMTg1IDEwMC41OTEgNTYuMTY5OCAxMDAuNjc5QzU2LjIyODUgMTAwLjc2NyA1Ni4yNTc4IDEwMC44ODggNTYuMjU3OCAxMDEuMDQyQzU2LjI1NzggMTAxLjMzNSA1Ni4xODgxIDEwMS41NjMgNTYuMDQ4OCAxMDEuNzI0QzU1LjczMzUgMTAyLjExMyA1NS4zOTI1IDEwMi40MzIgNTUuMDI1OCAxMDIuNjgxQzU0LjY2NjUgMTAyLjkzIDU0LjI1NTggMTAzLjA1NSA1My43OTM4IDEwMy4wNTVDNTMuNDE5OCAxMDMuMDU1IDUzLjEzNzUgMTAyLjk0OSA1Mi45NDY4IDEwMi43MzZDNTIuNzU2MSAxMDIuNTE2IDUyLjY2MDggMTAyLjIwMSA1Mi42NjA4IDEwMS43OUM1Mi42NjA4IDEwMS41ODUgNTIuNzEyMSAxMDEuMjE4IDUyLjgxNDggMTAwLjY5QzUyLjkxMDEgMTAwLjIyOCA1Mi45NTc4IDk5LjkwOSA1Mi45NTc4IDk5LjczM0M1Mi45NTc4IDk5LjYxNTcgNTIuOTE3NSA5OS41NTcgNTIuODM2OCA5OS41NTdDNTIuNzQxNSA5OS41NTcgNTIuNjA1OCA5OS42ODE3IDUyLjQyOTggOTkuOTMxQzUyLjI2MTEgMTAwLjE3MyA1Mi4wODUxIDEwMC40OTYgNTEuOTAxOCAxMDAuODk5QzUxLjcyNTggMTAxLjMwMiA1MS41ODI4IDEwMS43MjggNTEuNDcyOCAxMDIuMTc1QzUxLjM5MjEgMTAyLjUyIDUxLjI5NjggMTAyLjc1NCA1MS4xODY4IDEwMi44NzlDNTEuMDg0MSAxMDIuOTk2IDUwLjkxOTEgMTAzLjA1NSA1MC42OTE4IDEwMy4wNTVaTTYwLjI3MzggMTAwLjU0N0M2MC4zNjkyIDEwMC41NDcgNjAuNDQyNSAxMDAuNTkxIDYwLjQ5MzggMTAwLjY3OUM2MC41NTI1IDEwMC43NjcgNjAuNTgxOCAxMDAuODg4IDYwLjU4MTggMTAxLjA0MkM2MC41ODE4IDEwMS4zMzUgNjAuNTEyMiAxMDEuNTYzIDYwLjM3MjggMTAxLjcyNEM2MC4wNTc1IDEwMi4xMTMgNTkuNzEyOCAxMDIuNDMyIDU5LjMzODggMTAyLjY4MUM1OC45NjQ4IDEwMi45MyA1OC41MzU4IDEwMy4wNTUgNTguMDUxOCAxMDMuMDU1QzU2LjU1NTggMTAzLjA1NSA1NS44MDc4IDEwMi4wMDMgNTUuODA3OCA5OS44OThDNTUuODA3OCA5OS41NzUzIDU1LjgxODggOTkuMjQ5IDU1Ljg0MDggOTguOTE5SDU1LjQxMThDNTUuMTkxOCA5OC45MTkgNTUuMDQxNSA5OC44Nzg3IDU0Ljk2MDggOTguNzk4QzU0Ljg4NzUgOTguNzE3MyA1NC44NTA4IDk4LjU4OSA1NC44NTA4IDk4LjQxM0M1NC44NTA4IDk4LjAwMjMgNTUuMDE1OCA5Ny43OTcgNTUuMzQ1OCA5Ny43OTdINTUuOTcyOEM1Ni4wOTc1IDk2Ljk5MDMgNTYuMjg4MiA5Ni4yNTMzIDU2LjU0NDggOTUuNTg2QzU2LjgwMTUgOTQuOTE4NyA1Ny4xMDk1IDk0LjM4NyA1Ny40Njg4IDkzLjk5MUM1Ny44MzU1IDkzLjU5NSA1OC4yMjc4IDkzLjM5NyA1OC42NDU4IDkzLjM5N0M1OC45NTM4IDkzLjM5NyA1OS4xOTU4IDkzLjUzMjcgNTkuMzcxOCA5My44MDRDNTkuNTQ3OCA5NC4wNzUzIDU5LjYzNTggOTQuNDE2MyA1OS42MzU4IDk0LjgyN0M1OS42MzU4IDk1Ljk2MzcgNTkuMTU5MiA5Ni45NTM3IDU4LjIwNTggOTcuNzk3SDU5LjQzNzhDNTkuNTU1MiA5Ny43OTcgNTkuNjM5NSA5Ny44MjI3IDU5LjY5MDggOTcuODc0QzU5Ljc0MjIgOTcuOTI1MyA1OS43Njc4IDk4LjAyMDcgNTkuNzY3OCA5OC4xNkM1OS43Njc4IDk4LjY2NiA1OS4zNTM1IDk4LjkxOSA1OC41MjQ4IDk4LjkxOUg1Ny4xODI4QzU3LjE2ODIgOTkuMjg1NyA1Ny4xNjA4IDk5LjU3MTcgNTcuMTYwOCA5OS43NzdDNTcuMTYwOCAxMDAuNTQgNTcuMjQ4OCAxMDEuMDc1IDU3LjQyNDggMTAxLjM4M0M1Ny42MDgyIDEwMS42OTEgNTcuODk0MiAxMDEuODQ1IDU4LjI4MjggMTAxLjg0NUM1OC41OTgyIDEwMS44NDUgNTguODc2OCAxMDEuNzUgNTkuMTE4OCAxMDEuNTU5QzU5LjM2MDggMTAxLjM2OCA1OS42NDY4IDEwMS4wODIgNTkuOTc2OCAxMDAuNzAxQzYwLjA2NDggMTAwLjU5OCA2MC4xNjM4IDEwMC41NDcgNjAuMjczOCAxMDAuNTQ3Wk01OC4zNDg4IDk0LjQ1M0M1OC4yMzg4IDk0LjQ1MyA1OC4xMTQyIDk0LjU5MjMgNTcuOTc0OCA5NC44NzFDNTcuODQyOCA5NS4xNDIzIDU3LjcxNDUgOTUuNTIzNyA1Ny41ODk4IDk2LjAxNUM1Ny40NzI1IDk2LjQ5OSA1Ny4zNzM1IDk3LjAzOCA1Ny4yOTI4IDk3LjYzMkM1Ny43MjU1IDk3LjI1OCA1OC4wNDgyIDk2Ljg0IDU4LjI2MDggOTYuMzc4QzU4LjQ4MDggOTUuOTA4NyA1OC41OTA4IDk1LjQ4MzMgNTguNTkwOCA5NS4xMDJDNTguNTkwOCA5NC42NjkzIDU4LjUxMDIgOTQuNDUzIDU4LjM0ODggOTQuNDUzWk02MC40NjcyIDEwMy4wNTVDNjAuMTg4NSAxMDMuMDU1IDU5Ljk5MDUgMTAyLjkwOCA1OS44NzMyIDEwMi42MTVDNTkuNzYzMiAxMDIuMzIyIDU5LjcwODIgMTAxLjg1MiA1OS43MDgyIDEwMS4yMDdDNTkuNzA4MiAxMDAuMjU0IDU5Ljg0MzkgOTkuMzQ4IDYwLjExNTIgOTguNDlDNjAuMTgxMiA5OC4yNzczIDYwLjI4NzUgOTguMTIzMyA2MC40MzQyIDk4LjAyOEM2MC41ODgyIDk3LjkyNTMgNjAuODAwOSA5Ny44NzQgNjEuMDcyMiA5Ny44NzRDNjEuMjE4OSA5Ny44NzQgNjEuMzIxNSA5Ny44OTIzIDYxLjM4MDIgOTcuOTI5QzYxLjQzODkgOTcuOTY1NyA2MS40NjgyIDk4LjAzNTMgNjEuNDY4MiA5OC4xMzhDNjEuNDY4MiA5OC4yNTUzIDYxLjQxMzIgOTguNTE5MyA2MS4zMDMyIDk4LjkzQzYxLjIyOTkgOTkuMjIzMyA2MS4xNzEyIDk5LjQ4IDYxLjEyNzIgOTkuN0M2MS4wODMyIDk5LjkyIDYxLjA0NjUgMTAwLjE5MSA2MS4wMTcyIDEwMC41MTRDNjEuMjU5MiA5OS44ODMzIDYxLjUzMDUgOTkuMzcgNjEuODMxMiA5OC45NzRDNjIuMTMxOSA5OC41NzggNjIuNDI1MiA5OC4yOTU3IDYyLjcxMTIgOTguMTI3QzYzLjAwNDUgOTcuOTU4MyA2My4yNzIyIDk3Ljg3NCA2My41MTQyIDk3Ljg3NEM2My45OTA5IDk3Ljg3NCA2NC4yMjkyIDk4LjExMjMgNjQuMjI5MiA5OC41ODlDNjQuMjI5MiA5OC42ODQzIDY0LjE5NjIgOTguOTE1MyA2NC4xMzAyIDk5LjI4MkM2NC4wNzE1IDk5LjU3NTMgNjQuMDQyMiA5OS43NTg3IDY0LjA0MjIgOTkuODMyQzY0LjA0MjIgMTAwLjA4OSA2NC4xMzM5IDEwMC4yMTcgNjQuMzE3MiAxMDAuMjE3QzY0LjUyMjUgMTAwLjIxNyA2NC43ODY1IDEwMC4wNTYgNjUuMTA5MiA5OS43MzNDNjUuMjA0NSA5OS42Mzc3IDY1LjMwMzUgOTkuNTkgNjUuNDA2MiA5OS41OUM2NS41MDE1IDk5LjU5IDY1LjU3NDkgOTkuNjM0IDY1LjYyNjIgOTkuNzIyQzY1LjY4NDkgOTkuODAyNyA2NS43MTQyIDk5LjkxMjcgNjUuNzE0MiAxMDAuMDUyQzY1LjcxNDIgMTAwLjMyMyA2NS42NDA5IDEwMC41MzYgNjUuNDk0MiAxMDAuNjlDNjUuMjg4OSAxMDAuOTAzIDY1LjA0NjkgMTAxLjA4NiA2NC43NjgyIDEwMS4yNEM2NC40OTY5IDEwMS4zODcgNjQuMjA3MiAxMDEuNDYgNjMuODk5MiAxMDEuNDZDNjMuNTEwNSAxMDEuNDYgNjMuMjEzNSAxMDEuMzYxIDYzLjAwODIgMTAxLjE2M0M2Mi44MTAyIDEwMC45NjUgNjIuNzExMiAxMDAuNjk3IDYyLjcxMTIgMTAwLjM2QzYyLjcxMTIgMTAwLjI1IDYyLjcyMjIgMTAwLjE0IDYyLjc0NDIgMTAwLjAzQzYyLjc1ODkgOTkuODgzMyA2Mi43NjYyIDk5Ljc4NDMgNjIuNzY2MiA5OS43MzNDNjIuNzY2MiA5OS42MTU3IDYyLjcyNTkgOTkuNTU3IDYyLjY0NTIgOTkuNTU3QzYyLjUzNTIgOTkuNTU3IDYyLjM4ODUgOTkuNjgxNyA2Mi4yMDUyIDk5LjkzMUM2Mi4wMjkyIDEwMC4xNzMgNjEuODUzMiAxMDAuNDk2IDYxLjY3NzIgMTAwLjg5OUM2MS41MDEyIDEwMS4zMDIgNjEuMzU4MiAxMDEuNzI4IDYxLjI0ODIgMTAyLjE3NUM2MS4xNjc1IDEwMi41MiA2MS4wNzIyIDEwMi43NTQgNjAuOTYyMiAxMDIuODc5QzYwLjg1OTUgMTAyLjk5NiA2MC42OTQ1IDEwMy4wNTUgNjAuNDY3MiAxMDMuMDU1Wk02Ni4xMzMxIDk3LjE0OEM2NS44MjUxIDk3LjE0OCA2NS41OTQxIDk3LjA3ODMgNjUuNDQwMSA5Ni45MzlDNjUuMjg2MSA5Ni43OTIzIDY1LjIwOTEgOTYuNTkwNyA2NS4yMDkxIDk2LjMzNEM2NS4yMDkxIDk2LjA3NzMgNjUuMzA4MSA5NS44NjQ3IDY1LjUwNjEgOTUuNjk2QzY1LjcxMTQgOTUuNTIgNjUuOTY0NCA5NS40MzIgNjYuMjY1MSA5NS40MzJDNjYuNTM2NCA5NS40MzIgNjYuNzU2NCA5NS40OTggNjYuOTI1MSA5NS42M0M2Ny4wOTM3IDk1Ljc2MiA2Ny4xNzgxIDk1Ljk0OSA2Ny4xNzgxIDk2LjE5MUM2Ny4xNzgxIDk2LjQ4NDMgNjcuMDgyNyA5Ni43MTkgNjYuODkyMSA5Ni44OTVDNjYuNzAxNCA5Ny4wNjM3IDY2LjQ0ODQgOTcuMTQ4IDY2LjEzMzEgOTcuMTQ4Wk02Ni4wNDUxIDEwMy4wNTVDNjUuNTY4NCAxMDMuMDU1IDY1LjIyMDEgMTAyLjg4NiA2NS4wMDAxIDEwMi41NDlDNjQuNzg3NCAxMDIuMjEyIDY0LjY4MTEgMTAxLjc2NCA2NC42ODExIDEwMS4yMDdDNjQuNjgxMSAxMDAuODc3IDY0LjcyMTQgMTAwLjQ1NSA2NC44MDIxIDk5Ljk0MkM2NC44OTAxIDk5LjQyMTMgNjUuMDAwMSA5OC45MzczIDY1LjEzMjEgOTguNDlDNjUuMTk4MSA5OC4yNTUzIDY1LjI4NjEgOTguMDk0IDY1LjM5NjEgOTguMDA2QzY1LjUwNjEgOTcuOTE4IDY1LjY4MjEgOTcuODc0IDY1LjkyNDEgOTcuODc0QzY2LjI5ODEgOTcuODc0IDY2LjQ4NTEgOTcuOTk4NyA2Ni40ODUxIDk4LjI0OEM2Ni40ODUxIDk4LjQzMTMgNjYuNDE1NCA5OC44NTY3IDY2LjI3NjEgOTkuNTI0QzY2LjEwMDEgMTAwLjMzMSA2Ni4wMTIxIDEwMC44NzcgNjYuMDEyMSAxMDEuMTYzQzY2LjAxMjEgMTAxLjM4MyA2Ni4wNDE0IDEwMS41NTIgNjYuMTAwMSAxMDEuNjY5QzY2LjE1ODcgMTAxLjc4NiA2Ni4yNTc3IDEwMS44NDUgNjYuMzk3MSAxMDEuODQ1QzY2LjUyOTEgMTAxLjg0NSA2Ni42OTQxIDEwMS43NTMgNjYuODkyMSAxMDEuNTdDNjcuMDkwMSAxMDEuMzg3IDY3LjM1NDEgMTAxLjA5NyA2Ny42ODQxIDEwMC43MDFDNjcuNzcyMSAxMDAuNTk4IDY3Ljg3MTEgMTAwLjU0NyA2Ny45ODExIDEwMC41NDdDNjguMDc2NCAxMDAuNTQ3IDY4LjE0OTcgMTAwLjU5MSA2OC4yMDExIDEwMC42NzlDNjguMjU5NyAxMDAuNzY3IDY4LjI4OTEgMTAwLjg4OCA2OC4yODkxIDEwMS4wNDJDNjguMjg5MSAxMDEuMzM1IDY4LjIxOTQgMTAxLjU2MyA2OC4wODAxIDEwMS43MjRDNjcuMzU0MSAxMDIuNjExIDY2LjY3NTcgMTAzLjA1NSA2Ni4wNDUxIDEwMy4wNTVaTTczLjI1MTEgOTkuNjIzQzczLjM0NjQgOTkuNjIzIDczLjQxOTggOTkuNjcwNyA3My40NzExIDk5Ljc2NkM3My41MjI0IDk5Ljg2MTMgNzMuNTQ4MSA5OS45ODIzIDczLjU0ODEgMTAwLjEyOUM3My41NDgxIDEwMC4zMTIgNzMuNTIyNCAxMDAuNDU1IDczLjQ3MTEgMTAwLjU1OEM3My40MTk4IDEwMC42NTMgNzMuMzM5MSAxMDAuNzE5IDczLjIyOTEgMTAwLjc1NkM3Mi43ODkxIDEwMC45MSA3Mi4zMDUxIDEwMC45OTggNzEuNzc3MSAxMDEuMDJDNzEuNjMwNCAxMDEuNjI5IDcxLjM1MTggMTAyLjEyIDcwLjk0MTEgMTAyLjQ5NEM3MC41Mzc4IDEwMi44NjggNzAuMDkwNCAxMDMuMDU1IDY5LjU5OTEgMTAzLjA1NUM2OC44NTg0IDEwMy4wNTUgNjguMzE5NCAxMDIuNzczIDY3Ljk4MjEgMTAyLjIwOEM2Ny42NDQ4IDEwMS42NDMgNjcuNDc2MSAxMDAuODI2IDY3LjQ3NjEgOTkuNzU1QzY3LjQ3NjEgOTguODA5IDY3LjU5MzQgOTcuNzgyMyA2Ny44MjgxIDk2LjY3NUM2OC4wNjI4IDk1LjU2MDMgNjguNDAzOCA5NC42MTQzIDY4Ljg1MTEgOTMuODM3QzY5LjMwNTggOTMuMDUyMyA2OS44NDQ4IDkyLjY2IDcwLjQ2ODEgOTIuNjZDNzAuODA1NCA5Mi42NiA3MS4wNzY4IDkyLjgwNjcgNzEuMjgyMSA5My4xQzcxLjQ4NzQgOTMuMzg2IDcxLjU5MDEgOTMuNzYgNzEuNTkwMSA5NC4yMjJDNzEuNTkwMSA5NC44MjMzIDcxLjQ3NjQgOTUuNDIxIDcxLjI0OTEgOTYuMDE1QzcxLjAyMTggOTYuNjA5IDcwLjY0NDEgOTcuMjMyMyA3MC4xMTYxIDk3Ljg4NUM3MC42MDc0IDk3LjkyMTcgNzEuMDA3MSA5OC4xMjcgNzEuMzE1MSA5OC41MDFDNzEuNjIzMSA5OC44Njc3IDcxLjgwNjQgOTkuMzIyMyA3MS44NjUxIDk5Ljg2NUM3Mi4yMDk4IDk5Ljg0MyA3Mi42MjA0IDk5Ljc2OTcgNzMuMDk3MSA5OS42NDVDNzMuMTQxMSA5OS42MzAzIDczLjE5MjQgOTkuNjIzIDczLjI1MTEgOTkuNjIzWk03MC4yMTUxIDkzLjc0OUM3MC4wNjg0IDkzLjc0OSA2OS45MDcxIDkzLjk2OSA2OS43MzExIDk0LjQwOUM2OS41NjI0IDk0Ljg0MTcgNjkuNDA0OCA5NS40MzIgNjkuMjU4MSA5Ni4xOEM2OS4xMTE0IDk2LjkyOCA2OS4wMDE0IDk3Ljc0NTcgNjguOTI4MSA5OC42MzNDNjkuNDEyMSA5Ny43NDU3IDY5Ljc5NzEgOTYuOTY0NyA3MC4wODMxIDk2LjI5QzcwLjM3NjQgOTUuNjA4IDcwLjUyMzEgOTUuMDAzIDcwLjUyMzEgOTQuNDc1QzcwLjUyMzEgOTQuMjQwMyA3MC40OTM4IDk0LjA2MDcgNzAuNDM1MSA5My45MzZDNzAuMzgzOCA5My44MTEzIDcwLjMxMDQgOTMuNzQ5IDcwLjIxNTEgOTMuNzQ5Wk02OS42NDMxIDEwMS44ODlDNjkuODcwNCAxMDEuODg5IDcwLjA3MjEgMTAxLjc5NCA3MC4yNDgxIDEwMS42MDNDNzAuNDI0MSAxMDEuNDEyIDcwLjU0MTQgMTAxLjEzNyA3MC42MDAxIDEwMC43NzhDNzAuMzcyOCAxMDAuNjI0IDcwLjE5NjggMTAwLjQyMiA3MC4wNzIxIDEwMC4xNzNDNjkuOTU0OCA5OS45MjM3IDY5Ljg5NjEgOTkuNjU5NyA2OS44OTYxIDk5LjM4MUM2OS44OTYxIDk5LjI3ODMgNjkuOTEwOCA5OS4xMzkgNjkuOTQwMSA5OC45NjNINjkuOTA3MUM2OS42MDY0IDk4Ljk2MyA2OS4zNTM0IDk5LjExMzMgNjkuMTQ4MSA5OS40MTRDNjguOTUwMSA5OS43MDczIDY4Ljg1MTEgMTAwLjEwMyA2OC44NTExIDEwMC42MDJDNjguODUxMSAxMDEuMDIgNjguOTI4MSAxMDEuMzM5IDY5LjA4MjEgMTAxLjU1OUM2OS4yNDM0IDEwMS43NzkgNjkuNDMwNCAxMDEuODg5IDY5LjY0MzEgMTAxLjg4OVpNNzMuNzIwMyAxMDMuMDU1QzczLjM5MDMgMTAzLjA1NSA3My4xMTkgMTAyLjkwNSA3Mi45MDYzIDEwMi42MDRDNzIuNzAxIDEwMi4yOTYgNzIuNTk4MyAxMDEuOTE1IDcyLjU5ODMgMTAxLjQ2QzcyLjU5ODMgMTAwLjkxIDcyLjYzNSAxMDAuNDA4IDcyLjcwODMgOTkuOTUzQzcyLjc4MTYgOTkuNDkxIDcyLjkwMjYgOTkuMDAzMyA3My4wNzEzIDk4LjQ5QzczLjE0NDYgOTguMjcgNzMuMjQ3MyA5OC4xMTIzIDczLjM3OTMgOTguMDE3QzczLjUxMTMgOTcuOTIxNyA3My43MjAzIDk3Ljg3NCA3NC4wMDYzIDk3Ljg3NEM3NC4xNjc2IDk3Ljg3NCA3NC4yNzc2IDk3Ljg5OTcgNzQuMzM2MyA5Ny45NTFDNzQuNDAyMyA5OC4wMDIzIDc0LjQzNTMgOTguMDc5MyA3NC40MzUzIDk4LjE4MkM3NC40MzUzIDk4LjI0MDcgNzQuMzk1IDk4LjQzODcgNzQuMzE0MyA5OC43NzZDNzQuMjQxIDk5LjA0NzMgNzQuMTgyMyA5OS4yOTMgNzQuMTM4MyA5OS41MTNDNzMuOTkxNiAxMDAuMjgzIDczLjkxODMgMTAwLjc5NiA3My45MTgzIDEwMS4wNTNDNzMuOTE4MyAxMDEuMjA3IDczLjkzNjYgMTAxLjMxNyA3My45NzMzIDEwMS4zODNDNzQuMDEgMTAxLjQ0MiA3NC4wNjg2IDEwMS40NzEgNzQuMTQ5MyAxMDEuNDcxQzc0LjI1OTMgMTAxLjQ3MSA3NC4zOTUgMTAxLjM2MSA3NC41NTYzIDEwMS4xNDFDNzQuNzI1IDEwMC45MjEgNzQuOTAxIDEwMC41ODcgNzUuMDg0MyAxMDAuMTRDNzUuMjc1IDk5LjY5MjcgNzUuNDU4MyA5OS4xNDI3IDc1LjYzNDMgOTguNDlDNzUuNjkzIDk4LjI3IDc1Ljc4MSA5OC4xMTIzIDc1Ljg5ODMgOTguMDE3Qzc2LjAyMyA5Ny45MjE3IDc2LjIwNjMgOTcuODc0IDc2LjQ0ODMgOTcuODc0Qzc2LjYxNyA5Ny44NzQgNzYuNzM0MyA5Ny44OTYgNzYuODAwMyA5Ny45NEM3Ni44NjYzIDk3Ljk3NjcgNzYuODk5MyA5OC4wNSA3Ni44OTkzIDk4LjE2Qzc2Ljg5OTMgOTguMzQzMyA3Ni44MDc2IDk4Ljg0NTcgNzYuNjI0MyA5OS42NjdDNzYuNDE5IDEwMC42MDYgNzYuMzE2MyAxMDEuMTg1IDc2LjMxNjMgMTAxLjQwNUM3Ni4zMTYzIDEwMS41NDQgNzYuMzQ1NiAxMDEuNjU0IDc2LjQwNDMgMTAxLjczNUM3Ni40NjMgMTAxLjgwOCA3Ni41NCAxMDEuODQ1IDc2LjYzNTMgMTAxLjg0NUM3Ni43ODIgMTAxLjg0NSA3Ni45NTQzIDEwMS43NTcgNzcuMTUyMyAxMDEuNTgxQzc3LjM1NzYgMTAxLjM5OCA3Ny42MjkgMTAxLjEwNCA3Ny45NjYzIDEwMC43MDFDNzguMDU0MyAxMDAuNTk4IDc4LjE1MzMgMTAwLjU0NyA3OC4yNjMzIDEwMC41NDdDNzguMzU4NiAxMDAuNTQ3IDc4LjQzMiAxMDAuNTkxIDc4LjQ4MzMgMTAwLjY3OUM3OC41NDIgMTAwLjc2NyA3OC41NzEzIDEwMC44ODggNzguNTcxMyAxMDEuMDQyQzc4LjU3MTMgMTAxLjMzNSA3OC41MDE2IDEwMS41NjMgNzguMzYyMyAxMDEuNzI0Qzc4LjA0NyAxMDIuMTEzIDc3LjcwNiAxMDIuNDMyIDc3LjMzOTMgMTAyLjY4MUM3Ni45OCAxMDIuOTMgNzYuNTY5MyAxMDMuMDU1IDc2LjEwNzMgMTAzLjA1NUM3NS43NTUzIDEwMy4wNTUgNzUuNDk1IDEwMi45MTkgNzUuMzI2MyAxMDIuNjQ4Qzc1LjE2NSAxMDIuMzc3IDc1LjA4NDMgMTAxLjk5NSA3NS4wODQzIDEwMS41MDRDNzQuOTU5NiAxMDIuMDAzIDc0Ljc3MjYgMTAyLjM4OCA3NC41MjMzIDEwMi42NTlDNzQuMjc0IDEwMi45MjMgNzQuMDA2MyAxMDMuMDU1IDczLjcyMDMgMTAzLjA1NVpNODIuNTg1NCAxMDAuNTQ3QzgyLjY4MDcgMTAwLjU0NyA4Mi43NTQgMTAwLjU5MSA4Mi44MDU0IDEwMC42NzlDODIuODY0IDEwMC43NjcgODIuODkzNCAxMDAuODg4IDgyLjg5MzQgMTAxLjA0MkM4Mi44OTM0IDEwMS4zMzUgODIuODIzNyAxMDEuNTYzIDgyLjY4NDQgMTAxLjcyNEM4Mi4zNjkgMTAyLjExMyA4Mi4wMjQ0IDEwMi40MzIgODEuNjUwNCAxMDIuNjgxQzgxLjI3NjQgMTAyLjkzIDgwLjg0NzQgMTAzLjA1NSA4MC4zNjM0IDEwMy4wNTVDNzguODY3NCAxMDMuMDU1IDc4LjExOTQgMTAyLjAwMyA3OC4xMTk0IDk5Ljg5OEM3OC4xMTk0IDk5LjU3NTMgNzguMTMwNCA5OS4yNDkgNzguMTUyNCA5OC45MTlINzcuNzIzNEM3Ny41MDM0IDk4LjkxOSA3Ny4zNTMgOTguODc4NyA3Ny4yNzI0IDk4Ljc5OEM3Ny4xOTkgOTguNzE3MyA3Ny4xNjI0IDk4LjU4OSA3Ny4xNjI0IDk4LjQxM0M3Ny4xNjI0IDk4LjAwMjMgNzcuMzI3NCA5Ny43OTcgNzcuNjU3NCA5Ny43OTdINzguMjg0NEM3OC40MDkgOTYuOTkwMyA3OC41OTk3IDk2LjI1MzMgNzguODU2NCA5NS41ODZDNzkuMTEzIDk0LjkxODcgNzkuNDIxIDk0LjM4NyA3OS43ODA0IDkzLjk5MUM4MC4xNDcgOTMuNTk1IDgwLjUzOTQgOTMuMzk3IDgwLjk1NzQgOTMuMzk3QzgxLjI2NTQgOTMuMzk3IDgxLjUwNzQgOTMuNTMyNyA4MS42ODM0IDkzLjgwNEM4MS44NTk0IDk0LjA3NTMgODEuOTQ3NCA5NC40MTYzIDgxLjk0NzQgOTQuODI3QzgxLjk0NzQgOTUuOTYzNyA4MS40NzA3IDk2Ljk1MzcgODAuNTE3NCA5Ny43OTdIODEuNzQ5NEM4MS44NjY3IDk3Ljc5NyA4MS45NTEgOTcuODIyNyA4Mi4wMDI0IDk3Ljg3NEM4Mi4wNTM3IDk3LjkyNTMgODIuMDc5NCA5OC4wMjA3IDgyLjA3OTQgOTguMTZDODIuMDc5NCA5OC42NjYgODEuNjY1IDk4LjkxOSA4MC44MzY0IDk4LjkxOUg3OS40OTQ0Qzc5LjQ3OTcgOTkuMjg1NyA3OS40NzI0IDk5LjU3MTcgNzkuNDcyNCA5OS43NzdDNzkuNDcyNCAxMDAuNTQgNzkuNTYwNCAxMDEuMDc1IDc5LjczNjQgMTAxLjM4M0M3OS45MTk3IDEwMS42OTEgODAuMjA1NyAxMDEuODQ1IDgwLjU5NDQgMTAxLjg0NUM4MC45MDk3IDEwMS44NDUgODEuMTg4NCAxMDEuNzUgODEuNDMwNCAxMDEuNTU5QzgxLjY3MjQgMTAxLjM2OCA4MS45NTg0IDEwMS4wODIgODIuMjg4NCAxMDAuNzAxQzgyLjM3NjQgMTAwLjU5OCA4Mi40NzU0IDEwMC41NDcgODIuNTg1NCAxMDAuNTQ3Wk04MC42NjA0IDk0LjQ1M0M4MC41NTA0IDk0LjQ1MyA4MC40MjU3IDk0LjU5MjMgODAuMjg2NCA5NC44NzFDODAuMTU0NCA5NS4xNDIzIDgwLjAyNiA5NS41MjM3IDc5LjkwMTQgOTYuMDE1Qzc5Ljc4NCA5Ni40OTkgNzkuNjg1IDk3LjAzOCA3OS42MDQ0IDk3LjYzMkM4MC4wMzcgOTcuMjU4IDgwLjM1OTcgOTYuODQgODAuNTcyNCA5Ni4zNzhDODAuNzkyNCA5NS45MDg3IDgwLjkwMjQgOTUuNDgzMyA4MC45MDI0IDk1LjEwMkM4MC45MDI0IDk0LjY2OTMgODAuODIxNyA5NC40NTMgODAuNjYwNCA5NC40NTNaTTgzLjQzODcgOTcuMTQ4QzgzLjEzMDcgOTcuMTQ4IDgyLjg5OTcgOTcuMDc4MyA4Mi43NDU3IDk2LjkzOUM4Mi41OTE3IDk2Ljc5MjMgODIuNTE0NyA5Ni41OTA3IDgyLjUxNDcgOTYuMzM0QzgyLjUxNDcgOTYuMDc3MyA4Mi42MTM3IDk1Ljg2NDcgODIuODExNyA5NS42OTZDODMuMDE3MSA5NS41MiA4My4yNzAxIDk1LjQzMiA4My41NzA3IDk1LjQzMkM4My44NDIxIDk1LjQzMiA4NC4wNjIxIDk1LjQ5OCA4NC4yMzA3IDk1LjYzQzg0LjM5OTQgOTUuNzYyIDg0LjQ4MzcgOTUuOTQ5IDg0LjQ4MzcgOTYuMTkxQzg0LjQ4MzcgOTYuNDg0MyA4NC4zODg0IDk2LjcxOSA4NC4xOTc3IDk2Ljg5NUM4NC4wMDcxIDk3LjA2MzcgODMuNzU0MSA5Ny4xNDggODMuNDM4NyA5Ny4xNDhaTTgzLjM1MDcgMTAzLjA1NUM4Mi44NzQxIDEwMy4wNTUgODIuNTI1NyAxMDIuODg2IDgyLjMwNTcgMTAyLjU0OUM4Mi4wOTMxIDEwMi4yMTIgODEuOTg2NyAxMDEuNzY0IDgxLjk4NjcgMTAxLjIwN0M4MS45ODY3IDEwMC44NzcgODIuMDI3MSAxMDAuNDU1IDgyLjEwNzcgOTkuOTQyQzgyLjE5NTcgOTkuNDIxMyA4Mi4zMDU3IDk4LjkzNzMgODIuNDM3NyA5OC40OUM4Mi41MDM3IDk4LjI1NTMgODIuNTkxNyA5OC4wOTQgODIuNzAxNyA5OC4wMDZDODIuODExNyA5Ny45MTggODIuOTg3NyA5Ny44NzQgODMuMjI5NyA5Ny44NzRDODMuNjAzNyA5Ny44NzQgODMuNzkwNyA5Ny45OTg3IDgzLjc5MDcgOTguMjQ4QzgzLjc5MDcgOTguNDMxMyA4My43MjExIDk4Ljg1NjcgODMuNTgxNyA5OS41MjRDODMuNDA1NyAxMDAuMzMxIDgzLjMxNzcgMTAwLjg3NyA4My4zMTc3IDEwMS4xNjNDODMuMzE3NyAxMDEuMzgzIDgzLjM0NzEgMTAxLjU1MiA4My40MDU3IDEwMS42NjlDODMuNDY0NCAxMDEuNzg2IDgzLjU2MzQgMTAxLjg0NSA4My43MDI3IDEwMS44NDVDODMuODM0NyAxMDEuODQ1IDgzLjk5OTcgMTAxLjc1MyA4NC4xOTc3IDEwMS41N0M4NC4zOTU3IDEwMS4zODcgODQuNjU5NyAxMDEuMDk3IDg0Ljk4OTcgMTAwLjcwMUM4NS4wNzc3IDEwMC41OTggODUuMTc2NyAxMDAuNTQ3IDg1LjI4NjcgMTAwLjU0N0M4NS4zODIxIDEwMC41NDcgODUuNDU1NCAxMDAuNTkxIDg1LjUwNjcgMTAwLjY3OUM4NS41NjU0IDEwMC43NjcgODUuNTk0NyAxMDAuODg4IDg1LjU5NDcgMTAxLjA0MkM4NS41OTQ3IDEwMS4zMzUgODUuNTI1MSAxMDEuNTYzIDg1LjM4NTcgMTAxLjcyNEM4NC42NTk3IDEwMi42MTEgODMuOTgxNCAxMDMuMDU1IDgzLjM1MDcgMTAzLjA1NVpNOTAuMzE0OCA5OS42MjNDOTAuNDEwMSA5OS42MjMgOTAuNDgzNCA5OS42NzA3IDkwLjUzNDggOTkuNzY2QzkwLjU4NjEgOTkuODYxMyA5MC42MTE4IDk5Ljk4MjMgOTAuNjExOCAxMDAuMTI5QzkwLjYxMTggMTAwLjQ4MSA5MC41MDU0IDEwMC42OSA5MC4yOTI4IDEwMC43NTZDODkuODUyOCAxMDAuOTEgODkuMzY4OCAxMDAuOTk4IDg4Ljg0MDggMTAxLjAyQzg4LjcwMTQgMTAxLjYzNiA4OC40MjY0IDEwMi4xMzEgODguMDE1OCAxMDIuNTA1Qzg3LjYwNTEgMTAyLjg3MiA4Ny4xMzk0IDEwMy4wNTUgODYuNjE4OCAxMDMuMDU1Qzg2LjE3ODggMTAzLjA1NSA4NS44MDExIDEwMi45NDkgODUuNDg1OCAxMDIuNzM2Qzg1LjE3NzggMTAyLjUyMyA4NC45NDMxIDEwMi4yNDEgODQuNzgxOCAxMDEuODg5Qzg0LjYyMDQgMTAxLjUzNyA4NC41Mzk4IDEwMS4xNTYgODQuNTM5OCAxMDAuNzQ1Qzg0LjUzOTggMTAwLjE4OCA4NC42NDYxIDk5LjY5MjcgODQuODU4OCA5OS4yNkM4NS4wNzE0IDk4LjgyIDg1LjM2NDggOTguNDc5IDg1LjczODggOTguMjM3Qzg2LjExMjggOTcuOTg3NyA4Ni41MjcxIDk3Ljg2MyA4Ni45ODE4IDk3Ljg2M0M4Ny41MzkxIDk3Ljg2MyA4Ny45ODY0IDk4LjA1NzMgODguMzIzOCA5OC40NDZDODguNjY4NCA5OC44MjczIDg4Ljg3MDEgOTkuMzAwMyA4OC45Mjg4IDk5Ljg2NUM4OS4yNzM0IDk5Ljg0MyA4OS42ODQxIDk5Ljc2OTcgOTAuMTYwOCA5OS42NDVDOTAuMjE5NCA5OS42MzAzIDkwLjI3MDggOTkuNjIzIDkwLjMxNDggOTkuNjIzWk04Ni43MDY4IDEwMS44ODlDODYuOTQxNCAxMDEuODg5IDg3LjE0MzEgMTAxLjc5NCA4Ny4zMTE4IDEwMS42MDNDODcuNDg3OCAxMDEuNDEyIDg3LjYwNTEgMTAxLjEzNyA4Ny42NjM4IDEwMC43NzhDODcuNDM2NCAxMDAuNjI0IDg3LjI2MDQgMTAwLjQyMiA4Ny4xMzU4IDEwMC4xNzNDODcuMDE4NCA5OS45MjM3IDg2Ljk1OTggOTkuNjU5NyA4Ni45NTk4IDk5LjM4MUM4Ni45NTk4IDk5LjI2MzcgODYuOTcwOCA5OS4xNDYzIDg2Ljk5MjggOTkuMDI5SDg2LjkzNzhDODYuNjQ0NCA5OS4wMjkgODYuMzk4OCA5OS4xNzIgODYuMjAwOCA5OS40NThDODYuMDEwMSA5OS43MzY3IDg1LjkxNDggMTAwLjEzMyA4NS45MTQ4IDEwMC42NDZDODUuOTE0OCAxMDEuMDQ5IDg1Ljk5MTggMTAxLjM1NyA4Ni4xNDU4IDEwMS41N0M4Ni4zMDcxIDEwMS43ODMgODYuNDk0MSAxMDEuODg5IDg2LjcwNjggMTAxLjg4OVpNOTAuNDQ4NiAxMDMuMDU1QzkwLjE3IDEwMy4wNTUgODkuOTcyIDEwMi45MDggODkuODU0NiAxMDIuNjE1Qzg5Ljc0NDYgMTAyLjMyMiA4OS42ODk2IDEwMS44NTIgODkuNjg5NiAxMDEuMjA3Qzg5LjY4OTYgMTAwLjI1NCA4OS44MjUzIDk5LjM0OCA5MC4wOTY2IDk4LjQ5QzkwLjE2MjYgOTguMjc3MyA5MC4yNjkgOTguMTIzMyA5MC40MTU2IDk4LjAyOEM5MC41Njk2IDk3LjkyNTMgOTAuNzgyMyA5Ny44NzQgOTEuMDUzNiA5Ny44NzRDOTEuMjAwMyA5Ny44NzQgOTEuMzAzIDk3Ljg5MjMgOTEuMzYxNiA5Ny45MjlDOTEuNDIwMyA5Ny45NjU3IDkxLjQ0OTYgOTguMDM1MyA5MS40NDk2IDk4LjEzOEM5MS40NDk2IDk4LjI1NTMgOTEuMzk0NiA5OC41MTkzIDkxLjI4NDYgOTguOTNDOTEuMjExMyA5OS4yMjMzIDkxLjE1MjYgOTkuNDggOTEuMTA4NiA5OS43QzkxLjA2NDYgOTkuOTIgOTEuMDI4IDEwMC4xOTEgOTAuOTk4NiAxMDAuNTE0QzkxLjI0MDYgOTkuODgzMyA5MS41MTIgOTkuMzcgOTEuODEyNiA5OC45NzRDOTIuMTEzMyA5OC41NzggOTIuNDA2NiA5OC4yOTU3IDkyLjY5MjYgOTguMTI3QzkyLjk4NiA5Ny45NTgzIDkzLjI1MzYgOTcuODc0IDkzLjQ5NTYgOTcuODc0QzkzLjk3MjMgOTcuODc0IDk0LjIxMDYgOTguMTEyMyA5NC4yMTA2IDk4LjU4OUM5NC4yMTA2IDk4Ljg3NSA5NC4xMyA5OS4zOTIgOTMuOTY4NiAxMDAuMTRDOTMuODI5MyAxMDAuNzc4IDkzLjc1OTYgMTAxLjIgOTMuNzU5NiAxMDEuNDA1QzkzLjc1OTYgMTAxLjY5OCA5My44NjYgMTAxLjg0NSA5NC4wNzg2IDEwMS44NDVDOTQuMjI1MyAxMDEuODQ1IDk0LjM5NzYgMTAxLjc1NyA5NC41OTU2IDEwMS41ODFDOTQuODAxIDEwMS4zOTggOTUuMDcyMyAxMDEuMTA0IDk1LjQwOTYgMTAwLjcwMUM5NS40OTc2IDEwMC41OTggOTUuNTk2NiAxMDAuNTQ3IDk1LjcwNjYgMTAwLjU0N0M5NS44MDIgMTAwLjU0NyA5NS44NzUzIDEwMC41OTEgOTUuOTI2NiAxMDAuNjc5Qzk1Ljk4NTMgMTAwLjc2NyA5Ni4wMTQ2IDEwMC44ODggOTYuMDE0NiAxMDEuMDQyQzk2LjAxNDYgMTAxLjMzNSA5NS45NDUgMTAxLjU2MyA5NS44MDU2IDEwMS43MjRDOTUuNDkwMyAxMDIuMTEzIDk1LjE0OTMgMTAyLjQzMiA5NC43ODI2IDEwMi42ODFDOTQuNDIzMyAxMDIuOTMgOTQuMDEyNiAxMDMuMDU1IDkzLjU1MDYgMTAzLjA1NUM5My4xNzY2IDEwMy4wNTUgOTIuODk0MyAxMDIuOTQ5IDkyLjcwMzYgMTAyLjczNkM5Mi41MTMgMTAyLjUxNiA5Mi40MTc2IDEwMi4yMDEgOTIuNDE3NiAxMDEuNzlDOTIuNDE3NiAxMDEuNTg1IDkyLjQ2OSAxMDEuMjE4IDkyLjU3MTYgMTAwLjY5QzkyLjY2NyAxMDAuMjI4IDkyLjcxNDYgOTkuOTA5IDkyLjcxNDYgOTkuNzMzQzkyLjcxNDYgOTkuNjE1NyA5Mi42NzQzIDk5LjU1NyA5Mi41OTM2IDk5LjU1N0M5Mi40OTgzIDk5LjU1NyA5Mi4zNjI2IDk5LjY4MTcgOTIuMTg2NiA5OS45MzFDOTIuMDE4IDEwMC4xNzMgOTEuODQyIDEwMC40OTYgOTEuNjU4NiAxMDAuODk5QzkxLjQ4MjYgMTAxLjMwMiA5MS4zMzk2IDEwMS43MjggOTEuMjI5NiAxMDIuMTc1QzkxLjE0OSAxMDIuNTIgOTEuMDUzNiAxMDIuNzU0IDkwLjk0MzYgMTAyLjg3OUM5MC44NDEgMTAyLjk5NiA5MC42NzYgMTAzLjA1NSA5MC40NDg2IDEwMy4wNTVaTTk3LjE3MDcgMTAzLjI5N0M5Ni43ODkzIDEwMy4yOTcgOTYuNDk2IDEwMy4yMDkgOTYuMjkwNyAxMDMuMDMzQzk2LjA5MjcgMTAyLjg1NyA5NS45OTM3IDEwMi42NTkgOTUuOTkzNyAxMDIuNDM5Qzk1Ljk5MzcgMTAyLjI0OCA5Ni4wNjMzIDEwMi4wODMgOTYuMjAyNyAxMDEuOTQ0Qzk2LjM0MiAxMDEuODA1IDk2LjU0NzMgMTAxLjczNSA5Ni44MTg3IDEwMS43MzVDOTYuOTE0IDEwMS43MzUgOTcuMDI0IDEwMS43NDYgOTcuMTQ4NyAxMDEuNzY4Qzk3LjI4MDcgMTAxLjc4MyA5Ny4zNzk3IDEwMS43OTQgOTcuNDQ1NyAxMDEuODAxQzk3LjQzODMgMTAxLjYxIDk3LjM5NDMgMTAxLjQzMSA5Ny4zMTM3IDEwMS4yNjJDOTcuMjQwMyAxMDEuMDkzIDk3LjE0NSAxMDAuOTMyIDk3LjAyNzcgMTAwLjc3OEM5Ni45MTAzIDEwMC42MTcgOTYuODAwMyAxMDAuNDc3IDk2LjY5NzcgMTAwLjM2Qzk2LjQ3MDMgMTAwLjc5MyA5Ni4yNDMgMTAxLjE1MiA5Ni4wMTU3IDEwMS40MzhDOTUuNzk1NyAxMDEuNzI0IDk1LjU1MzcgMTAxLjk5NSA5NS4yODk3IDEwMi4yNTJDOTUuMTU3NyAxMDIuMzg0IDk1LjAxODMgMTAyLjQ1IDk0Ljg3MTcgMTAyLjQ1Qzk0Ljc1NDMgMTAyLjQ1IDk0LjY1OSAxMDIuNDEgOTQuNTg1NyAxMDIuMzI5Qzk0LjUxMjMgMTAyLjI0MSA5NC40NzU3IDEwMi4xMzUgOTQuNDc1NyAxMDIuMDFDOTQuNDc1NyAxMDEuODYzIDk0LjUyNyAxMDEuNzI4IDk0LjYyOTcgMTAxLjYwM0w5NC43NzI3IDEwMS40MjdDOTUuMTc2IDEwMC45MjggOTUuNDgwMyAxMDAuNTE4IDk1LjY4NTcgMTAwLjE5NUM5NS44MTc3IDk5Ljk4MjMgOTUuOTQ5NyA5OS43MjkzIDk2LjA4MTcgOTkuNDM2Qzk2LjIyMSA5OS4xNDI3IDk2LjQwMDcgOTguNzQzIDk2LjYyMDcgOTguMjM3Qzk2Ljc2IDk3LjkxNDMgOTcuMDQ5NyA5Ny43NTMgOTcuNDg5NyA5Ny43NTNDOTcuNjk1IDk3Ljc1MyA5Ny44MzggOTcuNzcxMyA5Ny45MTg3IDk3LjgwOEM5Ny45OTkzIDk3Ljg0NDcgOTguMDM5NyA5Ny45MDMzIDk4LjAzOTcgOTcuOTg0Qzk4LjAzOTcgOTguMDI4IDk4LjAyNSA5OC4wOTc3IDk3Ljk5NTcgOTguMTkzQzk3Ljk2NjMgOTguMjg4MyA5Ny45MjYgOTguMzgzNyA5Ny44NzQ3IDk4LjQ3OUM5Ny43NDI3IDk4Ljc0MyA5Ny42NzY3IDk4Ljk2NjcgOTcuNjc2NyA5OS4xNUM5Ny42NzY3IDk5LjI2IDk3LjcxMzMgOTkuMzgxIDk3Ljc4NjcgOTkuNTEzQzk3Ljg2NzMgOTkuNjQ1IDk3Ljk4ODMgOTkuODEgOTguMTQ5NyAxMDAuMDA4Qzk4LjM4NDMgMTAwLjMxNiA5OC41NjAzIDEwMC41OCA5OC42Nzc3IDEwMC44Qzk4LjgwMjMgMTAxLjAxMyA5OC44NjQ3IDEwMS4yNDcgOTguODY0NyAxMDEuNTA0Qzk4Ljg2NDcgMTAxLjgxMiA5OC43OTEzIDEwMi4xMDUgOTguNjQ0NyAxMDIuMzg0Qzk4LjUwNTMgMTAyLjY1NSA5OC4zMDczIDEwMi44NzUgOTguMDUwNyAxMDMuMDQ0Qzk3Ljc5NCAxMDMuMjEzIDk3LjUwMDcgMTAzLjI5NyA5Ny4xNzA3IDEwMy4yOTdaIiBmaWxsPSIjRTNCMzY1Ii8+CjxjaXJjbGUgY3g9IjU3LjUiIGN5PSI1MS41IiByPSIzNiIgc3Ryb2tlPSIjQTEyNTY4IiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg=="
    )
    .attr("width", 114)
    .attr("height", 121);

  if (category == "lt10") {
    let text = svg
      .append("text")
      .attr("fill", "#e3b365")
      .attr("x", 55)
      .attr("y", 60)
      .attr("font-size", "32px")
      .text(`${contri}`)
      .style("font-family", `${font}`)
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
      .style("font-family", `${font}`)
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
      .style("font-family", `${font}`)
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
      .style("font-family", `${font}`)
      .style("text-anchor", "middle");
  }
  fs.writeFileSync("out.svg", body.html());
  return "/out.svg";
}

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

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

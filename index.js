// var Jimp = require("jimp");
// var uuid = require("uuid");
// console.log("Hello");

// Jimp.read('lenna.png', (err, lenna) => {
//     if (err) throw err;
//     lenna
//       .resize(256, 256) // resize
//       .quality(60) // set JPEG quality
//       .greyscale() // set greyscale
//       .write('lena-small-bw.jpg'); // save
//   });

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

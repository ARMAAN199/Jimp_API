var Jimp = require("jimp");
console.log("Hello");

// Jimp.read('lenna.png', (err, lenna) => {
//     if (err) throw err;
//     lenna
//       .resize(256, 256) // resize
//       .quality(60) // set JPEG quality
//       .greyscale() // set greyscale
//       .write('lena-small-bw.jpg'); // save
//   });

Jimp.read("./imgs.png")
  .then((image) => {
    Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then((font) => {
      image
        .print(
          font,
          10,
          10,
          "Hello world that wraps!",
          50,
          (err, image, { x, y }) => {
            image.print(font, x, y + 20, "More text on another line", 50);
          }
        )
        .write("output.jpg");
    });
  })
  .catch((err) => {
    console.log("Image could not be read (sad face emoji)");
  });

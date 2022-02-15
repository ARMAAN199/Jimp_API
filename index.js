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

Jimp.read("./img.png")
  .then((image) => {
    return image
      .resize(256, 256) // resize
      .quality(60) // set JPEG quality
      .greyscale() // set greyscale
      .write("lena-small-bw.jpg");
  })
  .catch((err) => {
    console.log("Image could not be read (sad face emoji)");
  });

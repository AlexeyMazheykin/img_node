const fs = require ('fs');
const sharp = require('sharp');
let Color = require('color');
let color = Color('#7743CE').alpha(0.5).lighten(0.5);

let images = fs.readdirSync('./images');

function src2 (src) {
if (src === ".DS_Store") {
    return false
}
    return `./images_min/${src}`;
}

images.forEach(el => {
    sharp(`./images/${el}`)
        .resize(800, 600)
        // .rotate(30, {
        //     background: color
        // })
        .stats()
        .toFile(`./images_min/${el}`, (err, info) => {console.log(err)});

})

let imagesMin = fs.readdirSync('./images_min');
console.log(imagesMin);
let imagesMinPathTrue  = imagesMin.map(src2).filter(el=>el);




fs.writeFile('images.json', JSON.stringify(imagesMinPathTrue), err => {
    console.log(err);
})




let image = document.querySelector(".viewer_image");
console.log(image);

let link1 = document.querySelector(".link1");
console.log(link1);

let link2 = document.querySelector(".link2");
console.log(link2);

let link3 = document.querySelector(".link3");
console.log(link3);

let link4 = document.querySelector(".link4");
console.log(link4);

link1.addEventListener('click', function(){
    image.src = './img/sj100 top.jpg';
});

link2.addEventListener('click', function(){
    image.src = './img/sj100 air.jpg';
});

link3.addEventListener('click', function(){
    image.src = './img/sj100 front.jpg';
});

link4.addEventListener('click', function(){
    image.src = './img/sj100 left.jpg';
});
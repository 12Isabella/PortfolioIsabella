console.log("Hello");

let folder1 = [
  `<img
    src="images/memos/arraysElementExistance/1.jpg"
    class="image img-fluid"
    alt="img1"
  />`,
  `<img
    src="images/memos/arraysElementExistance/2.jpg"
    class="image img-fluid"
    alt="img2"
  />`,
  `<img
    src="images/memos/arraysElementExistance/3.jpg"
    class="image img-fluid"
    alt="img3"
  />`,
];

let memonFolder1 = document.querySelector("#memoFolder1");

let memoHTML = `<div class="row">`;

folder1.forEach((image) => {
  memoHTML = memoHTML + image;
});

memonFolder1.innerHTML = memoHTML;

//this could be in an extra folder, then I can try to run the images in each folder through a forEach...
//is this really better than having all the images hardcoded in the html thogh??

console.log("Hello");

let folder1 = [{ name: "1" }, { name: "2" }, { name: "3" }];

let memonFolder1 = document.querySelector("#memoFolder1");

let memoHTML = `<div class="row"><div class="col-md picture-bg">`;

folder1.forEach((image) => {
  memoHTML =
    memoHTML +
    `<img
    src="images/memos/arraysElementExistance/${image.name}.jpg"
    class="image img-fluid"
  />`;
});

memoFolder1.innerHTML = memoHTML + `</div>`;

//this could be in an extra folder, then I can try to run the images in each folder through a forEach...
//is this really better than having all the images hardcoded in the html thogh??

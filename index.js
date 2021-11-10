let folder7 = [{ name: "1" }, { name: "2" }, { name: "3" }];

let memoFolder7 = document.querySelector("#memoFolder7");

let memoHTML7 = `<div class="row"><div class="col-md picture-bg">`;

folder7.forEach((image) => {
  memoHTML7 =
    memoHTML7 +
    `<img
    src="images/memos/arraysElementExistance/${image.name}.jpg"
    class="image img-fluid"
  />`;
});

memoFolder7.innerHTML = memoHTML7 + `</div>`;

let folder6 = [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }];

let memoFolder6 = document.querySelector("#memoFolder6");

let memoHTML6 = `<div class="row"><div class="col-md picture-bg">`;

folder6.forEach((image) => {
  memoHTML6 =
    memoHTML6 +
    `<img
    src="images/memos/thisKeyword/${image.name}.jpg"
    class="image img-fluid"
  />`;
});

memoFolder6.innerHTML = memoHTML6 + `</div>`;

let folder5 = [{ name: "1" }, { name: "2" }, { name: "3" }];

let memoFolder5 = document.querySelector("#memoFolder5");

let memoHTML5 = `<div class="row"><div class="col-md picture-bg">`;

folder5.forEach((image) => {
  memoHTML5 =
    memoHTML5 +
    `<img
    src="images/memos/objects/${image.name}.jpg"
    class="image img-fluid"
  />`;
});

memoFolder5.innerHTML = memoHTML5 + `</div>`;

let folder4 = [{ name: "1" }, { name: "2" }, { name: "3" }];

let memoFolder4 = document.querySelector("#memoFolder4");

let memoHTML4 = `<div class="row"><div class="col-md picture-bg">`;

folder4.forEach((image) => {
  memoHTML4 =
    memoHTML4 +
    `<img
    src="images/memos/mediaQueries/${image.name}.jpg"
    class="image img-fluid"
  />`;
});

memoFolder4.innerHTML = memoHTML4 + `</div>`;

let folder3 = [{ name: "1" }, { name: "2" }];

let memoFolder3 = document.querySelector("#memoFolder3");

let memoHTML3 = `<div class="row"><div class="col-md picture-bg">`;

folder3.forEach((image) => {
  memoHTML3 =
    memoHTML3 +
    `<img
    src="images/memos/responsiveGrids/${image.name}.jpg"
    class="image img-fluid"
  />`;
});

memoFolder3.innerHTML = memoHTML3 + `</div>`;

let folder2 = [{ name: "1" }, { name: "2" }];

let memofolder2 = document.querySelector("#memoFolder2");

let memoHTML2 = `<div class="row"><div class="col-md picture-bg">`;

folder2.forEach((image) => {
  memoHTML2 =
    memoHTML2 +
    `<img
    src="images/memos/SEO/${image.name}.jpg"
    class="image img-fluid"
  />`;
});

memoFolder2.innerHTML = memoHTML2 + `</div>`;

let folder1 = [{ name: "1" }, { name: "2" }];

let memoFolder1 = document.querySelector("#memoFolder1");

let memoHTML1 = `<div class="row"><div class="col-md picture-bg">`;

folder1.forEach((image) => {
  memoHTML1 =
    memoHTML1 +
    `<img
    src="images/memos/staticWebsite/${image.name}.jpg"
    class="image img-fluid"
  />`;
});

memoFolder1.innerHTML = memoHTML1 + `</div>`;

const btn1 = document.querySelector(".btnOne");
const btn2 = document.querySelector(".btnTwo");
const btn3 = document.querySelector(".btnThree");
const vdGroup1 = document.querySelector(".first");
const vdGroup2 = document.querySelector(".second");
const vdGroup3 = document.querySelector(".third");
btn1.addEventListener("click", () => {
  // if(vdGroup1.style.display=='block'){
  //     vdGroup1.style.display='none';
  // }
  console.log("hello");
  if (vdGroup2.sytle.display == "block" && vdGroup3.style.display == "block") {
    vdGroup1.style.display = "none";
    vdGroup2.style.display = "none";
  }
  vdGroup1.classList.toggle("show");
  //   vdGroup1.classList.toggle("show");
});
btn2.addEventListener("click", () => {
  console.log("2");
  //   if (vdGroup1.sytle.display == "block" && vdGroup3.style.display == "block") {
  //     vdGroup1.style.display = "none";
  //     vdGroup2.style.display = "none";
  //   }
  //   vdGroup2.style.display = "none";
  vdGroup2.classList.toggle("show");
  //   vdGroup2.style.display = "block";
});
btn3.addEventListener("click", () => {
  console.log("3");
  //   if (vdGroup1.sytle.display == "block" && vdGroup2.style.display == "block") {
  //     vdGroup1.style.display = "none";
  //     vdGroup2.style.display = "none";
  //   }
  vdGroup3.classList.toggle("show");
});

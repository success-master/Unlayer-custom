var divsToHide = Array.from(
  (document.getElementsByClassName("u_row") as HTMLCollectionOf<HTMLElement>)
);
console.log("divsToHide: ", divsToHide);
for (var i = 0; i < divsToHide.length; i++) {

    divsToHide[i].style.backgroundColor = "red";
}

let container = document.getElementsByClassName("u_row");
let containerArray = Array.prototype.slice.call(container);
console.log("container: ", containerArray);
containerArray.forEach(element => {
    console.log("elm: ", element);
    element.style.backgroundColor = 'red';
});

// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
// console.log(document.domain);
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
// headerTitle.textContent='hello';
headerTitle.innerText='sahil';
headerTitle.innerHTML='<h3>sahil</h3>';
headerTitle.style.color='red';
headerTitle.style.borderBottom ='solid 3px #000';
// GET ELEMENTS BY CLASS NAME
var item = document.getElementsByClassName('list-group-item');
console.log(item);
console.log(item[2]);
item[1].textContent='sahil';
item[2].style.fontweight='bold';
item[1].style.backgroundcolor='red';
 for(let i=0;i<item.length;i++){
    item[i].style.backgroundcolor='green';
 }
 //GET ELEMNET BY TAG NAME;
 

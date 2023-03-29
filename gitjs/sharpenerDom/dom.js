var form = document.getElementById('addForm');
var item = document.getElementById('items');
var itemList= document.getElementsByClassName('list-group-item');
var filter = document.getElementById('filter');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
item.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem1 = document.getElementById('item1').value;
  var newItem2 = document.getElementById('item2').value;
  let userDetail={
    name1: newItem1,
    name2: newItem2
  };
  let myObj_serialized= JSON.stringify(userDetail);
  localStorage.setItem('userDetail' , myObj_serialized);
  let myObj_Deserialized=JSON.parse(localStorage.getItem('userDetail'));
  

    // localStorage.setItem('item1',newItem1);
    // localStorage.setItem('item2', newItem2);
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem1));
  li.appendChild(document.createTextNode(" "+newItem2));

  //adding edit button to everyonein list

 var editBtn = document.createElement('button');
editBtn.className = 'edit-button';
// Append text node
  editBtn.innerHtml='Edit';
  //giving name to editbutton
 editBtn.appendChild(document.createTextNode('Edit'));
  // Append button to li
  li.appendChild(editBtn);
  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);
  //adding edit button to everyonein list

  // Append li to list
  item.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      item.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  
  // Get list
  var itemsl = item.getElementsByTagName('li');
  
  // Convert to an array
  Array.from(itemsl).forEach(function(item){
    var itemName1 = item.firstChild.textContent;
    var itemName2 = item.childNode[1].textContent;
    
     if(itemName1.toLowerCase().indexOf(text) != -1||itemName2.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
      

    } else {
      item.style.display = 'none';
      
    }
  });
}


  



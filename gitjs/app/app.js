let userName=document.querySelector('#name');
let userEmailid=document.querySelector('#Emailid');
let userPhone=document.querySelector('#phoneno');
let item = document.querySelector('.showing-list');
let submit = document.querySelector('#sub_btn');
 let edit = document.querySelector('.edit-button');
 let form= document.querySelector('.container');
item.addEventListener('click', removeItem);
submit.addEventListener('click', storeUserDetails );
function storeUserDetails(e){
    e.preventDefault();
     // Get input value
  let newItem1 = document.getElementById('name').value;
  var newItem2 = document.getElementById('Emailid').value;
  let newItem3 = document.getElementById('phoneno').value;
  let userDetail={
     userName: newItem1,
    userEmail:newItem2,
    userPhone:newItem3
  
  };
  let myObj_serialized= JSON.stringify(userDetail);
  localStorage.setItem(newItem2 , myObj_serialized);
  let myObj_Deserialized=JSON.parse(localStorage.getItem('userDetail'));
  showUserOnScreen(userDetail);
  
 

}
  function showUserOnScreen(userDetail){
    
    const parentElement = document.querySelector('.showing-list');
    const childElement = document.createElement('li');
    childElement.textContent=userDetail.userName + " " + userDetail.userEmail + " " + userDetail.userPhone;
    parentElement.appendChild(childElement);
    // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode(" "+'delete'));

  // Append button to li
  childElement.appendChild(deleteBtn);
  
deleteBtn. onclick = ()=>{
    localStorage.removeItem( userDetail.userEmail);
}

//adding edit button to everyonein list

 var editBtn = document.createElement('button');
 editBtn.className = 'edit-button';

  //giving name to editbutton
 editBtn.appendChild(document.createTextNode('Edit'));
  // Append button to li
  childElement.appendChild(editBtn);
 editBtn.onclick =()=>{
     localStorage.removeItem( userDetail.userEmail);
     
 }
  }

  function removeItem(e)
  {
     if(e.target.classList.contains('delete')|| e.target.classList.contains('edit-button'))
     {
       var li = e.target.parentElement;
       item.removeChild(li);
       
     
     
     }




     }
  
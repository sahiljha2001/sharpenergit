let userName=document.querySelector('#name');
let userEmail=document.querySelector('#Emailid');
let userPhone=document.querySelector('#phoneno');
let item = document.querySelector('.showing-list');
let submit = document.querySelector('#sub_btn');
 
item.addEventListener('click', removeItem);
submit.addEventListener('click', storeUserDetails );
function storeUserDetails(e){
    e.preventDefault();
    // Get input value
  let newItem1 = document.getElementById('name').value;
  let newItem2 = document.getElementById('Emailid').value;
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
  deleteBtn.appendChild(document.createTextNode('delete'));

  // Append button to li
  childElement.appendChild(deleteBtn);
  




  }

  function removeItem(e){
     if(e.target.classList.contains('delete'))
     {
       var li = e.target.parentElement;
      item.removeChild(li);
    }  






     }
  
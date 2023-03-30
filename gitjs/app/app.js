let userName=document.querySelector('#name');
let userEmail=document.querySelector('#Emailid');
let userPhone=document.querySelector('#phoneno');

let submit = document.querySelector('#sub_btn');
submit.addEventListener('click', storeUserDetails  );
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
}

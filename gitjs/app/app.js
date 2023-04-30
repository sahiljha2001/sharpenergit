//Fetching each method by document .querySelector method
let userName = document.querySelector("#name");
let userEmailid = document.querySelector("#Emailid");
let userPhone = document.querySelector("#phoneno");
let item = document.querySelector(".showing-list");
let submit = document.querySelector("#sub_btn");
let edit = document.querySelector(".edit-button");
let form = document.querySelector(".container");
//Adding eventListener
item.addEventListener("click", removeItem);
submit.addEventListener("click", storeUserDetails);
function storeUserDetails(e) {
  e.preventDefault();
  // Get input value
  let newItem1 = document.getElementById("name").value;
  var newItem2 = document.getElementById("Emailid").value;
  let newItem3 = document.getElementById("phoneno").value;
  let userDetail = {
    Name: newItem1,
    Email: newItem2,
    Phone: newItem3,
  };

  const data = axios
    .post(
      "https://crudcrud.com/api/dff7d296724040afbafab310d4c45be0/appointmentData",
      userDetail
    )
    .then((response) => {
      showUserOnScreen(response.data);
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
 
}
window.addEventListener("DOMContentLoaded", () => {
  const data = axios
    .get(
      "https://crudcrud.com/api/dff7d296724040afbafab310d4c45be0/appointmentData"
    )
    .then((respone) => {
      console.log(respone.data);

      for (var i = 0; i < respone.data.length; i++) {
        showUserOnScreen(respone.data[i]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  

  console.log(data);
});
function showUserOnScreen(userDetail) {
  const parentElement = document.querySelector(".showing-list");
  const childElement = document.createElement("li");
  childElement.textContent =
    userDetail.Name + " " + userDetail.Email + " " + userDetail.Phone;
  parentElement.appendChild(childElement);
  // Create del button element
  var deleteBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // Append text node
  deleteBtn.appendChild(document.createTextNode(" " + "delete"));

  // Append button to li
  childElement.appendChild(deleteBtn);

  deleteBtn.onclick = () => {
    localStorage.removeItem(userDetail.Email);
  };

  //adding edit button to everyonein list

  var editBtn = document.createElement("button");
  editBtn.className = "edit-button";

  //giving name to editbutton
  editBtn.appendChild(document.createTextNode("Edit"));
  // Append button to li
  childElement.appendChild(editBtn);
  editBtn.onclick = () => {
    localStorage.removeItem(userDetail.Email);
    parentElement.removeChild(childElement);
    document.getElementById("name").value = userDetail.Name;
    document.getElementById("Emailid").value = userDetail.Email;
    document.getElementById("phoneno").value = userDetail.Phone;
  };
}

function removeItem(e) {
  if (
    e.target.classList.contains("delete") ||
    e.target.classList.contains("edit-button")
  ) {
    var li = e.target.parentElement;
    item.removeChild(li);
  }
}

/*
<div class="user">
  <div class="profileImage">
    <img
      src="https://robohash.org/hicveldicta.png?size=50x50&set=set1" />
  </div>
  <div class="userInfo">
    <div class="name">John Doe</div>
    <div class="email">atuny0@sohu.com</div>
  </div>
</div>
*/

function createUserListElement(userName) {
  let userElement = document.createElement("div");
  userElement.className = "user";

  let profileImageElement = document.createElement("div");
  profileImageElement.className = "profileImage";

  let imageElement = document.createElement("img");
  imageElement.setAttribute(
    "src",
    "https://robohash.org/hicveldicta.png?size=50x50&set=set1"
  );

  let userInfoElement = document.createElement("div");
  userInfoElement.className = "userInfo";

  let nameElement = document.createElement("div");
  nameElement.className = "name";
  nameElement.innerText = userName;

  let emailElement = document.createElement("div");
  emailElement.className = "email";
  emailElement.innerText = "someemail@some.com";

  // Set up the hierarchy
  userElement.appendChild(profileImageElement);
  profileImageElement.appendChild(imageElement);
  userElement.appendChild(userInfoElement);
  userInfoElement.appendChild(nameElement);
  userInfoElement.appendChild(emailElement);

  // Add the user element to the DOM
  let usersList = document.querySelector(".users");
  usersList.appendChild(userElement);

  console.log("createUSerListElement finished");
}

createUserListElement("John");
createUserListElement("Max");
createUserListElement("Neville");
createUserListElement("Susan");
createUserListElement("Sally");

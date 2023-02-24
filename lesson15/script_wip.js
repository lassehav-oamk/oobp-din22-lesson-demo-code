function createUserListElement(userData) {
  let userElement = document.createElement("div");
  userElement.className = "user";
  userElement.addEventListener("click", () => createUserDetailView(userData));

  let profileImageElement = document.createElement("div");
  profileImageElement.className = "profileImage";

  let imageElement = document.createElement("img");
  imageElement.setAttribute("src", userData.image);

  let userInfoElement = document.createElement("div");
  userInfoElement.className = "userInfo";

  let nameElement = document.createElement("div");
  nameElement.className = "name";
  nameElement.innerText = userData.firstName + " " + userData.lastName;

  let emailElement = document.createElement("div");
  emailElement.className = "email";
  emailElement.innerText = userData.email;

  // Set up the hierarchy
  userElement.appendChild(profileImageElement);
  profileImageElement.appendChild(imageElement);
  userElement.appendChild(userInfoElement);
  userInfoElement.appendChild(nameElement);
  userInfoElement.appendChild(emailElement);

  console.log("createUserListElement finished");

  return userElement;
}

function fetchUserDataAndCreateUserListView() {
  // Clear the DOM from any existing elements
  document.querySelector("body").innerHTML = "";

  // Create users div
  let usersElement = document.createElement("div");
  usersElement.className = "users";
  document.querySelector("body").appendChild(usersElement);

  // Fetch the data from the API
  fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => {
      // Print out the current data object to the console
      console.log(data);

      // Loop through the users array and create a user list element for each user
      for (let i = 0; i < data.users.length; i++) {
        let thisUser = data.users[i];
        // Here I provide the entire user object as an argument, but you can also provide the individual properties
        // I prodide the entire user object as an argument, because I want
        // to use the user object in the click event handler as well and the click event handler
        // is defined in the createUserListElement function
        const userElement = createUserListElement(thisUser);

        // Add the user element to the DOM
        usersElement.appendChild(userElement);
      }
    })
    .catch((error) => {
      console.log("Error: " + error);
      // Create some UI elements to show the error for the user
    });
}

function createUserDetailView(userData) {
  // First destroy the currently visible elements from the DOM
  // -> Select the element which you want to destroy and then set its innerHTML to an empty string.
  document.querySelector("body").innerHTML = "";

  // Then create the new elements with JS required to show the user details
  // The user details UI is visible in HTML, you can use that as an example
  const userDetailElement = document.createElement("div");
  userDetailElement.className = "userDetails";
  const profileImageElement = document.createElement("div");
  profileImageElement.className = "profileImage";
  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", userData.image);

  const userInfoElement = document.createElement("div");
  userInfoElement.className = "userInfo";
  const tableElement = document.createElement("table");

  const trElement1 = createDetailTrElement(
    "Name",
    userData.firstName + " " + userData.lastName
  );
  const trElement2 = createDetailTrElement("Email", userData.email);
  const trElement3 = createDetailTrElement("Phone", userData.phone);
  const trElement4 = createDetailTrElement(
    "Address",
    `${userData.address.address}, ${userData.address.postalCode}, ${userData.address.city}`
  );
  const trElement5 = createDetailTrElement("Company", userData.company.name);

  tableElement.appendChild(trElement1);
  tableElement.appendChild(trElement2);
  tableElement.appendChild(trElement3);
  tableElement.appendChild(trElement4);
  tableElement.appendChild(trElement5);

  userDetailElement.appendChild(profileImageElement);
  profileImageElement.appendChild(imageElement);

  userDetailElement.appendChild(userInfoElement);
  userInfoElement.appendChild(tableElement);

  document.querySelector("body").appendChild(userDetailElement);

  // Create back button
  const backButton = document.createElement("button");
  backButton.innerText = "Back";
  backButton.addEventListener("click", () => {
    // Change to list view
    fetchUserDataAndCreateUserListView();
  });

  // Add back button to DOM
  document.querySelector("body").appendChild(backButton);
}

function createDetailTrElement(key, value) {
  const trElement = document.createElement("tr");
  const tdElement1 = document.createElement("td");
  tdElement1.innerText = key;
  const tdElement2 = document.createElement("td");
  tdElement2.innerText = value;

  trElement.appendChild(tdElement1);
  trElement.appendChild(tdElement2);

  return trElement;
}

fetchUserDataAndCreateUserListView();

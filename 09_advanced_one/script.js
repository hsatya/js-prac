const container = document.querySelector(".main-body");
const requestUrl = "https://api.github.com/users";
fetchData(requestUrl);

function createCard(data) {
  console.log(data);
  const outerDiv = document.createElement("div");
  outerDiv.className = "card";
  outerDiv.style.width = "18 rem";

  const image = document.createElement("img");
  image.className = "card-img-top img-thumbnail";
  image.src = data.avatar_url;
  image.alt = "profile pic";
  outerDiv.appendChild(image);

  const innerDiv = document.createElement("div");
  innerDiv.className = "card-body";
  const h5 = document.createElement("h5");
  h5.className = "card-title";
  let textNode = document.createTextNode(data.login);
  h5.appendChild(textNode);
  innerDiv.appendChild(h5);

  const button = document.createElement("button");
  button.className = "btn btn-primary";
  textNode = document.createTextNode("GitHub Profile");
  button.appendChild(textNode);
  innerDiv.appendChild(button);

  button.addEventListener("click", () => fetchUserData(data.url));

  outerDiv.appendChild(innerDiv);
  return outerDiv;
}

function displayData(jasonData) {
  container.innerHTML = "";
  jasonData.forEach((data) => {
    // console.log(data);
    const card = createCard(data);
    container.appendChild(card);
  });
}

function userProfile(data) {
  console.log(data);
  const outerDiv = document.createElement("div");
  outerDiv.className = "card";
  outerDiv.style.width = "18 rem";

  const image = document.createElement("img");
  image.className = "card-img-top img-thumbnail";
  image.src = data.avatar_url;
  image.alt = "profile pic";
  outerDiv.appendChild(image);

  const innerDiv = document.createElement("div");
  innerDiv.className = "card-body";
  const h5 = document.createElement("h5");
  h5.className = "card-title";
  let textNode = document.createTextNode(data.name);
  h5.appendChild(textNode);
  innerDiv.appendChild(h5);

  const p = document.createElement("p");
  p.className = "card-text";
  p.innerHTML = `${data.bio}
                    <br />
                    Number of repos: ${data.public_repos}
                `;

  innerDiv.appendChild(p);

  const button = document.createElement("button");
  button.className = "btn btn-primary";
  textNode = document.createTextNode("Back to Main Page");
  button.appendChild(textNode);
  innerDiv.appendChild(button);

  button.addEventListener("click", () => fetchData(requestUrl));
  //   button.addEventListener("click", () => window.history.back());

  outerDiv.appendChild(innerDiv);
  return outerDiv;
}

function displayUserData(jasonData) {
  const userDetails = userProfile(jasonData);
  container.innerHTML = "";
  container.appendChild(userDetails);
}

function fetchData(url) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    console.log(this.readyState);
    if (xhr.readyState === 4) {
      const data = this.responseText;
      const jsonData = JSON.parse(data);
      displayData(jsonData);
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

function fetchUserData(url) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    console.log(this.readyState);
    if (xhr.readyState === 4) {
      const data = this.responseText;
      const jasonData = JSON.parse(data);
      displayUserData(jasonData);
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

/* 
 container.innerHTML = `
                    <div class="card" style="width: 18rem">
                    <img
                        src=${jasonData.avatar_url}
                        class="card-img-top img-thumbnail"
                        alt="profile-picture"
                    />
                    <div class="card-body">
                        <h5 class="card-title">${jasonData.name}</h5>
                        <p class="card-text">
                        ${jasonData.bio}
                        <br />
                        Number of repos: ${jasonData.public_repos}
                        </p>
                        <a
                        href=${jasonData.html_url}
                        class="btn btn-primary"
                        target="_blank"
                        >Github</a
                        >
                    </div>
                    </div>

*/

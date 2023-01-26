const submitSearchForm = document.getElementById("github-form");

const ulElement = document.getElementById("user-list");

const gitHubSearch = (searchInquiry) => {
  const url = `https://api.github.com/search/users?q=${searchInquiry}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.items.forEach(renderUser);
    });
};

submitSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event.target.search.value);

  gitHubSearch(event.target.search.value);
  // console.log(gitHubSearch(event.target.search.value));
});

function renderUser(user) {
  console.log(user);
  searchedName = document.createElement("li");
  AvatarImg = document.createElement("img");
  userUrl = document.createElement("a");
  //
  searchedName.textContent = user.login;
  //
  userUrl.href = user.html_url;
  userUrl.target = "_blank";
  userUrl.textContent = "Github Link!";
  AvatarImg.src = user.avatar_url;
  ulElement.append(searchedName, AvatarImg, userUrl);
}

let inputOne = document.getElementById("name");
let inputTwo = document.getElementById("name2");
let btn = document.getElementById("btn");
let winner = document.getElementById("winner");

btn.onclick = function () {
  if (inputOne.value === "" || inputTwo.value === "") {
    alert("Enter valid usernames");
  } else if (inputOne.value === inputTwo.value) {
    alert("Enter different usernames");
  } else {
    const API_REPO_ONE_AVATAR = `https://api.github.com/users/${inputOne.value}`;
    const API_REPO_TWO_AVATAR = `https://api.github.com/users/${inputTwo.value}`;

    fetch(API_REPO_ONE_AVATAR)
      .then((response) => {
        return response.json();
      })
      .then((dataOneImage) => {
        let avatarOne = dataOneImage.avatar_url;
        let winnerName = inputOne.value;

        fetch(API_REPO_TWO_AVATAR)
          .then((response) => {
            return response.json();
          })
          .then((dataTwoImage) => {
            let avatarTwo = dataTwoImage.avatar_url;
            let loserName = inputTwo.value;

            if (dataOneImage.public_repos > dataTwoImage.public_repos) {
              winner.innerHTML = `
                <div class="result-container">
                  <div class="container">
                    <div class="row">
                      <div class="col text-center">
                        <h1 class="bg-info text-white p-2">Winner: ${winnerName}</h1>
                        <img src="${avatarOne}" alt="Avatar One" class="img-fluid rounded-circle">
                        <p>Repositories: ${dataOneImage.public_repos}</p>
                        <p>Followers: ${dataOneImage.followers}</p>
                        <a href="${dataOneImage.html_url}" target="_blank">GitHub Profile</a>
                      </div>
                      <div class="col text-center">
                        <h1 class="bg-dark text-white p-2">Loser: ${loserName}</h1>
                        <img src="${avatarTwo}" alt="Avatar Two" class="img-fluid rounded-circle">
                        <p>Repositories: ${dataTwoImage.public_repos}</p>
                        <p>Followers: ${dataTwoImage.followers}</p>
                        <a href="${dataTwoImage.html_url}" target="_blank">GitHub Profile</a>
                      </div>
                    </div>
                  </div>
                </div>
              `;
            } else if (dataOneImage.public_repos < dataTwoImage.public_repos) {
              winner.innerHTML = `
                <div class="result-container">
                  <div class="container">
                    <div class="row">
                      <div class="col text-center">
                        <h1 class="bg-dark text-white p-2">Loser: ${winnerName}</h1>
                        <img src="${avatarOne}" alt="Avatar One" class="img-fluid rounded-circle">
                        <p>Repositories: ${dataOneImage.public_repos}</p>
                        <p>Followers: ${dataOneImage.followers}</p>
                        <a href="${dataOneImage.html_url}" target="_blank">GitHub Profile</a>
                      </div>
                      <div class="col text-center">
                        <h1 class="bg-info text-white p-2">Winner: ${loserName}</h1>
                        <img src="${avatarTwo}" alt="Avatar Two" class="img-fluid rounded-circle">
                        <p>Repositories: ${dataTwoImage.public_repos}</p>
                        <p>Followers: ${dataTwoImage.followers}</p>
                        <a href="${dataTwoImage.html_url}" target="_blank">GitHub Profile</a>
                      </div>
                    </div>
                  </div>
                </div>
              `;
            } else {
              if (dataOneImage.followers > dataTwoImage.followers) {
                winner.innerHTML = `
                <div class="result-container">
                  <div class="container">
                    <div class="row">
                      <div class="col text-center">
                        <h1 class="bg-info text-white p-2">Winner: ${winnerName}</h1>
                        <img src="${avatarOne}" alt="Avatar One" class="img-fluid rounded-circle">
                        <p>Repositories: ${dataOneImage.public_repos}</p>
                        <p>Followers: ${dataOneImage.followers}</p>
                        <a href="${dataOneImage.html_url}" target="_blank">GitHub Profile</a>
                      </div>
                      <div class="col text-center">
                        <h1 class="bg-dark text-white p-2">Loser: ${loserName}</h1>
                        <img src="${avatarTwo}" alt="Avatar Two" class="img-fluid rounded-circle" >
                        <p>Repositories: ${dataTwoImage.public_repos}</p>
                        <p>Followers: ${dataTwoImage.followers}</p>
                        <a href="${dataTwoImage.html_url}" target="_blank">GitHub Profile</a>
                      </div>
                    </div>
                  </div>
                </div>
              `;
              } else if (dataOneImage.followers < dataTwoImage.followers) {
                winner.innerHTML = `
                <div class="result-container">
                  <div class="container">
                    <div class="row">
                      <div class="col text-center">
                        <h1 class="bg-dark text-white p-2">Loser: ${winnerName}</h1>
                        <img src="${avatarOne}" alt="Avatar One" class="img-fluid rounded-circle">
                        <p>Repositories: ${dataOneImage.public_repos}</p>
                        <p>Followers: ${dataOneImage.followers}</p>
                        <a href="${dataOneImage.html_url}" target="_blank">GitHub Profile</a>
                      </div>
                      <div class="col text-center">
                        <h1 class="bg-info text-white p-2">Winner: ${loserName}</h1>
                        <img src="${avatarTwo}" alt="Avatar Two" class="img-fluid rounded-circle">
                        <p>Repositories: ${dataTwoImage.public_repos}</p>
                        <p>Followers: ${dataTwoImage.followers}</p>
                        <a href="${dataTwoImage.html_url}" target="_blank">GitHub Profile</a>
                      </div>
                    </div>
                  </div>
                </div>
              `;
              } else {
                winner.innerHTML = `
                <div class="container">
                  <div class="row">
                    <div class="col text-center">
                      <h1 class="bg-warning text-white p-2">It's a tie!</h1>
                      <img src="${avatarOne}" alt="Avatar One" class="img-fluid">
                      <img src="${avatarTwo}" alt="Avatar Two" class="img-fluid">
                    </div>
                  </div>
                </div>`;
              }
            }
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

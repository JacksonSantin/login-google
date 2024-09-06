const handleCredentialResponse = (response) => {
  const data = jwt_decode(response.credential);

  if (data && data.picture && data.name && data.email) {
    botaoSticky();
    picture.setAttribute("src", data.picture);
    fullName.textContent = data.name;
    email.textContent = data.email;
  }
};
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "908514237155-hgjg2vvacjohr42bngmlmqa5rt4ksgbb.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "filled_blue", size: "medium", shape: "pill" } // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
};

const botaoSticky = () => {
  const buttonDiv = document.querySelector(".infos");
  buttonDiv.style.display = "none";
  showInfo();
};

const showInfo = () => {
  const infos = document.querySelector(".infos");
  infos.style.display = "block";
};

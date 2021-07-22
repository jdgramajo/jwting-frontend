// The event.target is the form.
const login = async (event) => {
  event.preventDefault();

  const formElement = event.target;

  if (!formElement.checkValidity()) {
    formElement.classList.add("was-validated");
    console.log(`${formElement.id} validation failed, dude.`);
    return false;
  }

  const username = document.getElementById("username-group-input").value;
  const password = document.getElementById("password-group-input").value;

  try {
    const credentialsResponse = await postCredentials(username, password);
    if (credentialsResponse.ok) {
      router.toMain();
      return true;
    } else {
      console.log(credentialsResponse.statusText);
      router.toError();
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

// The event.target is the form.
const changePWD = async (event) => {
  event.preventDefault();

  const formElement = event.target;

  if (!formElement.checkValidity()) {
    formElement.classList.add("was-validated");
    console.log(`${formElement.id} validation failed, dude.`);
    return false;
  }

  const newPassword = document.getElementById("new-password-group-input").value;
  const confirmPassword = document.getElementById(
    "confirm-password-group-input"
  ).value;

  try {
    const changePWDResponse = await postPWDChange(newPassword, confirmPassword);
    if (changePWDResponse.ok) {
      router.toMain();
      return true;
    } else {
      console.log(changePWDResponse.statusText);
      router.toError();
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

const start = async () => {
  try {
    const response = await getMyRolesRequest();

    if (!response.ok) {
      console.log(response.statusText);
      router.toMain();
      return;
    }

    const header = createHeaderComponent([
      { routerFunction: router.toSignout, name: "Sign out" },
    ]);
    header.appendComponentToElement(document.body);

    const changePasswordForm = createFormComponent(
      [
        {
          groupName: "new-password",
          labelText: "New Password:",
          input: { type: "password", required: true },
        },
        {
          groupName: "confirm-password",
          labelText: "Confirm Password:",
          input: { type: "password", required: true },
        },
      ],
      "Change Password",
      "changePWD(event)"
    );
    changePasswordForm.appendComponentToElement(document.body);
  } catch (err) {
    console.log(err);
    router.toError();
  }
};

start();

// SERVICE ??? IT WAS HOISTED !!!

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

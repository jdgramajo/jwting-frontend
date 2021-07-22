const header = createHeaderComponent([
  { routerFunction: router.toRoot, name: "Sign in" },
]);
header.appendComponentToElement(document.body);

const loginForm = createFormComponent(
  [
    {
      groupName: "username",
      labelText: "Username:",
      input: { type: "text", helpText: "Your username.", required: true },
    },
    {
      groupName: "password",
      labelText: "Password:",
      input: { type: "password", required: true },
    },
  ],
  "Login",
  "login(event)"
);
loginForm.appendComponentToElement(document.body);

// SERVICE ??? WILL IT BE HOISTED ???

// Check the model to see the form is within a div. Components are always divs.
const login = async (event) => {
  event.preventDefault();

  const formElement = loginForm.component.firstChild;

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

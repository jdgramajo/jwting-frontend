const postCredentials = async (event) => {
  event.preventDefault();

  const url = "http://localhost:8080/auth/signin";
  const init = {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      username: document.getElementById("username-group-input").value,
      password: document.getElementById("password-group-input").value,
    }),
    headers: {
      Accept: "*/*",
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  try {
    const response = await fetch(url, init);
    if (!response.ok) return response;
    const myRolesResponse = await fetch("http://localhost:8080/myRoles", {
      credentials: "include",
    });
    const myRolesJSON = await myRolesResponse.json();
    return myRolesJSON;
  } catch (err) {
    console.log(err);
    return err;
  }
};

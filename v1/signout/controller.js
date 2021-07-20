const start = async () => {
  const signout = new SignoutModel();
  signout.appendComponentToElement(document.body);

  const response = await fetch(`${backendRootURL}/auth/signout`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "*/*",
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  try {
    if (response.ok) {
      router.toRoot();
    } else {
      router.toError();
    }
  } catch (err) {
    console.log(`${err}`);
  }
};

start();

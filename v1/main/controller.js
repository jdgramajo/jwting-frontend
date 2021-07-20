const start = async () => {
  const header = createHeaderComponent([
    { routerFunction: router.toSignout, name: "Sign out" },
  ]);
  header.appendComponentToElement(document.body);

  try {
    const response = await fetch(`${backendRootURL}/myRoles`, {
      credentials: "include",
    });
    if (response.ok) {
      const { roles } = await response.json();
      const main = new MainModel(roles);
      main.appendComponentToElement(document.body);
    } else {
      // TODO: Appropriate actions based on error types.
      router.toRoot();
    }
  } catch (err) {
    console.log(err);
  }
};

start();

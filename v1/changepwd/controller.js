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
          input: { type: "password" },
        },
        {
          groupName: "confirm-password",
          labelText: "Confirm Password:",
          input: { type: "password" },
        },
      ],
      "Change Password"
    );
    changePasswordForm.appendComponentToElement(document.body);
  } catch (err) {
    console.log(err);
    router.toError();
  }
};

start();

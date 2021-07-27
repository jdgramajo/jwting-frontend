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

    const changePasswordForm = createFormComponent({
      formId: "change-password-form",
      formGroups: [
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
      submitText: "Change Password",
      submitFunctionString: "changePWD(event)",
    });
    changePasswordForm.appendComponentToElement(document.body);
  } catch (err) {
    console.log(err);
    router.toError();
  }
};

start();
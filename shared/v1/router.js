const router = {
  toRoot: () => (window.location.href = "/"),
  toMain: () => (window.location.href = "/v1/main/"),
  toSignout: () => (window.location.href = "/v1/signout"),
  toError: () => (window.location.href = "/v1/error/"),
};

// Using this router helps to maintain the same protocol when navigating.
const router = {
  toRoot: () => (window.location.href = "/"),
  toMain: () => (window.location.href = "/v1/main/"),
  toSignout: () => (window.location.href = "/v1/signout/"),
  toChangePwd: () => (window.location.href = "/v1/changepwd"),
  toError: () => (window.location.href = "/v1/error/"),
};

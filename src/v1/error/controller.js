import jwt from "../../../jwt.svg";

const tabIcon = document.createElement("link");
tabIcon.setAttribute("rel", "icon");
tabIcon.setAttribute("href", jwt);
document.head.appendChild(tabIcon);

const message = document.createElement("h1");
message.innerText = "There was an error... :(";
document.body.appendChild(message);

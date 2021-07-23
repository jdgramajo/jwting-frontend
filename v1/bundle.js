/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_v1_components_header_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/v1/components/header/creator */ \"./src/shared/v1/components/header/creator.js\");\n/* harmony import */ var _shared_v1_components_form_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/v1/components/form/creator */ \"./src/shared/v1/components/form/creator.js\");\n/* harmony import */ var _shared_v1_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/v1/router */ \"./src/shared/v1/router.js\");\n/* harmony import */ var _shared_v1_services_formsService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/v1/services/formsService */ \"./src/shared/v1/services/formsService.js\");\n\n\n\n\n\nconst header = (0,_shared_v1_components_header_creator__WEBPACK_IMPORTED_MODULE_0__.default)([\n  { routerFunction: _shared_v1_router__WEBPACK_IMPORTED_MODULE_2__.default.toRoot, name: \"Sign in\" },\n]);\nheader.appendComponentToElement(document.body);\n\nconst loginForm = (0,_shared_v1_components_form_creator__WEBPACK_IMPORTED_MODULE_1__.default)({\n  formId: \"login-form\",\n  formGroups: [\n    {\n      groupName: \"username\",\n      labelText: \"Username:\",\n      input: { type: \"text\", helpText: \"Your username.\", required: true },\n    },\n    {\n      groupName: \"password\",\n      labelText: \"Password:\",\n      input: { type: \"password\", required: true },\n    },\n  ],\n  submitText: \"Login\",\n  submitFunctionString: \"login(event)\",\n  submitFunction: _shared_v1_services_formsService__WEBPACK_IMPORTED_MODULE_3__.login,\n});\nloginForm.appendComponentToElement(document.body);\n\n\n//# sourceURL=webpack://jwting-frontend/./src/controller.js?");

/***/ }),

/***/ "./src/shared/v1/components/form/creator.js":
/*!**************************************************!*\
  !*** ./src/shared/v1/components/form/creator.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/shared/v1/components/form/model.js\");\n\n\nconst createFormComponent = (\n  options = {\n    formId: \"john-doe-of-forms\",\n    formGroups: [],\n    submitText: \"Submit\",\n    submitFunctionString: \"event.preventDefault(); alert('Form action!');\",\n    submitFunction: () => {\n      alert(\"Form action!\");\n    },\n  }\n) => {\n  const formComponent = new _model__WEBPACK_IMPORTED_MODULE_0__.default(options);\n\n  return formComponent;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFormComponent);\n\n\n//# sourceURL=webpack://jwting-frontend/./src/shared/v1/components/form/creator.js?");

/***/ }),

/***/ "./src/shared/v1/components/form/model.js":
/*!************************************************!*\
  !*** ./src/shared/v1/components/form/model.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass FormModel {\n  constructor(options) {\n    if (!options?.formGroups?.length) return;\n\n    const form = document.createElement(\"form\");\n    form.setAttribute(\n      \"class\",\n      \"row justify-content-center col-xl-4 col-lg-4 col-md-4 col-sm-8\"\n    );\n    form.setAttribute(\"id\", options.formId);\n    form.setAttribute(\"onsubmit\", \"\"); // options.submitFunctionString);\n    form.setAttribute(\"novalidate\", \"true\");\n    options?.formGroups?.map((formGroup) => {\n      form.appendChild(this.createFormGroupRow(formGroup));\n    });\n\n    const formSubmitButton = document.createElement(\"button\");\n    formSubmitButton.setAttribute(\"type\", \"submit\");\n    formSubmitButton.setAttribute(\"class\", \"btn btn-dark mt-2 col-10\");\n    formSubmitButton.addEventListener(\"onclick\", options.submitFunction);\n    formSubmitButton.innerHTML = options.submitText;\n    form.appendChild(formSubmitButton);\n\n    this.component = document.createElement(\"div\");\n    this.component.setAttribute(\"class\", \"d-flex justify-content-center\");\n    this.component.setAttribute(\"style\", \"margin-top: 100px;\");\n    this.component.appendChild(form);\n  }\n\n  createFormGroupRow = (options) => {\n    if (!options) return;\n\n    const formGroup = document.createElement(\"div\");\n    formGroup.setAttribute(\"class\", \"mb-3\");\n\n    const label = document.createElement(\"label\");\n    label.setAttribute(\"for\", `${options?.groupName}-group-input`);\n    label.innerHTML = `${options?.labelText}`;\n    formGroup.appendChild(label);\n\n    const input = document.createElement(\"input\");\n    input.setAttribute(\"type\", `${options.input?.type}`);\n    if (options.input?.type === \"password\")\n      input.setAttribute(\"autocomplete\", \"new-password\");\n    input.setAttribute(\"class\", \"form-control\");\n    input.setAttribute(\"id\", `${options.groupName}-group-input`);\n    if (options.input?.required) input.setAttribute(\"required\", \"true\");\n    formGroup.appendChild(input);\n\n    if (options.input?.helpText) {\n      input.setAttribute(\n        \"aria-describedby\",\n        `${options?.input?.name}-group-input-help`\n      );\n      const inputHelp = document.createElement(\"div\");\n      inputHelp.setAttribute(\"id\", `${options.groupName}-group-input-help`);\n      inputHelp.setAttribute(\"class\", \"form-text\");\n      inputHelp.innerHTML = `${options?.input?.helpText}`;\n      formGroup.appendChild(inputHelp);\n    }\n\n    const flexRow = document.createElement(\"div\");\n    flexRow.appendChild(formGroup);\n\n    return flexRow;\n  };\n\n  appendComponentToElement = (parent = document.body) => {\n    parent.appendChild(this.component);\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormModel);\n\n\n//# sourceURL=webpack://jwting-frontend/./src/shared/v1/components/form/model.js?");

/***/ }),

/***/ "./src/shared/v1/components/header/creator.js":
/*!****************************************************!*\
  !*** ./src/shared/v1/components/header/creator.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/shared/v1/components/header/model.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ \"./src/shared/v1/router.js\");\n\n\n\nconst createHeaderComponent = (navItems = []) => {\n  const header = new _model__WEBPACK_IMPORTED_MODULE_0__.default({\n    navBarBrand: {\n      routerFunction: _router__WEBPACK_IMPORTED_MODULE_1__.default.toRoot,\n      img: {\n        src: \"/jwt.svg\",\n        alt: \"\",\n        width: \"70pem\",\n        height: \"50pem\",\n      },\n    },\n    navItems,\n  });\n\n  return header;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeaderComponent);\n\n\n//# sourceURL=webpack://jwting-frontend/./src/shared/v1/components/header/creator.js?");

/***/ }),

/***/ "./src/shared/v1/components/header/model.js":
/*!**************************************************!*\
  !*** ./src/shared/v1/components/header/model.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass HeaderModel {\n  constructor(options) {\n    this.navBarBrand = options.navBarBrand;\n    this.navItems = options.navItems;\n\n    this.component = document.createElement(\"nav\");\n    this.component.setAttribute(\n      \"class\",\n      \"navbar navbar-expand-sm navbar-dark fixed-top bg-dark\"\n    );\n\n    this.navBarContainerElement = document.createElement(\"div\");\n    this.navBarContainerElement.setAttribute(\"class\", \"container\");\n\n    if (this.navBarBrand)\n      this.navBarContainerElement.appendChild(this.createNavBarBrandElement());\n\n    if (this.navItems) {\n      this.navBarContainerElement.appendChild(\n        this.createNavBarTogglerButtonWithSpanElement()\n      );\n      this.navBarContainerElement.appendChild(\n        this.createNavBarCollapsableItemsListElement()\n      );\n    }\n\n    this.component.appendChild(this.navBarContainerElement);\n  }\n\n  createNavBarBrandElement() {\n    const navBarBrandElement = document.createElement(\"div\");\n    navBarBrandElement.setAttribute(\"class\", \"navbar-brand\");\n    navBarBrandElement.addEventListener(\n      \"click\",\n      this.navBarBrand.routerFunction\n    );\n\n    const navBarBrandImageElement = document.createElement(\"img\");\n    navBarBrandImageElement.setAttribute(\"src\", this.navBarBrand.img.src);\n    navBarBrandImageElement.setAttribute(\"alt\", this.navBarBrand.img.alt);\n    navBarBrandImageElement.setAttribute(\"width\", this.navBarBrand.img.width);\n    navBarBrandImageElement.setAttribute(\"height\", this.navBarBrand.img.height);\n\n    navBarBrandElement.appendChild(navBarBrandImageElement);\n\n    return navBarBrandElement;\n  }\n\n  createNavBarTogglerButtonWithSpanElement() {\n    const togglerSpan = document.createElement(\"span\");\n    togglerSpan.setAttribute(\"class\", \"navbar-toggler-icon\");\n\n    const navBarTogglerButtonElement = document.createElement(\"button\");\n    navBarTogglerButtonElement.setAttribute(\"class\", \"navbar-toggler\");\n    navBarTogglerButtonElement.setAttribute(\"data-bs-toggle\", \"collapse\");\n    navBarTogglerButtonElement.setAttribute(\n      \"data-bs-target\",\n      \"#navbarCollapse\"\n    );\n    navBarTogglerButtonElement.appendChild(togglerSpan);\n\n    return navBarTogglerButtonElement;\n  }\n\n  createNavBarCollapsableItemsListElement() {\n    const navBarItemsListElement = document.createElement(\"ul\");\n    navBarItemsListElement.setAttribute(\"class\", \"navbar-nav\");\n\n    this.navItems.map((item) => {\n      const listItemElement = document.createElement(\"li\");\n      listItemElement.setAttribute(\"class\", \"nav-item align-self-end\");\n      const divElement = document.createElement(\"div\");\n      divElement.setAttribute(\"class\", \"nav-link\");\n      divElement.addEventListener(\"click\", item.routerFunction);\n      divElement.style.cursor = \"pointer\";\n      divElement.innerText = item.name;\n      listItemElement.appendChild(divElement);\n      navBarItemsListElement.appendChild(listItemElement);\n    });\n\n    const navBarCollapseElement = document.createElement(\"div\");\n    navBarCollapseElement.setAttribute(\n      \"class\",\n      \"collapse navbar-collapse justify-content-md-end\"\n    );\n    navBarCollapseElement.setAttribute(\"id\", \"navbarCollapse\");\n    navBarCollapseElement.appendChild(navBarItemsListElement);\n\n    return navBarCollapseElement;\n  }\n\n  appendComponentToElement = (parent = document.body) => {\n    parent.appendChild(this.component);\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderModel);\n\n\n//# sourceURL=webpack://jwting-frontend/./src/shared/v1/components/header/model.js?");

/***/ }),

/***/ "./src/shared/v1/router.js":
/*!*********************************!*\
  !*** ./src/shared/v1/router.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Using this router helps to maintain the same protocol when navigating.\nconst router = {\n  toRoot: () => (window.location.href = \"/v1/\"),\n  toMain: () => (window.location.href = \"/v1/main/\"),\n  toSignout: () => (window.location.href = \"/v1/signout/\"),\n  toChangePwd: () => (window.location.href = \"/v1/changepwd/\"),\n  toError: () => (window.location.href = \"/v1/error/\"),\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n\n//# sourceURL=webpack://jwting-frontend/./src/shared/v1/router.js?");

/***/ }),

/***/ "./src/shared/v1/services/formsService.js":
/*!************************************************!*\
  !*** ./src/shared/v1/services/formsService.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"changePWD\": () => (/* binding */ changePWD)\n/* harmony export */ });\n// The event.target is the form.\nconst login = async (event) => {\n  event.preventDefault();\n\n  const loginForm = document.getElementById(\"login-form\");\n\n  if (!loginForm.checkValidity()) {\n    loginForm.classList.add(\"was-validated\");\n    console.log(`${loginForm.id} validation failed, dude.`);\n    return false;\n  }\n\n  const username = document.getElementById(\"username-group-input\").value;\n  const password = document.getElementById(\"password-group-input\").value;\n\n  try {\n    const credentialsResponse = await postCredentials(username, password);\n    if (credentialsResponse.ok) {\n      router.toMain();\n      return true;\n    } else {\n      console.log(credentialsResponse.statusText);\n      router.toError();\n      return false;\n    }\n  } catch (err) {\n    console.log(err);\n    return false;\n  }\n};\n\n// The event.target is the form.\nconst changePWD = async (event) => {\n  event.preventDefault();\n\n  const changePasswordForm = document.getElementById(\"change-password-form\");\n  const newPasswordElement = document.getElementById(\n    \"new-password-group-input\"\n  );\n  const confirmPasswordElement = document.getElementById(\n    \"confirm-password-group-input\"\n  );\n\n  if (!changePasswordForm.checkValidity()) {\n    newPasswordElement.setAttribute(\"invalid\", \"true\");\n    confirmPasswordElement.setAttribute(\"invalid\", \"true\");\n    changePasswordForm.classList.add(\"was-validated\");\n    console.log(`${changePasswordForm.id} validation failed, dude.`);\n    return false;\n  }\n\n  if (newPasswordElement.value !== confirmPasswordElement.value) {\n    newPasswordElement.setAttribute(\"invalid\", \"true\");\n    newPasswordElement.value = \"\";\n    confirmPasswordElement.setAttribute(\"invalid\", \"true\");\n    confirmPasswordElement.value = \"\";\n    console.log(`Passwords didn't match, dude.`);\n    alert(\"Passwords didn't match.\");\n    return false;\n  }\n\n  try {\n    const changePWDResponse = await postPWDChange(\n      newPasswordElement.value,\n      confirmPasswordElement.value\n    );\n    if (changePWDResponse.ok) {\n      router.toMain();\n      return true;\n    } else {\n      console.log(changePWDResponse.statusText);\n      router.toError();\n      return false;\n    }\n  } catch (err) {\n    console.log(err);\n    return false;\n  }\n};\n\n\n\n\n//# sourceURL=webpack://jwting-frontend/./src/shared/v1/services/formsService.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/controller.js");
/******/ 	
/******/ })()
;
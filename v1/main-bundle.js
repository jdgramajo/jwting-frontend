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

/***/ "./src/v1/main/controller.js":
/*!***********************************!*\
  !*** ./src/v1/main/controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_v1_components_header_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/v1/components/header/creator */ \"./src/shared/v1/components/header/creator.js\");\n/* harmony import */ var _shared_v1_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/v1/router */ \"./src/shared/v1/router.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ \"./src/v1/main/model.js\");\n\n\n\n\nconst start = async () => {\n  const headerComponent = (0,_shared_v1_components_header_creator__WEBPACK_IMPORTED_MODULE_0__.default)([\n    { routerFunction: _shared_v1_router__WEBPACK_IMPORTED_MODULE_1__.default.toChangePwd, name: \"Change Password\" },\n    { routerFunction: _shared_v1_router__WEBPACK_IMPORTED_MODULE_1__.default.toSignout, name: \"Sign out\" },\n  ]);\n  headerComponent.appendComponentToElement(document.body);\n\n  try {\n    const response = await getMyRolesRequest();\n    if (response.ok) {\n      const { roles } = await response.json();\n      const main = new _model__WEBPACK_IMPORTED_MODULE_2__.default(roles);\n      main.appendComponentToElement(document.body);\n    } else {\n      // TODO: Appropriate actions based on error types.\n      console.log(response.statusText);\n      _shared_v1_router__WEBPACK_IMPORTED_MODULE_1__.default.toRoot();\n    }\n  } catch (err) {\n    console.log(err);\n    _shared_v1_router__WEBPACK_IMPORTED_MODULE_1__.default.toError();\n  }\n};\n\nstart();\n\n\n//# sourceURL=webpack://jwting-frontend/./src/v1/main/controller.js?");

/***/ }),

/***/ "./src/v1/main/model.js":
/*!******************************!*\
  !*** ./src/v1/main/model.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MainModel {\n  constructor(roles = []) {\n    const mainTitleDiv = document.createElement(\"div\");\n    mainTitleDiv.setAttribute(\n      \"class\",\n      \"d-flex flex-row justify-content-center\"\n    );\n    const mainTitleText = document.createElement(\"h1\");\n    mainTitleText.innerText = \"Sign in successful!\";\n    mainTitleDiv.appendChild(mainTitleText);\n\n    const rolesTitleDiv = document.createElement(\"div\");\n    rolesTitleDiv.setAttribute(\n      \"class\",\n      \"d-flex flex-row justify-content-center\"\n    );\n    rolesTitleDiv.setAttribute(\n      \"style\",\n      \"margin-top: 50px; margin-bottom: 25px;\"\n    );\n    const rolesTitleText = document.createElement(\"h2\");\n    rolesTitleText.innerText = \"Your roles are:\";\n    rolesTitleDiv.appendChild(rolesTitleText);\n\n    const rolesList = document.createElement(\"ul\");\n    roles.map((role) => {\n      const item = document.createElement(\"li\");\n      item.innerText = `${role}`;\n      rolesList.appendChild(item);\n    });\n\n    this.component = document.createElement(\"div\");\n    this.component.setAttribute(\n      \"class\",\n      \"container col-xl-4 col-lg-4 col-md-4 col-sm-8\"\n    );\n    this.component.setAttribute(\"style\", \"margin-top: 150px;\");\n    this.component.appendChild(mainTitleDiv);\n    this.component.appendChild(rolesTitleDiv);\n    this.component.appendChild(rolesList);\n  }\n\n  appendComponentToElement = (parent = document.body) => {\n    parent.appendChild(this.component);\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainModel);\n\n\n//# sourceURL=webpack://jwting-frontend/./src/v1/main/model.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/v1/main/controller.js");
/******/ 	
/******/ })()
;
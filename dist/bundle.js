/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./myscript.js":
/*!*********************!*\
  !*** ./myscript.js ***!
  \*********************/
/***/ (() => {

eval("const apiUrl = \"http://localhost:3000/convert\";\nconsole.log(apiUrl);\n\n\nasync function convert() {\n    const form = document.getElementById('converterForm');\n    const resultDiv = document.getElementById('result');\n  \n    const value = form.querySelector('#value').value;\n    const conversionType = form.querySelector('#conversionType').value;\n  \n    const formData = { value, conversionType };\n  \n    const response = await fetch(apiUrl, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify(formData),\n    });\n  \n    const data = await response.json();\n  \n    resultDiv.innerHTML = `Result: ${data.result}`;\n}\n\n\n//# sourceURL=webpack:///./myscript.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./myscript.js"]();
/******/ 	
/******/ })()
;
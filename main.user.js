// ==UserScript==
// @name         Megaparts Auto Pricing Tool
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Автоматично генериране и потвърждаване на цени в Megasys
// @author       You
// @match        https://megasys.megaparts.bg/megasys/product*
// @run-at       document-end
//
// --- Модулите ---
// @require      https://raw.githubusercontent.com/YOUR_NAME/megasys-automation/main/src/utils.js
// @require      https://raw.githubusercontent.com/YOUR_NAME/megasys-automation/main/src/fillPrices.js
// @require      https://raw.githubusercontent.com/YOUR_NAME/megasys-automation/main/src/confirmPrices.js
// @require      https://raw.githubusercontent.com/YOUR_NAME/megasys-automation/main/src/buttons.js
//
// --- CSS ---
// @resource     CUSTOMCSS https://raw.githubusercontent.com/YOUR_NAME/megasys-automation/main/src/styles.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

(function () {
    GM_addStyle(GM_getResourceText("CUSTOMCSS"));

    initButtons();
})();

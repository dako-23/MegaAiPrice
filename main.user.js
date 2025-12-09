// ==UserScript==
// @name         Mega AI PG
// @namespace    http://tampermonkey.net/
// @version      1.0.5
// @description  MAIPG v.1.0.5
// @author       DAKO23
// @match        https://megasys.megaparts.bg/megasys/product*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com

// @require      https://raw.githubusercontent.com/dako-23/MegaAiPrice/main/src/utils.js
// @require      https://raw.githubusercontent.com/dako-23/MegaAiPrice/main/src/fillPrices.js
// @require      https://raw.githubusercontent.com/dako-23/MegaAiPrice/main/src/confirmPrices.js
// @require      https://raw.githubusercontent.com/dako-23/MegaAiPrice/main/src/buttons/buttons.js

// @resource     CUSTOMCSS https://raw.githubusercontent.com/dako-23/MegaAiPrice/main/src/buttons/styles.css

// @grant        GM_addStyle
// @grant        GM_getResourceText

// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    GM_addStyle(GM_getResourceText("CUSTOMCSS"));

    initButtons();
})();

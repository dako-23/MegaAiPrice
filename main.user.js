// ==UserScript==
// @name         Mega AI PG
// @namespace    http://tampermonkey.net/
// @version      1.0.8
// @description  MAIPG v.1.0.8
// @author       DAKO23
// @match        https://megasys.megaparts.bg/megasys/product*
// @icon         https://res.cloudinary.com/dgvzzts4y/image/upload/v1765292639/Screenshot_2_rrui1n.png

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

window.initButtons = function () {

    const gen = document.createElement("button");
    gen.id = "mp-generate-prices";
    gen.textContent = "Генерирай цени";
    gen.onclick = fillPrices;

    const conf = document.createElement("button");
    conf.id = "mp-confirm-prices";
    conf.textContent = "Потвърди цени";
    conf.onclick = confirmAllPrices;
    conf.disabled = true;
    conf.classList.add("disabled");

    document.body.appendChild(gen);
    document.body.appendChild(conf);

    MP.btnGenerate = gen;
    MP.btnConfirm = conf;
};

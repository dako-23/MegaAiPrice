window.confirmAllPrices = function () {
    let count = 0;

    document.querySelectorAll('.f-edit-field-form').forEach(div => {
        const input = div.querySelector('input.fast-edit-field[data-field-name="price"]');
        const btn = div.querySelector('.confirm-edit-field');

        if (input && input.value.trim() !== '' && btn) {
            btn.click();
            count++;
        }
    });

    alert(`Потвърдени са ${count} цени.`);

    MP.btnConfirm.disabled = true;
    MP.btnConfirm.classList.add('disabled');
};
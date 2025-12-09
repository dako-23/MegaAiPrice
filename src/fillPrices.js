window.fillPrices = async function () {
    if (MP.running) return;
    MP.running = true;

    MP.btnConfirm.disabled = true;
    MP.btnConfirm.classList.add('disabled');

    MP.btnGenerate.disabled = true;
    MP.btnGenerate.classList.add('loading');

    let generated = false;

    try {
        const items = [];

        document.querySelectorAll('.f-edit-field-form').forEach(div => {
            const input = div.querySelector('input.fast-edit-field[data-field-name="price"]');
            if (input) div.style.display = 'block';
        });

        document.querySelectorAll('tr').forEach(tr => {
            const links = tr.querySelectorAll('a[href*="editMegapartsAdmin"]');
            if (links.length >= 4) {
                items.push(links[3].textContent.trim());
            }
        });

        if (!items.length) {
            alert('Няма намерени авто части.');
            return;
        }

        const prices = await fetchPrices(items);
        const queue = [...prices];

        document.querySelectorAll('.f-edit-field-form').forEach(div => {
            const input = div.querySelector('input.fast-edit-field[data-field-name="price"]');
            if (input && queue.length > 0) {
                input.value = Number(queue.shift()).toFixed(2);
            }
        });

        generated = true;
        alert('✔ Всички цени са генерирани.');
    } catch (err) {
        alert('Грешка: ' + err.message);
    } finally {
        MP.running = false;

        MP.btnGenerate.disabled = false;
        MP.btnGenerate.classList.remove('loading');

        if (generated) {
            MP.btnConfirm.disabled = false;
            MP.btnConfirm.classList.remove('disabled');
        }
    }
};

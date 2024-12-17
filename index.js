const container = document.querySelector('.container');
const colors = ["#011e1f", "#f64a8a", "#fd6c9e", "#6c3082", "#f36d00", "#9334e6", "#27bcd1", "#c41e3a",
    "#00563f", "#FF00FF", "#800080", "#00FF00", "#00FFFF", "#C70039", "#FFC300"];

function addBlocks(numberOfBlocks) {
    container.innerHTML = '';

    document.documentElement.style.setProperty('--blocks-per-row', numberOfBlocks);

    for (let i = 0; i < numberOfBlocks; i++) {
        const row = document.createElement('div');
        row.classList.add('block-container');

        for (let j = 0; j < numberOfBlocks; j++) {
            const block = document.createElement('div');
            block.classList.add('block');
            row.appendChild(block);

            block.addEventListener('mousemove', () => {
                block.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            })
        }

        container.appendChild(row);
    }
}

const gridButton = document.querySelector('.new-grid');
gridButton.addEventListener('click', () => {
    while (true) {
        let num = parseInt(prompt("Enter number: "));
        if (!isNaN(num) && num <= 100) {
            addBlocks(num);
            break;
        }
        else {
            alert("Please enter a valid number less than or equal to 100.");
        }
    }
});

const clearBtn = document.querySelector(".reset");
clearBtn.addEventListener('click', () => {
    container.innerHTML = "";
})
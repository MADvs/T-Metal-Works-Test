const awningsBox = document.getElementById('awningsBox');
const canopiesBox = document.getElementById('canopiesBox');
const columnsBox = document.getElementById('columnsBox');
const customBox = document.getElementById('customBox');
const railingsBox = document.getElementById('railingsBox');
const framesBox = document.getElementById('framesBox');
const projectsBox = document.getElementById('projectsBox');
const roofsBox = document.getElementById('roofsBox');
const stairsBox = document.getElementById('stairsBox');
const weldsBox = document.getElementById('weldsBox');
const checkBoxes = document.querySelectorAll('.checkbox');
const galleryBoxes = document.querySelectorAll('.gallery-box')

const items = document.getElementsByClassName('item');
const awnings = document.getElementsByClassName('awnings');
const canopies = document.getElementsByClassName('canopy');
const columns = document.getElementsByClassName('column');
const custom = document.getElementsByClassName('custom');
const frames = document.getElementsByClassName('frames');
const projects = document.getElementsByClassName('projects');
const railings = document.getElementsByClassName('railing');
const roofs = document.getElementsByClassName('roof');
const stairs = document.getElementsByClassName('stairs');
const welds = document.getElementsByClassName('welds');

checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        RenderItems();
    });
});

function RenderItems() {
    for (const item of items) {
        item.classList.remove('hidden');
    }

    for (const item of galleryBoxes) {
        item.classList.remove('hidden');
    }

    if (!awningsBox.checked) {
        for (const item of awnings) {
            item.classList.add('hidden');
        }
    }

    if (!canopiesBox.checked) {
        for (const item of canopies) {
            item.classList.add('hidden');
        }
    }

    if (!columnsBox.checked) {
        for (const item of columns) {
            item.classList.add('hidden');
        }
    }

    if (!customBox.checked) {
        for (const item of custom) {
            item.classList.add('hidden');
        }
    }

    if (!railingsBox.checked) {
        for (const item of railings) {
            item.classList.add('hidden');
        }
    }

    if (!framesBox.checked) {
        for (const item of frames) {
            item.classList.add('hidden');
        }
    }

    if (!projectsBox.checked) {
        for (const item of projects) {
            item.classList.add('hidden');
        }
    }

    if (!roofsBox.checked) {
        for (const item of roofs) {
            item.classList.add('hidden');
        }
    }

    if (!stairsBox.checked) {
        for (const item of stairs) {
            item.classList.add('hidden');
        }
    }

    if (!weldsBox.checked) {
        for (const item of welds) {
            item.classList.add('hidden');
        }
    }

}
const demo2Button = document.getElementById("demo2Button");

console.log('demo2Button', demo2Button);

const coordBasis = [[0, -1], [1, 1], [-2, 1], [0, -2]];
const coordNext = [[2, 0], [0, 2], [-2, 0], [0, -2]];

const BASIS = 6;

let coords = [BASIS, BASIS];
let num = 1;

const addSnake = (colStart = BASIS, rowStart = BASIS, cols = 1, rows = 1) => {
    const li = document.createElement("li");
    const image = document.createElement('img');
    image.setAttribute("class", "logo");
    image.setAttribute("src", `https://picsum.photos/${cols*80+Math.random()*0.01}/${rows*80+Math.random()*0.01}`);
    image.setAttribute("class", "demo-img");

    const layout = `grid-column: ${colStart}/span ${cols}; grid-row: ${rowStart}/span ${rows}`;
    li.setAttribute("style", layout);
    li.setAttribute("class", 'demo-pic')
    li.appendChild(image);
    setTimeout(() => container.appendChild(li), num * 50);
    num++;

};

const addCircle = wrap => {
    for (let i = 0; i < 4; i++) {
        coords = coords.map((value, index) => {
            return value + coordBasis[i][index];
        });
        let span = i % 2 ? [1, 2] : [2, 1];
        addSnake(...coords, ...span);

        for (let j = 1; j < wrap; j++) {
            coords = coords.map((value, index) => {
                return value + coordNext[i][index];
            });
            span = i % 2 ? [1, 2] : [2, 1];
            addSnake(...coords, ...span);
        }
    }
};

demo2Button.onclick = function() {
    const highestTimeoutId = setTimeout(";");
    for (let i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i);
    }  num = 1;
    container.innerHTML = "";
    coords = [BASIS, BASIS];
    let span = [1, 1];
    addSnake(...coords, ...span);

    for (let w = 1; w < BASIS; w++) {
        addCircle(w);
    }
};

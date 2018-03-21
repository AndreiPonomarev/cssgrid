const container = document.getElementById("container");
const demoButton = document.getElementById("demoButton");

const addItem = (i) => {
    const li = document.createElement('li');
    const image = document.createElement('img');

    image.setAttribute("class", "logo");

    const cols = Math.floor(Math.random() * 1.8) + 1;
    const rows = Math.floor(Math.random() * 1.5) + 1;
    image.setAttribute("src", `https://picsum.photos/${cols*80+i*0.01}/${rows*80+i*0.01}`);
    image.setAttribute("class", "demo-img");

    li.setAttribute("style", `grid-column: span ${cols}; grid-row: span ${rows}`)
    li.setAttribute("class", 'demo-pic')

    li.appendChild(image);

    container.appendChild(li);
}



demoButton.onclick = function() {
    container.innerHTML = '';
    const highestTimeoutId = setTimeout(";");
    for (let i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i);
    }
    let i = 0;
    (function() {
        if (i < 70) {
            addItem(i)
            i++;
            setTimeout(arguments.callee, 70);
        }
    })();
};

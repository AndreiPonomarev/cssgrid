const demo3 = document.getElementById("demo3");

const addHexa = (i) => {
    const article = document.createElement('article');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    article.appendChild(figure);
    article.appendChild(img);
    figure.appendChild(h3);
    figure.appendChild(p);

    img.setAttribute("src", `https://picsum.photos/${240+i*0.01}/${240+i*0.01}`);
    h3.innerHTML = 'Картинко'
    p.innerHTML = 'Описание'

    demo3.appendChild(article);
}

const drawHexa = (Nhexa) => {
    document.documentElement.style.setProperty('--Nhexa', Nhexa);
        demo3.innerHTML = '';
    const highestTimeoutId = setTimeout(";");
    for (let i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i);
    }
    let i = 0;
    (function() {
        if (i < Nhexa*3) {
            addHexa(i)
            i++;
            setTimeout(arguments.callee, 70);
        }
    })();
}

demo3Run.onclick = () => {
    drawHexa(6)
}

demo3Minus.onclick = () => {
    drawHexa(4)

}
demo3Plus.onclick = () => {
    drawHexa(8)
}

document.addEventListener('DOMContentLoaded', () => drawHexa(6))

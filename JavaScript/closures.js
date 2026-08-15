const name = document.getElementById("name");
const btn = document.getElementById("btn");

function fontresize(size){ 
    function sizeChange(){
        name.styles.fontSize = `${size}px`;
    }
    return sizeChange;
}

const s20 = fontresize(20);
const s30 = fontresize(30);
const s10 = fontresize(10);
const s70 = fontresize(70);

btn.addEventListener("onClick", s20);
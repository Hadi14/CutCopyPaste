const txtarea = document.getElementById("txtarea");
const lbl = document.querySelector(".lbl");

txtarea.addEventListener('copy', (event) => {
    event.preventDefault();
    lbl.innerHTML = "COPY is disabled!!!!";
    // console.log(event)
})


txtarea.addEventListener('cut', (event) => {
    lbl.innerHTML = "CUT";
})


txtarea.addEventListener('paste', (event) => {
    lbl.innerHTML = "PASTE";
})
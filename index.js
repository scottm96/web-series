const mybox = document.getElementById('mybox');

function changeColor(event){
    
}

mybox.addEventListener("click", event => {
    event.target.style.backgroundColor = 'teal';
    event.target.textContent = "that's ticklish 😊";
});

mybox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = 'pink';
    event.target.textContent = "please don't 😆";
})

mybox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = 'lightcoral';
    event.target.textContent = "Click Me 🤪";
})
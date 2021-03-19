const checkBox = document.querySelector('input[name="them]');
let htmlElement = document.documentElement;


checkBox.addEventListener('click', function() {
    if(checkBox.checked) {
        htmlElement.classList.toggle("transition");
        htmlElement.setAttribute("data-them", "dark");
    } else {
        htmlElement.classList.toggle("transition");
        htmlElement.setAttribute("data-them", "light")
    }
});

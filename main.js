var bar = document.getElementById("bars");

var menu = document.getElementById("menu");

bar.addEventListener('click', () => {
    if (menu.className === 'hidden') {
        menu.classList.remove('hidden');
    }
    else {
        menu.classList.add('hidden');
    }
});

console.log("Labib Ahammed");
console.log("My website link:: labib007.unaux.com ");

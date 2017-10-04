// https://stackoverflow.com/questions/17633152/javascript-onclick-event-handling-with-pure-javascript
//https://stackoverflow.com/questions/26736587/how-to-add-and-remove-classes-in-js-without-jquery
window.addEventListener("load", function () {
    var hamburgers = document.getElementsByClassName("hamburger");
    hamburgers = Array.prototype.slice.call(hamburgers);
    hamburgers.forEach(function (hamburger) {
        hamburger.addEventListener("click", function (e) {
            if (document.body.classList.contains("menu-open")) {
                document.body.classList.remove("menu-open");
            } else {
                document.body.classList.add("menu-open");
            }
        });
    });
});



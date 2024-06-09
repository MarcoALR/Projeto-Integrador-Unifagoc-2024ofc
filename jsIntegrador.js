document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("colorInput");

    input.addEventListener("input", function() {
        document.body.style.backgroundColor = input.value;
    });
});
var acc = document.getElementsByClassName("accordion");


for (var i=0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var accordionChildContainer = this.nextElementSibling;

        var children = accordionChildContainer.children;
        for (var x=0; x < accordionChildContainer.childElementCount; x++) {
            if (children[x].style.display === "block") {
                children[x].style.display = "none";
            } else {
                children[x].style.display = "block";
            }
        }
    });
}


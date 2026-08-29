const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");


function startSimulation() {

    modalTitle.innerText = "AR Safety Simulation";

    modal.style.display = "flex";
}


function openModule(moduleName) {

    modalTitle.innerText = moduleName;

    modal.style.display = "flex";
}


function closeModal() {

    modal.style.display = "none";
}


function launchAR() {

    alert(
        "AR Simulation Started!\n\n" +
        "Point your device at the training environment " +
        "to begin identifying hazards."
    );

    closeModal();
}


/* CLOSE MODAL */

window.addEventListener("click", function(event) {

    if (event.target === modal) {

        closeModal();

    }

});


/* SIDEBAR NAVIGATION */

const navButtons =
    document.querySelectorAll(".nav-btn");


navButtons.forEach(button => {

    button.addEventListener("click", function() {

        navButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        this.classList.add("active");

    });

});
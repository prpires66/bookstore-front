document.addEventListener("DOMContentLoaded", function() {
    // IDs do campo de senha e do ícone
    var campoSenhaID = "senha";
    var iconeID = "show_password";

    // Adiciona event listener para mostrar/ocultar senha quando o ícone é clicado
    document.getElementById(iconeID).addEventListener("mousedown", function() {
        show(campoSenhaID, iconeID);
    });

    document.getElementById(iconeID).addEventListener("mouseup", function() {
        hide(campoSenhaID, iconeID);
    });

    document.getElementById(iconeID).addEventListener("mouseout", function() {
        hide(campoSenhaID, iconeID);
    });
});

function show(inputFieldID, iconID) {
    var inputField = document.getElementById(inputFieldID);
    var icon = document.getElementById(iconID);

    // Change input type to "text"
    inputField.type = "text";

    // Change icon class to show open eye
    icon.classList.remove("bi-eye-slash");
    icon.classList.add("bi-eye");
}

function hide(inputFieldID, iconID) {
    var inputField = document.getElementById(inputFieldID);
    var icon = document.getElementById(iconID);

    // Change input type to "password"
    inputField.type = "password";

    // Change icon class to show closed eye
    icon.classList.remove("bi-eye");
    icon.classList.add("bi-eye-slash");
}

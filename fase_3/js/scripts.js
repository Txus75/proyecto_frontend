//Constante
const REGEX = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

//Búsqueda de productos
$("#searchButton").on("click", searchBooks);
$("#search").on("keyup", searchBooks);
function searchBooks() {
    let searchField = $("#search").val();
    let searchClass = $("#search");
    if (searchField.length <= 3) {
        searchClass.removeClass("is-valid");
        searchClass.addClass("is-invalid");
    } else {
        searchClass.removeClass("is-invalid");
        searchClass.addClass("is-valid");
    }
}

//Registro de usuario
$("#logIn").on("click", function() {
    let userMail = $("#userMail").val();
    let userPassword =$("#password").val();
    let varUser = false;
    let varPassword = false;
    if (userMail.length === 0 || !REGEX.test(userMail)) {
        $("#userMail").removeClass("is-valid");
        $("#userMail").addClass("is-invalid");
        varUser = false;
    } else {
        $("#userMail").removeClass("is-invalid");
        $("#userMail").addClass("is-valid");
        varUser = true;
    }
    if (userPassword.length === 0) {
        $("#password").removeClass("is-valid");
        $("#password").addClass("is-invalid");
        varPassword = false;
    } else {
        $("#password").removeClass("is-invalid");
        $("#password").addClass("is-valid");
        varPassword = true;
    }
    if (varUser && varPassword) {
        $("#logIn").attr("data-dismiss", "modal");
    }
});

//Formulario de registro
function inputUserName() {
    let userName = $("#userName").val()
    if (userName.length === 0) {
        $("#userName").removeClass("is-valid");
        $("#userName").addClass("is-invalid");
        $("#userNameWarning").text("Es necesario rellenar este campo.");
        return false;
    } else {
        $("#userName").removeClass("is-invalid");
        $("#userName").addClass("is-valid");
        $("#userNameWarning").html("&nbsp;");
        return true;
    }
}
function inputMail() {
    let mail = $("#mail").val()
    if (mail.length === 0 || !REGEX.test(mail)) {
        $("#mail").removeClass("is-valid");
        $("#mail").addClass("is-invalid");
        $("#mailWarning").text("Es necesario rellenar este campo y debe de tener una dirección e-mail válida.");
        return false;
    } else {
        $("#mail").removeClass("is-invalid");
        $("#mail").addClass("is-valid");
        $("#mailWarning").html("&nbsp;");
        return true;
    }
}
function inputPassword1() {
    let password1 = $("#password1").val()
    if (password1.length === 0) {
        $("#password1").removeClass("is-valid");
        $("#password1").addClass("is-invalid");
        $("#password1Warning").text("Es necesario rellenar este campo.");
        return false;
    } else {
        $("#password1").removeClass("is-invalid");
        $("#password1").addClass("is-valid");
        $("#password1Warning").html("&nbsp;");
        return true;
    }
}
function inputPassword2() {
    let password1 = $("#password1").val()
    let password2 = $("#password2").val()
    if (password2.length === 0) {
        $("#password2").removeClass("is-valid");
        $("#password2").addClass("is-invalid");
        $("#password2Warning").text("Es necesario rellenar este campo.");
        return false;
    } else if (password1 !== password2) {
        $("#password2").removeClass("is-valid");
        $("#password2").addClass("is-invalid");
        $("#password2Warning").text("Los campos de contraseña no coinciden.");
        return false;
    } else {
        $("#password2").removeClass("is-invalid");
        $("#password2").addClass("is-valid");
        $("#password2Warning").html("&nbsp;");
        return true;
    }
}
function selectProvincia() {
    let provincia = $("#provincia").val()
    if (provincia === "0") {
        $("#provincia").removeClass("is-valid");
        $("#provincia").addClass("is-invalid");
        $("#provinciaWarning").text("Es necesario seleccionar una provincia.");
        return false;
    } else {
        $("#provincia").removeClass("is-invalid");
        $("#provincia").addClass("is-valid");
        $("#provinciaWarning").html("&nbsp;");
        return true;
    }
}
function inputCp() {
    let cp = $("#cp").val()
    if (cp.length === 0) {
        $("#cp").removeClass("is-valid");
        $("#cp").addClass("is-invalid");
        $("#cpWarning").text("Es necesario rellenar este campo.");
        return false;
    } else if (cp.length !== 5) {
        $("#cp").removeClass("is-valid");
        $("#cp").addClass("is-invalid");
        $("#cpWarning").text("El Código Postal debe de tener 5 dígitos.");
        return false;
    } else {
        $("#cp").removeClass("is-invalid");
        $("#cp").addClass("is-valid");
        $("#cpWarning").html("&nbsp;");
        return true;
    }
}
$("#userName").on("blur", inputUserName);
$("#mail").on("blur", inputMail);
$("#password1").on("blur", inputPassword1);
$("#password2").on("blur", inputPassword2);
$("#provincia").on("blur", selectProvincia);
$("#cp").on("blur", inputCp);
$("#submitForm").on("click", function(event) {
    event.preventDefault();
    let booleanUserName = inputUserName();
    let booleanMail = inputMail();
    let booleanPassword1 = inputPassword1();
    let booleanPassword2 = inputPassword2();
    let booleanProvincia = selectProvincia();
    let booleanCp = inputCp();
    if (booleanUserName && booleanMail && booleanPassword1 && booleanPassword2 && booleanProvincia && booleanCp) {
        alert("Formulario enviado.");
    }
});

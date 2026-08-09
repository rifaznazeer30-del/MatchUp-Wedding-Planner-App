// =============================
// SPLASH SCREEN
// =============================

const getStarted = document.getElementById("getStarted");

if (getStarted) {
    getStarted.addEventListener("click", function () {
        window.location.href = "login.html";
    });
}


// =============================
// PASSWORD SHOW / HIDE
// =============================

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

if (togglePassword && password) {

    togglePassword.addEventListener("click", function () {

        if (password.type === "password") {

            password.type = "text";

            togglePassword.innerHTML =
                '<i class="fa-solid fa-eye-slash"></i>';

        } else {

            password.type = "password";

            togglePassword.innerHTML =
                '<i class="fa-solid fa-eye"></i>';

        }

    });

}


// =============================
// LOGIN BUTTON
// =============================

const loginButton = document.getElementById("loginButton");

if (loginButton) {

    loginButton.addEventListener("click", function () {

        const email = document.getElementById("email").value;
        const passwordValue = document.getElementById("password").value;

        if (email === "" || passwordValue === "") {

            alert("Please enter your email and password.");

        } else {

            window.location.href = "dashboard.html";

        }

    });

}
// =============================
// SIGN UP PASSWORD SHOW/HIDE
// =============================

const signupPasswordEye =
    document.getElementById("signupPasswordEye");

const signupPassword =
    document.getElementById("signupPassword");

if (signupPasswordEye && signupPassword) {

    signupPasswordEye.addEventListener("click", function () {

        if (signupPassword.type === "password") {

            signupPassword.type = "text";

            signupPasswordEye.innerHTML =
                '<i class="fa-solid fa-eye-slash"></i>';

        } else {

            signupPassword.type = "password";

            signupPasswordEye.innerHTML =
                '<i class="fa-solid fa-eye"></i>';

        }

    });

}


// =============================
// CONFIRM PASSWORD SHOW/HIDE
// =============================

const confirmPasswordEye =
    document.getElementById("confirmPasswordEye");

const confirmPassword =
    document.getElementById("confirmPassword");

if (confirmPasswordEye && confirmPassword) {

    confirmPasswordEye.addEventListener("click", function () {

        if (confirmPassword.type === "password") {

            confirmPassword.type = "text";

            confirmPasswordEye.innerHTML =
                '<i class="fa-solid fa-eye-slash"></i>';

        } else {

            confirmPassword.type = "password";

            confirmPasswordEye.innerHTML =
                '<i class="fa-solid fa-eye"></i>';

        }

    });

}


// =============================
// SIGN UP - CONTINUE
// =============================

const continueButton =
    document.getElementById("continueButton");

if (continueButton) {

    continueButton.addEventListener("click", function () {

        const fullName =
            document.getElementById("fullName").value;

        const email =
            document.getElementById("signupEmail").value;

        const mobile =
            document.getElementById("mobileNumber").value;

        const password =
            document.getElementById("signupPassword").value;

        const confirm =
            document.getElementById("confirmPassword").value;

        const passwordError =
            document.getElementById("passwordError");


        // Check passwords

        if (password !== confirm) {

            passwordError.style.visibility = "visible";

            return;
        }


        // Check empty fields

        if (
            fullName === "" ||
            email === "" ||
            mobile === "" ||
            password === "" ||
            confirm === ""
        ) {

            alert("Please complete all fields.");

            return;
        }


        // Successful sign up

        passwordError.style.visibility = "hidden";

        window.location.href = "dashboard.html";

    });

}
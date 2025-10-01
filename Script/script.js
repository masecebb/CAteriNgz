let menu = document.querySelector("#logomenu");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
};

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const name = document.querySelector('input[placeholder="Name"]').value.trim();
        const email = document.querySelector('input[placeholder="Email"]').value.trim();
        const address = document.querySelector('input[placeholder="Address"]').value.trim();
        const gender = document.querySelector('input[placeholder="Gender"]').value.trim();
        const DOB = document.querySelector('input[placeholder="Date of birth"]').value.trim();

        let isValid = true;

        // Name validation
        if (name === '') {
            isValid = false;
            alert('Please input your name!');
        }

        // Email validation
        if (email.indexOf('@') === -1 || email.indexOf('.') === -1 || email.indexOf('@') > email.lastIndexOf('.')) {
            isValid = false;
            alert('Invalid email');
        }

        // Address validation
        if (address === '') {
            isValid = false;
            alert('Please input your address!');
        }else if (address > 10) {
            isValid = false;
            alert('Address should not be more than 10 words');
        }

        // Gender validation
        if (gender === '') {
            isValid = false;
            alert('Please input your gender!');
        }

        // Date of birth validation
        if (DOB === '') {
            isValid = false;
            alert('Please input your date of birth!');
        }

        // Will be submitted if all of the validations are true
        if (isValid) {
            form.submit();
        }
    });
    
});


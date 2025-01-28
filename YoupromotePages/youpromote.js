function menuToggle() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function dropdown() {
    document.getElementById('myDropdown').classList.toggle('show');

    window.onclick = function (e) {
        if (!e.target.matches('.dropbtw')) {
            const myDropdown = document.getElementById('myDropdown');
            if (myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
            }
        }
    };
}




function closeNav() {
    document.querySelector(".nav-links").classList.toggle("nav-hidden");
    // document.getElementById("LoginBtn").classList.toggle("activity")
    // document.getElementById("signUpBtn").classList.toggle("activity")  

 }

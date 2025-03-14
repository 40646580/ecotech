let accountEmail = document.getElementById('accountEmail');
let accountPassword = document.getElementById('accountPassword');
let signinBtn = document.getElementById('signin-page-btn');

const adminAccounts = [
    {
        email: 'finn@ecotech-scotland.co.uk',
        name: 'Finn Jordan'
    },
    {
        email: 'james@ecotech-scotland.co.uk',
        name: 'James Smith'
    },
    { 
        email: 'jack@ecotech-scotland.co.uk', 
        name: 'Jack Wilson' 
    },
    { 
        email: 'ben@ecotech-scotland.co.uk',
        name: 'Ben Bowman'
    }
];

signinBtn.addEventListener("click", function adminAccountsFunction() {
    let found = false;
    let currentUser = null;

    adminAccounts.forEach((account) => {
        if (accountEmail.value === account.email && accountPassword.value === 'password') {
            found = true;
            currentUser = account; // Store the found account
        }
    });

    if (found) {
        // Store the user in localStorage
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        // Redirect to account page
        window.location.href = "account.html";
    } else {
        alert("Account not found");
    }
});

window.onload = function () {
    let accountContent = document.getElementById('account-content');

    // Retrieve the current user from localStorage
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        // Only display the information of the current user
        accountContent.innerHTML = `
            <div class="main-content">
                <div class="content-box">
                    <h2>Your Account</h2>
                    <p>Name: ${currentUser.name}</p>
                    <p>Email: ${currentUser.email}</p>
                    <p>Password: **********</p>
                    <p>Date of birth: 13 July 2003</p>
                </div>
            </div>
        `;
    }
};

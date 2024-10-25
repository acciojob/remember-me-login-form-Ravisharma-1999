() => {
    cy.visit(baseUrl + "/main.html");
    cy.get("form").should("exist");
    
    cy.get("label[for='username']").should("be.visible").contains("Username");
    cy.get("input#username").should("be.empty");
    
    cy.get("label[for='password']").should("be.visible").contains("Password");
    cy.get("input#password").should("be.empty");
    
    cy.get("label[for='checkbox']").should("be.visible").contains("Remember me");
    cy.get("input#checkbox").should("not.be.checked");
    
    cy.get("input#submit[value='Submit']").should("exist");
    cy.get("button#existing").should("not.be.visible");
    
    cy.window().tdocument.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const checkbox = document.getElementById('checkbox');
    const loginForm = document.getElementById('login-form');
    const existingButton = document.getElementById('existing');

    // Load saved credentials if they exist
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        usernameInput.value = savedUsername;
        passwordInput.value = savedPassword;
        existingButton.style.display = 'block'; // Show "Login as existing user" button
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (checkbox.checked) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);
    });

    existingButton.addEventListener('click', () => {
        alert(`Logged in as ${savedUsername}`);
    });
});
hen(win => {
        expect(win.localStorage.getItem("username")).to.be.null;
        expect(win.localStorage.getItem("password")).to.be.null;
    });
}

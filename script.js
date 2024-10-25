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
    
    cy.window().then(win => {
        expect(win.localStorage.getItem("username")).to.be.null;
        expect(win.localStorage.getItem("password")).to.be.null;
    });
}

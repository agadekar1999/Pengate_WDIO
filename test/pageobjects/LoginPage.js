// pageobjects/LoginPage.js
class LoginPage {
    // Selectors
    get inputEmail() { return $("//input[@id=':r0:-form-item']"); }
    get inputPassword() { return $("//input[@id=':r1:-form-item']"); }
    get btnSignIn() { return $("//button[@type='submit']"); }

    // Page Methods
    async open() {
        await browser.maximizeWindow();
        await browser.url('https://pengate-staging.quarksek.com/login');
    }

    async login(email, password) {
        await this.inputEmail.setValue(email);
        await browser.pause(3000);
        await this.inputPassword.setValue(password);
        await browser.pause(3000);
        await this.btnSignIn.click();
        await browser.pause(3000);
    }
}

module.exports = new LoginPage();

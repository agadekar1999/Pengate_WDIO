
class LoginPagePM {
    // Locators
    get inputEmail() {
        return $("//input[@id=':r0:-form-item']"); 
    }

    get inputPassword() {
        return $("//input[@id=':r1:-form-item']");
    }

    get btnSignIn() {
        return $("//button[@type='submit']"); // Text-based locator
    }

    // Actions
    async open() {
        await browser.maximizeWindow();

        await browser.url('https://pengate-staging.quarksek.com/login');
    }

    async login(email, password) {
        await browser.pause(3000);
        await this.inputEmail.setValue(email);
        await browser.pause(3000);
        await this.inputPassword.setValue(password);
        await browser.pause(3000);
        await this.btnSignIn.click();
    }
}

module.exports = new LoginPagePM();

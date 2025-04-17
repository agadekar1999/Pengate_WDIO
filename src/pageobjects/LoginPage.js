class LoginPage {

    get inputEmail() {
        return $("//input[@id=':r0:-form-item']");
    }

    get inputPassword() {
        return $("//input[@id=':r1:-form-item']");
    }

    get btnSignIn() {
        return $("//button[@type='submit']");
    }


    async open() {
        await browser.maximizeWindow();
        await browser.url('https://pengate-staging.quarksek.com/login');
    }

    async login(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSignIn.click();
    }
}


export default new LoginPage();

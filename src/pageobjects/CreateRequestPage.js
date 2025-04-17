class CreateRequestPage {
    get el() {
        return {
            choosePlanBtn: $("//tbody/tr/td[2]/button[1]"),
            requestName: $("//input[@title='Request Name']"),
            targetUrl: $("//input[@title='Target URL']"),
            username: $("//input[@title='Username ']"),
            password: $("//input[@title='Password ']"),
            submitBtn: $("//button[normalize-space()='Submit']")
        };
    }

    async clickChoosePlan() {
        await this.el.choosePlanBtn.scrollIntoView();
        await this.el.choosePlanBtn.click();
    }

    async fillFormDetails({ requestName, targetUrl, username, password }) {
        await this.el.requestName.setValue(requestName);
        await this.el.targetUrl.setValue(targetUrl);
        await this.el.username.setValue(username);
        await this.el.password.setValue(password);
        await this.el.submitBtn.scrollIntoView();
        await this.el.submitBtn.click();
    }
}

export default new CreateRequestPage();

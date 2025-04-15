// pageobjects/provide-details-page.js

class ProvideDetailsPage {
    // Input fields
    get inputRequestName() { return $("//input[@title='Request Name']"); }
    get inputTargetUrl() { return $("//input[@title='Target URL']"); }
    get inputUsername() { return $("//input[@title='Username ']"); }
    get inputPassword() { return $("//input[@title='Password ']"); }

    // Buttons
    //get resetBtn() { return $("//button[normalize-space()='reset']"); }
    get submitBtn() { return $("//button[normalize-space()='Submit']"); }

    
    //get backBtn() { return $("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/button[2]"); }

    // Scroll to bottom
    async scrollToBottom() {
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await browser.pause(5000); // brief wait for elements to appear
    }

    // Fill form details
    async fillFormDetails({ requestName, targetUrl, username, password }) {
        await this.inputRequestName.setValue(requestName);
        await browser.pause(3000);
        await this.inputTargetUrl.setValue(targetUrl);
        await browser.pause(3000);
        await this.inputUsername.setValue(username);
        await browser.pause(3000);
        await this.inputPassword.setValue(password);
    }

    async scrollToElement()
    //async scrollToElement(element) 
    {
        await element.scrollIntoView();
        await browser.pause(3000); // slight delay for UI to settle
    }
    // Click Reset
    async clickReset() {
        await this.submitBtn.waitForDisplayed({ timeout: 8000 });
        await browser.execute("arguments[0].click();", await this.submitBtn);

        //await this.resetBtn.click();
        await this.submitBtn.click();
        await browser.pause(3000);
    }

    // Click Back
    /*async clickBack() {
        await this.backBtn.waitForDisplayed({ timeout: 8000 });
        await browser.execute("arguments[0].click();", await this.backBtn);

        await this.backBtn.click();
    }*/

        
    
}

module.exports = new ProvideDetailsPage();

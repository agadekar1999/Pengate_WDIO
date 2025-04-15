

class NewRequestPage {
    
    
    get choosePlanBtn() {
        return $("//tbody/tr/td[2]/button[1]"); 
    }

    // Action: Scroll to bottom
    async scrollToBottom() {
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await browser.pause(3000); // short wait to let UI stabilize
    }

    // Action: Click Choose Plan button
    async clickChoosePlan() {
        await this.choosePlanBtn.waitForDisplayed({ timeout: 5000 });
        await browser.pause(3000);
        await this.choosePlanBtn.click();
        await browser.pause(3000);
    }
}

module.exports = new NewRequestPage();

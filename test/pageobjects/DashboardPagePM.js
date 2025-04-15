
class DashboardPagePM {
    // Locators
    get dashboardText() {
        return $("//h1[normalize-space()='Pengate']");
    }

    get companyName() {
        return $("//h1[normalize-space()='Technologies']");
    }

    get companyLogo() {
        return $("//img[@class='h-12 w-12']");
    }

    /*get reviewPM() {
        return $("//*[name()='path' and contains(@d,'M5 5h2v3h1')]");
    }*/

    get planHold() {
        return $("//tbody/tr[1]/td[9]/div[1]/div[2]/span[1]/div[1]//*[name()='svg']"); // Assuming clicking on 'Plan' header opens dropdown
    }

    get addComment() {
        return $("//textarea[@placeholder='Comments']"); 
    }

    get clickOnHold() {
        return $("//button[normalize-space()='Hold']"); 
    }

    get planFilter() {
        return $("//span[normalize-space()='plan']"); 
    }

    get basicCheckbox() {
        return $("//span[normalize-space()='basic']"); 
    }

    get applyButton() {
        return $("//button[normalize-space()='apply']");
    }

    // Actions
    async validateDashboardLoaded() {
        await browser.pause(5000); // wait for 5 sec
        await expect(this.dashboardText).toBeDisplayed();
        await expect(this.companyName).toBeDisplayed();
        await expect(this.companyLogo).toBeDisplayed();
    }

    async filterByBasicPlan() {
        //await this.reviewPM.click();
        //await browser.pause(5000);
        
        await this.planHold.click();
        await browser.pause(5000);
        await this.addComment.setValue("ABCDEFGH")
        await browser.pause(5000);
        await this.clickOnHold.click();
        //await this.planFilter.click();
        //await browser.pause(5000);
        //await this.basicCheckbox.click();
        //await this.applyButton.click();
    }
}

module.exports = new DashboardPagePM();

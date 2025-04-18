class DashboardPage {

    get pengateTitle() { return $("//h1[contains(@class,'text-3xl font-poppins font-bold text-clr-primary')]"); }
    get companyLogo() { return $("//img[@class='h-12 w-12']"); }
    get newRequestBtn() { return $("//button[@class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white hover:bg-opacity-70 h-10 px-4 py-2 bg-[#5356FF] select-none ml-auto']"); }

    async isPengateVisible() {
        return await this.pengateTitle.isDisplayed();
        await browser.pause(2000);

    }

    async isLogoDisplayed() {
        return await this.companyLogo.isDisplayed();
    }

    async isNewRequestVisible() {
        return await this.newRequestBtn.isDisplayed();
    }

    async clickNewRequest() {
        await this.newRequestBtn.click();

    }
}

export default new DashboardPage();

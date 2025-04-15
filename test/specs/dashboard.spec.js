
const LoginPage = require('../pageobjects/LoginPage');
const DashboardPage = require('../pageobjects/DashboardPage');

describe('Dashboard Verification After Login', () => {
    it('should login and verify dashboard elements', async () => {
        await LoginPage.open();
        await LoginPage.login('amogsiddha@quarksek.com', 'Amogsiddha@11');

        // Validate Pengate title
        expect(await DashboardPage.isPengateVisible()).toBe(true);

        // Validate Company Logo
        expect(await DashboardPage.isLogoDisplayed()).toBe(true);

        // Validate New Request button
        expect(await DashboardPage.isNewRequestVisible()).toBe(true);

        // Click New Request button
        await DashboardPage.clickNewRequest();

        
        console.log('✅ Successfully verified dashboard and clicked New Request.');
    });
});

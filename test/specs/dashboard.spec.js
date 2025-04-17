/*import LoginPage from '../../src/pageobjects/LoginPage.js';
import DashboardPage from '../../src/pageobjects/DashboardPage.js';

describe('Dashboard Verification After Login', () => {
    it('should login and verify dashboard', async () => {
        await LoginPage.open();
        await LoginPage.login('amogsiddha@quarksek.com', 'Amogsiddha@11');

        expect(await DashboardPage.isPengateVisible()).toBeTrue();
        expect(await DashboardPage.isLogoDisplayed()).toBeTrue();
        expect(await DashboardPage.isNewRequestVisible()).toBeTrue();

        await DashboardPage.clickNewRequest();
        console.log('✅ Dashboard verified & New Request clicked.');
    });
});*/


import LoginPage from '../../src/pageobjects/LoginPage.js';
import DashboardPage from '../../src/pageobjects/DashboardPage.js';

describe('Dashboard Verification After Login', () => {
    it('should login and verify dashboard @smoke', async () => {
        await LoginPage.open();
        await LoginPage.login('amogsiddha@quarksek.com', 'Amogsiddha@11');

        expect(await DashboardPage.isPengateVisible()).toBe(false);
        expect(await DashboardPage.isLogoDisplayed()).toBe(false);
        expect(await DashboardPage.isNewRequestVisible()).toBe(false);

        await DashboardPage.clickNewRequest();
        console.log('✅ Dashboard verified & New Request clicked.');
    });
});


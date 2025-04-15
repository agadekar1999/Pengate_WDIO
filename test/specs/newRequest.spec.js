// specs/new-request.spec.js

const LoginPage = require('../pageobjects/LoginPage');
const DashboardPage = require('../pageobjects/DashboardPage');
const NewRequestPage = require('../pageobjects/NewRequestPage');

describe('New Request Feature - Plan Selection', () => {
    it('should login, go to New Request and choose a plan', async () => {
        await LoginPage.open();
        await LoginPage.login('amogsiddha@quarksek.com', 'Amogsiddha@11');

        // Dashboard check and New Request
        expect(await DashboardPage.isNewRequestVisible()).toBe(true);
        await DashboardPage.clickNewRequest();

        // Scroll and Choose Plan
        await NewRequestPage.scrollToBottom();
        await NewRequestPage.clickChoosePlan();

        console.log('✅ Successfully clicked Choose Plan after scrolling.');
    });
});

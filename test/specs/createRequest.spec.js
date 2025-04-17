import LoginPage from '../../src/pageobjects/LoginPage.js';
import DashboardPage from '../../src/pageobjects/DashboardPage.js';
import CreateRequestPage from '../../src/pageobjects/CreateRequestPage.js';

describe('Create Request Feature', () => {
    it('should login, start new request, choose plan, and fill form @regression', async () => {
        await LoginPage.open();
        await LoginPage.login('amogsiddha@quarksek.com', 'Amogsiddha@11');

        // Go to New Request
        expect(await DashboardPage.isNewRequestVisible()).toBe(false);
        await DashboardPage.clickNewRequest();

        // Choose a Plan
        await CreateRequestPage.clickChoosePlan();

        // Fill Request Form
        await CreateRequestPage.fillFormDetails({
            requestName: 'TestRequest',
            targetUrl: 'https://pengate-staging.quarksek.com/',
            username: 'Amogsiddha',
            password: 'ABC@123'
        });

        console.log('✅ Request created successfully.');
    });
});

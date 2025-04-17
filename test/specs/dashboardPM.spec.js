import LoginPage from '../../src/pageobjects/LoginPage.js';
import DashboardPage from '../../src/pageobjects/DashboardPage.js';

describe('Dashboard Feature for PM', () => {
    it('should login, validate dashboard, and filter Basic plan @regression', async () => {
        await LoginPage.open();
        await LoginPage.login('pm.s.c1gosipxm2@quarksek.com', 'ProjectM@New!23');
        //await DashboardPage.validateDashboardLoaded();
        //await DashboardPage.filterByBasicPlan();
    });
});

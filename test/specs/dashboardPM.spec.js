
const loginPagePM = require('../pageobjects/LoginPagePM');
const dashboardPagePM = require('../pageobjects/DashboardPagePM');

describe('Dashboard Feature for PM', () => {
    it('should validate dashboard elements and filter by Basic plan', async () => {
        // Step 1: Login
        await loginPagePM.open();
        await loginPagePM.login(
            'pm.s.c1gosipxm2@quarksek.com',
            'ProjectM@New!23'
        );

        // Step 2: Validate dashboard
        await dashboardPagePM.validateDashboardLoaded();

        // Step 3: Filter plan
        await dashboardPagePM.filterByBasicPlan();

        
    });
});

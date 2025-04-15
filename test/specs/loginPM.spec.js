

const loginPagePM = require('../pageobjects/LoginPagePM');

describe('Login Feature for PM', () => {
    it('should login with valid credentials', async () => {
        await loginPagePM.open();

        // Login action
        await loginPagePM.login(
            'pm.s.c1gosipxm2@quarksek.com',
            'ProjectM@New!23'
        );

        // Assertion – you can improve this based on landing page after login
        //await expect(browser).toHaveUrlContaining('dashboard'); // Or check for some element on next page
    });
});

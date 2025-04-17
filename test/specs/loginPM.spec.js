

//import LoginPage from '../../src/pageobjects/LoginPagePM';
import LoginPage from '../../src/pageobjects/LoginPage';


describe('Login Feature for PM', () => {
    it('should login with valid credentials @smoke', async () => {
        await LoginPage.open();

        // Login action
        await LoginPage.login(
            'pm.s.c1gosipxm2@quarksek.com',
            'ProjectM@New!23'
        );

        // Assertion – you can improve this based on landing page after login
        //await expect(browser).toHaveUrlContaining('dashboard'); // Or check for some element on next page
    });
});


const LoginPage = require('../pageobjects/LoginPage');

describe('Pengate Login Test', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('amogsiddha@quarksek.com', 'Amogsiddha@11');

        // Assertion: we can verify successful login by checking URL or any dashboard element
        //await expect(browser).toHaveUrlContaining('/dashboard'); // Update based on post-login URL
    });
});

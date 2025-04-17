
import LoginPage from '../../src/pageobjects/LoginPage';
//import CommonBase from '../utils/CommonBase'; // Removed as it is unused
//import CommonBase from '../../src/utils/CommonBase'; // Removed as it is unused

describe('Pengate Login Test', () => {
    it('should login with valid credentials @smoke @regression', async () => {
        await LoginPage.open();

        await LoginPage.login('amogsiddha@quarksek.com', 'Amogsiddha@11');

        // Assertion: we can verify successful login by checking URL or any dashboard element
        //await expect(browser).toHaveUrlContaining('/dashboard'); // Update based on post-login URL
    });
}); 



/*import CommonBase from '../../src/utils/CommonBase.js'; // ✅ This is correct!

describe('Pengate Login Test', () => {
    it('should login with valid credentials', async () => {
        await CommonBase.loginFlow('amogsiddha@quarksek.com', 'Amogsiddha@11');

        // Optional: Add assertion to verify you landed on the Dashboard
        // await expect(browser).toHaveUrlContaining('/dashboard'); // Adjust based on actual URL
    });
});*/


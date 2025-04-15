// specs/provide-details.spec.js

const LoginPage = require('../pageobjects/LoginPage');
const DashboardPage = require('../pageobjects/DashboardPage');
const NewRequestPage = require('../pageobjects/NewRequestPage');
const ProvideDetailsPage = require('../pageobjects/ProvideDetailsPage');
//const ChoosePlanPage = require('../pageobjects/ProvideDetailsPage');

describe('Provide Details Feature - Fill Form and Reset/Back', () => {
    it('should fill form details, click reset and back', async () => {
        await LoginPage.open();
        await LoginPage.login('amogsiddha@quarksek.com', 'Amogsiddha@11');

        await DashboardPage.clickNewRequest();
        await NewRequestPage.scrollToBottom();
        await NewRequestPage.clickChoosePlan();

        await ProvideDetailsPage.scrollToBottom();

        await ProvideDetailsPage.fillFormDetails({
            requestName: 'ABCDEFGH',
            targetUrl: 'https://pengate-staging.quarksek.com/',
            username: 'Amogsiddha',
            password: 'ABC@123'
        });

        //await ProvideDetailsPage.scrollToBottom();

        // Click Reset and Back
        await ProvideDetailsPage.scrollToBottom();
        await ProvideDetailsPage.clickReset();
       // await ProvideDetailsPage.clickReset();
        console.log('✅ Form has been reset.');


        /*await ProvideDetailsPage.scrollToBottom();
        await ProvideDetailsPage.clickBack();
        console.log('✅ Navigated back from Provide Details page.');*/
    });
});

// File: utils/CommonActions.js

const LoginPage = require('../pageobjects/LoginPage');
const DashboardPage = require('../pageobjects/DashboardPage');
const NewRequestPage = require('../pageobjects/NewRequestPage');
const ProviderDetailsPage = require('../pageobjects/ProviderDetailsPage');

module.exports = {

  // STEP 1: Login only
  async loginFlow(username, password) {
    await LoginPage.open();
    await LoginPage.login(username, password);
    await DashboardPage.waitForLoad();
  },

  // STEP 2: After dashboard, go to New Request
  async goToNewRequestPage() {
    await DashboardPage.clickNewRequest();
    await NewRequestPage.waitForLoad();
  },

  // STEP 3: Fill provider details
  async fillProviderDetails(data) {
    await NewRequestPage.enterProviderInfo(data);
    await NewRequestPage.clickNext();
    await ProviderDetailsPage.waitForLoad();
    await ProviderDetailsPage.fillDetails(data);
  },

  // BONUS: Full Flow if you want to use it in full
  async fullEndToEndFlow(username, password, providerData) {
    await this.loginFlow(username, password);
    await this.goToNewRequestPage();
    await this.fillProviderDetails(providerData);
  }
};

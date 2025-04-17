exports.config = {
  runner: "local",
  specs: [
    "./test/specs/login.spec.js",
    "./test/specs/dashboard.spec.js",
    "./test/specs/createRequest.spec.js",
    "./test/specs/loginPM.spec.js",
    "./test/specs/dashboardPM.spec.js",
  ],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          "--headless=new",
          "--disable-gpu",
          "--window-size=1920,1080",
          "--no-sandbox",
        ],
      },
    },
  ],
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [],
  framework: "mocha",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
    [
      "monocart-reporter",
      {
        name: "Pengate WebdriverIO UI Test Report",
        outputFile: "./monocart-report/index.html",
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
    retries: 0,
    //grep: '@smoke'
  },
  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (!passed) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const filename = `ERROR_${test.title.replace(
        /\s+/g,
        "_"
      )}_${timestamp}.png`;
      const filePath = `./errorShots/${filename}`;
      await browser.saveScreenshot(filePath);
      const { addAttachment } = require("@wdio/allure-reporter").default;
      addAttachment(
        "Screenshot on Failure",
        Buffer.from(await browser.takeScreenshot(), "base64"),
        "image/png"
      );
    }
  },
};

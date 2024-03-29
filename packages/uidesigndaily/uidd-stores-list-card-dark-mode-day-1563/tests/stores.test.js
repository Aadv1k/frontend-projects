const path = require("path");
const pptr = require("puppeteer");

describe("A test suite to assess the behaviour of the list", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await pptr.launch();
    page = await browser.newPage();
    await page.goto(`file:///${path.join(__dirname, "../dist/index.html")}`);
  });

  it("Should disallow more than 5 numbers in postal code", async () => {
    await page.type("#postalInp", "123456", { delay: 20 });
    setTimeout(async () => {
      const contains = await page.$eval("#viewAll", (e) =>
        e.classList.contains("btn--disabled")
      );
      expect(contains).toBe(false);
      await browser.close();
    }, 1000);
  });
});

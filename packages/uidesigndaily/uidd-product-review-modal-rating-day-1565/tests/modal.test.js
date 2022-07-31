const puppeteer = require("puppeteer");
const path = require("path")

describe("A test suite to assess the behaviour of the modal", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto("file:///" + path.resolve(__dirname, "../dist/index.html"));
  });

  it("Should open the modal", async () => {
    await page.click("button#openModal");
    const modal = await page.$eval("div.modal", (elem) =>
      elem.classList.contains("open")
    );
    expect(modal).toBe(true);
    await browser.close();
  });

  it("Should close the modal", async () => {
    await page.click("button#openModal");
    setTimeout(async () => {
      await page.click("button#closeModal");
      const modal = await page.$eval("div.modal", (elem) =>
        elem.classList.contains("close")
      );
      expect(modal).toBe(true);
      await browser.close();
    }, 2000);
  });
});

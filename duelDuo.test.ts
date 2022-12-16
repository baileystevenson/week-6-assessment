
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')


const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(5000)
})

const addToDuo = async (driver, title)=> {
    await driver.findElement(By.xpath(`//section/div`)).sendKeys(title)
    await driver.findElement(By.xpath('//button')).click()
    const addToDuo = await driver.findElement(By.xpath('//li/span')).getText()
    await driver.sleep(5000)

module.exports = {
    addToDuo
}
}
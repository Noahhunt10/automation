const { By } = require('selenium-webdriver')

const addMovie = async (driver, title) => {
    await driver.findElement(By.xpath('//input')).sendKeys(title)
    await driver.findElement(By.xpath('//button')).click()
    const movie = await driver.findElement(By.xpath('//li/span')).getText()
   
    expect(movie).toBe(title)
}
const checkWatched = async (driver) => {
   const movie = await driver.findElement(By.xpath('//span'))
   await movie.click()
   const watchedMessage = await driver.findElement(By.xpath('//aside')).getText()
   
   expect(watchedMessage).toBe(`titanic watched!`)
}


const deleteMovie = async (driver, title) => {
    await driver.findElement(By.xpath(`//*[@id='${title}']`)).click()
}


module.exports = {
    addMovie,
    checkWatched,
    deleteMovie

}

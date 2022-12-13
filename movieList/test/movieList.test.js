const { Builder, Capabilities } = require('selenium-webdriver')
const { addMovie, checkWatched, deleteMovie } = require('./movieTests')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

let movie = 'titanic'

beforeAll(async () => [
    await driver.get('http://127.0.0.1:5500/week_6/day2/automation/movieList/index.html')
])

afterAll(async () => {
    await driver.quit()
})
test('type word into input', async() => {
    addMovie(driver, movie)
    await driver.sleep(2000)
})
test('check movie watched', async() => {
    checkWatched(driver)
    await driver.sleep(2000)
})

test('delete movie from list', async() => {
    deleteMovie(driver, movie)
    await driver.sleep(2000)
})

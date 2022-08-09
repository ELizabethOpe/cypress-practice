import {LoginPage} from "../PageObjectModelling/LoginPage.cy"

const loginPage = new LoginPage ()

it('login test', () => {

    loginPage.navigate('https://trytestingthis.netlify.app/')
    loginPage.enterUsername('test')
    loginPage.enterPassword('test')
    loginPage.clickLogin()
   
})
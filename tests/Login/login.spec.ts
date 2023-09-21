import {test,expect} from '@playwright/test'
import { loginPage } from './login.page'

test ('check that login function is valid' , async ({page}) => {

    const login=new loginPage(page);
    await login.navigateToLoginPage('http://backoffice-systemtest.andalusiagroup.net:8090');
    await login.performLogin('nada sakr employee' , '12345' , 'http://backoffice-systemtest.andalusiagroup.net:8090/dashboard')
    await expect(page).toHaveURL('http://backoffice-systemtest.andalusiagroup.net:8090/dashboard');
    
    await page.context().storageState({path: './Auth.json'})
})
import {Page,Locator} from '@playwright/test'

export class loginPage {

    readonly page: Page;
    readonly loginUserNameField: Locator;
    readonly loginPassWordField: Locator;
    readonly loginsubmitBtn: Locator

constructor(page:Page)
{
    this.page = page;
    this.loginUserNameField = page.locator('#userName');
    this.loginPassWordField = page.locator('#password');
    this.loginsubmitBtn = page.locator('[type="submit"]');
}




//methods

async navigateToLoginPage (URL:string)
{
    //URL= 'http://backoffice-systemtest.andalusiagroup.net:8090'
    await this.page.goto(URL)
}


async performLogin (userNameVar:string , passwordVar:string , dashbordUrl:string) 
{
   
    //dashbordUrl='http://backoffice-systemtest.andalusiagroup.net:8090/dashboard'
    await this.loginUserNameField.click();
    await this.loginUserNameField.fill(userNameVar);
    await this.loginPassWordField.click();
    await this.loginPassWordField.fill(passwordVar); 
    await this.loginsubmitBtn.click();
    await this.page.waitForURL(dashbordUrl);
    await this.page.waitForLoadState("domcontentloaded");

}


}
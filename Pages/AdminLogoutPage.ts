import { Locator, Page } from "@playwright/test";

export class AdminLogoutPage{
    page:Page
    readonly logoutLink:Locator
    

    constructor(page:Page){
        this.page=page
        this.logoutLink=page.locator("#mi_logout")         
    }
    //method to click on logoutlink
    public async adminLogout(){
        await this.logoutLink.waitFor()
        await this.logoutLink.click()
    }
}
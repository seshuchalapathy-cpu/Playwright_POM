import {test as base, expect} from '@playwright/test'
import { AdminLoginPage } from "../Pages/AdminLoginPage";
import { AdminLogoutPage } from "../Pages/AdminLogoutPage";

export const test=base
test.beforeEach(async({page})=>{

    const adminlogin= new AdminLoginPage(page)
    await adminlogin.launchUrl(process.env.BASE_URL!)
    await adminlogin.login(process.env.BASE_USER!,process.env.BASE_PASS!)
    
})

test.afterEach(async({page})=>{
    const adminlogout=new AdminLogoutPage(page)
    await adminlogout.adminLogout()
})



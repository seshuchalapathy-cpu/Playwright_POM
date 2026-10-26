import {test as base, expect} from "@playwright/test"
import { AdminLoginPage } from "../Pages/AdminLoginPage"
import { AdminLogoutPage } from "../Pages/AdminLogoutPage"
import { SupplierPage } from "../Pages/SupplierPage"
import { CustomerPage } from "../Pages/CustomerPage"


type ERPFixtures={
    loginpage:AdminLoginPage
    logoutpage:AdminLogoutPage
    suppage:SupplierPage
    custpage:CustomerPage
}

export const test=base.extend<ERPFixtures>({
    loginpage: async({page}, use)=>{
    const loginpage= new AdminLoginPage(page)
    await loginpage.launchUrl(process.env.BASE_URL!)
    await loginpage.login(process.env.BASE_USER!,process.env.BASE_PASS!)
    await use(loginpage)
    },

    logoutpage:async({page,loginpage},use)=>{
    const logoutpage= new AdminLogoutPage(page)
    await use(logoutpage)
    await logoutpage.adminLogout()
    
    },

    suppage: async({page,loginpage},use)=>{
    const suppage= new SupplierPage(page)
    await suppage.navigateToAddSupplier()
    await use(suppage)

    },

    custpage: async({page,loginpage},use)=>{
    
       const custpage= new CustomerPage(page)
       await custpage.navigateToCustomer()
       await use(custpage)
    }



})

export { expect } from "@playwright/test"


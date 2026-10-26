import {test} from "../Fixtures/ERPFixtures"

test.describe("ERP Fixtures grouped Tests", ()=>{

    test("erp fixtures", async ({suppage})=>{

    await suppage.addSupplierDetails(

        "Good supplier",
            "Hyderabad",
            "Hyderabad",
            "India",
            "Raju",
            "123456",
            "g@gmail.com",
            "3333333",
            "new supplier"    
    )
    await suppage.handleAlerts()
    await suppage.supplierTable()

})

test("erp fixtures customer page", async ({custpage})=>{

    await custpage.addCustomerDetails(

        "Good supplier",
            "Hyderabad",
            "Hyderabad",
            "India",
            "Raju",
            "123456",
            "g@gmail.com",
            "3333333",
            "new supplier"    
    )
    await custpage.handleAlerts()
    await custpage.customerTable()

})

})


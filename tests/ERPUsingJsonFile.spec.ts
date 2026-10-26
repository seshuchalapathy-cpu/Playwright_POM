import {test} from "../Fixtures/ERPFixtures"
import erpdata from "../TestData/stock.json"

console.log(erpdata.suppliers)

test.describe("json test", ()=>{
    for (const sup of erpdata.suppliers) {
        test(`supplier json ${sup.SupplierName}`, async({suppage})=>{
          await  suppage.addSupplierDetails(
            sup.SupplierName,
            sup.Address,
            sup.City,
            sup.ContactPerson,
            sup.Country,
            sup.Email,
            sup.MobileNumber,
            sup.PhoneNumber,
            sup.Notes
            
          )
           await suppage.handleAlerts()
           await suppage.supplierTable()
        })
    }

    { for (const cust of erpdata.Customers) {
        test.only(`customerdata ${cust.CustomerName}`, async({custpage})=>{
            await custpage.addCustomerDetails(
                cust.CustomerName,
                cust.Address,
                cust.City,
                cust.ContactPerson,
                cust.Country,
                cust.Email,
                cust.MobileNumber,
                cust.PhoneNumber,
                cust.Notes
          )
          await custpage.handleAlerts()
          await custpage.customerTable()
        })
    
        
    }}
    
})


import path from 'path'
import {test } from '../Fixtures/ERPFixtures'
import { ExcelFileUtil } from '../Utils/ExcelFileUtil'
let suppliers:any
let customer:any
//store path of excel file
const excelpath = path.join(__dirname,"../TestData/Data.xlsx")
try {
    //get supplier sheet data'
    suppliers =ExcelFileUtil.readExcelData(excelpath,'supplier')
    customer= ExcelFileUtil.readExcelData(excelpath,'customer')
} catch (error) {
    console.log(error)
}
//console.log(suppliers)
//console.log(customer)
test.describe('ERP Inventory Modules',()=>{
    //check for supplier module
    for (const sup of suppliers) {
        test(`Validate Supplier ${sup.suppliername}`,async({suppage})=>{
            await suppage.addSupplierDetails(
                sup.suppliername,
                sup.address,
                sup.city,
                sup.country,
                sup.contactPerson,
                sup.phonenumber,
                sup.email,
                sup.mobilenumber,
                sup.Notes
            )
            await suppage.handleAlerts()
            await suppage.supplierTable()

        })
    }

     for (const cust of customer) {
        test.only(`excel with customer ${cust.customername}`, async({custpage})=>{
           await custpage.addCustomerDetails(
            cust.customername,
            cust.address,
            cust.city,
            cust.country,
            cust.contactperson,
            cust.PhoneNumber,
            cust.Email,
            cust.Mobilenumber,
            cust.Notes

           )
        })
        
       }
}

      
)
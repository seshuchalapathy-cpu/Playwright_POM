import {test} from "../Hooks/ERPHooks"
import { SupplierPage } from "../Pages/SupplierPage"
import { CustomerPage } from "../Pages/CustomerPage"

test.describe("single test", async()=>{

    test("supplier test", async ({page})=>{
        const sup= new SupplierPage(page)
        await sup.navigateToAddSupplier()
        await sup.addSupplierDetails(
            
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
        await sup.handleAlerts()
        await sup.supplierTable()
    })

     test("custpmer test", async ({page})=>{
        const cus= new CustomerPage(page)
        await cus.navigateToCustomer()
        await cus.addCustomerDetails(
            
            "Good customer",
            "Hyderabad",
            "Hyderabad",
            "India",
            "Raju",
            "123456",
            "g@gmail.com",
            "3333333",
            "new customer"        
        )

        //second way of calling with Record<string,string>
        // await cus.addCustomerDetails({
        //     customername: 'ABC Traders',
        //     address: '12 Main Street',
        //     city: 'Hyderabad',
        //     country: 'India',
        //     cperson: 'Ravi',
        //     pnumber: '9999999999',
        //     email: 'abc@test.com',
        //     mnumber: '8888888888',
        //     notes: 'test customer'  
        // })

        // //third way of calling with interface
        // await cus.addCustomerDetails(
        //     {
        //      address:"india",
        //      city:"hyferabaf",
        //      country:"india",
        //      cperson:"raman",
        //      customername:"nana",
        //      email:"k@gmail.com",
        //      mnumber:"1234567",
        //      notes:"great",
        //      pnumber:"1234567890"


        //     }
        // )

        await cus.handleAlerts()
        await cus.customerTable()
    })



})




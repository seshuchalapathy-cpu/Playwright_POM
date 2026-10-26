import { Page,Locator,expect } from "@playwright/test";

export interface CustomerData {
    customername: string,
    address: string,
    city: string,
    country: string,
    cperson: string,
    pnumber: string,
    email: string,
    mnumber: string,
    notes: string
}


export class CustomerPage{
        page:Page
        readonly clickCustomers:Locator        
        readonly clickAddIcon:Locator
        readonly captureCustomerNum:Locator
        readonly enterCustomerName:Locator
        readonly enterAddress:Locator
        readonly enterCity:Locator
        readonly enterCountry:Locator
        readonly enterContactPerson:Locator
        readonly enterPhoneNum:Locator
        readonly enterEmail:Locator
        readonly enterMobileNumber:Locator
        readonly enterNotes:Locator
        readonly clickAddBtn:Locator
        readonly clickConfirmOK:Locator
        readonly clickAlertOK:Locator
        readonly clickSearchPanel:Locator
        readonly enterSearchTextbox:Locator
        readonly clickSearchBtn:Locator
        private expNumber!: string

        constructor(page:Page){

        this.page=page
        this.clickCustomers=page.locator("#mi_a_customers")
        this.clickAddIcon=page.locator('span[data-caption="Add"]').first()
        this.captureCustomerNum=page.getByRole('textbox', { name: 'Customer Number *' })
        this.enterCustomerName=page.getByRole('textbox', { name: 'Customer Name *' })
        this.enterAddress=page.getByRole('textbox', { name: 'Address *' })
        this.enterCity=page.getByRole('textbox', { name: 'City *' })
        this.enterCountry=page.getByRole('textbox', { name: 'Country *' })
        this.enterContactPerson=page.getByRole('textbox', { name: 'Contact Person *' })
        this.enterPhoneNum=page.getByRole('textbox', { name: 'Phone Number *' })
        this.enterEmail=page.getByRole('textbox', { name: 'Email *' })
        this.enterMobileNumber=page.getByRole('textbox', { name: 'Mobile Number *' })
        this.enterNotes=page.getByRole('textbox', { name: 'Notes *' })
        this.clickAddBtn=page.locator('[id="btnAction"]')
        this.clickConfirmOK=page.locator("button.ajs-button.btn.btn-primary").last()
        this.clickAlertOK=page.locator("button.ajs-button.btn.btn-primary")
        this.clickSearchPanel=page.locator('button[data-caption="Search Panel"]')
        this.enterSearchTextbox=page.locator('input[id="psearch"]')
        this.clickSearchBtn=page.locator("button#btnsubmit")       
        }

        public async navigateToCustomer(){
            await this.clickCustomers.waitFor()
            await this.clickCustomers.click()
            await this.clickAddIcon.waitFor()
            await this.clickAddIcon.click()
        }

        public async addCustomerDetails(customername: string,
            address: string, city: string, country: string,
            cperson: string, pnumber: string, email: string,
            mnumber: string, notes: string


        ){

            await this.captureCustomerNum.waitFor()
            this.expNumber=await this.captureCustomerNum.inputValue()
            await this.enterCustomerName.waitFor()
            await this.enterCustomerName.fill(customername)
            await this.enterAddress.fill(address)
            await this.enterCity.fill(city)
            await this.enterCountry.fill(country)
            await this.enterContactPerson.fill(cperson)
            await this.enterPhoneNum.fill(pnumber)
            await this.enterEmail.fill(email)
            await this.enterMobileNumber.fill(mnumber)
            await this.enterNotes.fill(notes)
            await this.clickAddBtn.click()
            
        }

        // public async addCustomerDetails(data: Record<string,string>){
        //     await this.captureCustomerNum.waitFor()
        //         this.expNumber = await this.captureCustomerNum.inputValue()
        //         await this.enterCustomerName.waitFor()
        //         await this.enterCustomerName.fill(data.customername)
        //         await this.enterAddress.fill(data.address)
        //         await this.enterCity.fill(data.city)
        //         await this.enterCountry.fill(data.country)
        //         await this.enterContactPerson.fill(data.cperson)
        //         await this.enterPhoneNum.fill(data.pnumber)
        //         await this.enterEmail.fill(data.email)
        //         await this.enterMobileNumber.fill(data.mnumber)
        //         await this.enterNotes.fill(data.notes)
        //         await this.clickAddBtn.click()
        // }

        // //using the interface for passing in parameters
        // public async addCustomerDetails(data: CustomerData){
        //     await this.captureCustomerNum.waitFor()
        //         this.expNumber = await this.captureCustomerNum.inputValue()
        //         await this.enterCustomerName.waitFor()
        //         await this.enterCustomerName.fill(data.customername)
        //         await this.enterAddress.fill(data.address)
        //         await this.enterCity.fill(data.city)
        //         await this.enterCountry.fill(data.country)
        //         await this.enterContactPerson.fill(data.cperson)
        //         await this.enterPhoneNum.fill(data.pnumber)
        //         await this.enterEmail.fill(data.email)
        //         await this.enterMobileNumber.fill(data.mnumber)
        //         await this.enterNotes.fill(data.notes)
        //         await this.clickAddBtn.click()
        // }


         public async handleAlerts()
       {
        if(await this.clickConfirmOK.isVisible({timeout:3000}).catch(()=>false))
        {
            await this.clickConfirmOK.click()
        }
        if(await this.clickAlertOK.isVisible({timeout:3000}).catch(()=>false))
        {
            await this.clickAlertOK.click()
        }

       }

        public async customerTable()
       {
        if(!await this.enterSearchTextbox.isVisible()){
            await this.clickSearchPanel.click()
        }
        await this.enterSearchTextbox.clear()
        await this.enterSearchTextbox.fill(this.expNumber)
        await this.clickSearchBtn.click()
        const customerRow= await this.page.locator("#tbl_a_customerslist tbody tr",
            {
                hasText:this.expNumber
            }
        )
        await expect(customerRow).toBeVisible()
        console.log(`Customer number found in table: ${this.expNumber}`)
        await expect(customerRow).toContainText(this.expNumber)

       }

    


}
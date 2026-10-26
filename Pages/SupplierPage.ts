import { Locator, Page,expect } from "@playwright/test";

export class SupplierPage{

    page:Page
    readonly clickSuppliers:Locator
    readonly clickAddIcon:Locator
    readonly captureSupplierNum:Locator
    readonly enterSupplierName:Locator
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
        this.clickSuppliers=page.locator("#mi_a_suppliers")
        this.clickAddIcon=page.locator('span[data-caption="Add"]').first()
        this.captureSupplierNum=page.getByRole('textbox', { name: 'Supplier Number *' })
        this.enterSupplierName=page.getByRole('textbox', { name: 'Supplier Name *' })
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
        this.clickSearchPanel=page.locator('button[data-caption="Search Panel"][data-toggle="button"]')
        this.enterSearchTextbox=page.locator('input[id="psearch"]')
        this.clickSearchBtn=page.locator("button#btnsubmit")        
    }

    public async navigateToAddSupplier()
    {
        await this.clickSuppliers.waitFor()
        await this.clickSuppliers.click()
        await this.clickAddIcon.waitFor()
        await this.clickAddIcon.click()
    }

    public async addSupplierDetails(suppliername:string,address:string,
        city:string, country:string,cperson:string,pnumber:string,
        email:string,mnumber:string,notes:string

    )
    {
        await this.captureSupplierNum.waitFor()
        this.expNumber=await this.captureSupplierNum.inputValue()
        await this.enterSupplierName.fill(suppliername)
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

       public async supplierTable()
       {
        if(!await this.enterSearchTextbox.isVisible()){
            await this.clickSearchPanel.waitFor()
            await this.clickSearchPanel.click()
        }
        await this.enterSearchTextbox.clear()
        await this.enterSearchTextbox.fill(this.expNumber)
        await this.clickSearchBtn.click()
        const supplierRow= await this.page.locator("#tbl_a_supplierslist tbody tr",
            {
                hasText:this.expNumber
            }
        )
        await expect(supplierRow).toBeVisible()
        console.log(`Supplier number found in table: ${this.expNumber}`)
        await expect(supplierRow).toContainText(this.expNumber)

       }



}
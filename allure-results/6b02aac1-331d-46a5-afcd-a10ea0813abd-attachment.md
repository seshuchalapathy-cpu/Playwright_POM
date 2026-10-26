# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPFixtures.spec.ts >> erp fixtures
- Location: tests\ERPFixtures.spec.ts:3:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('button[data-caption="Search Panel"]')

```

# Test source

```ts
  1   | import { Locator, Page,expect } from "@playwright/test";
  2   | 
  3   | export class SupplierPage{
  4   | 
  5   |     page:Page
  6   |     readonly clickSuppliers:Locator
  7   |     readonly clickAddIcon:Locator
  8   |     readonly captureSupplierNum:Locator
  9   |     readonly enterSupplierName:Locator
  10  |     readonly enterAddress:Locator
  11  |     readonly enterCity:Locator
  12  |     readonly enterCountry:Locator
  13  |     readonly enterContactPerson:Locator
  14  |     readonly enterPhoneNum:Locator
  15  |     readonly enterEmail:Locator
  16  |     readonly enterMobileNumber:Locator
  17  |     readonly enterNotes:Locator
  18  |     readonly clickAddBtn:Locator
  19  |     readonly clickConfirmOK:Locator
  20  |     readonly clickAlertOK:Locator
  21  |     readonly clickSearchPanel:Locator
  22  |     readonly enterSearchTextbox:Locator
  23  |     readonly clickSearchBtn:Locator
  24  |     private expNumber!: string
  25  | 
  26  |     constructor(page:Page){    
  27  |         this.page=page
  28  |         this.clickSuppliers=page.locator("#mi_a_suppliers")
  29  |         this.clickAddIcon=page.locator('span[data-caption="Add"]').first()
  30  |         this.captureSupplierNum=page.getByRole('textbox', { name: 'Supplier Number *' })
  31  |         this.enterSupplierName=page.getByRole('textbox', { name: 'Supplier Name *' })
  32  |         this.enterAddress=page.getByRole('textbox', { name: 'Address *' })
  33  |         this.enterCity=page.getByRole('textbox', { name: 'City *' })
  34  |         this.enterCountry=page.getByRole('textbox', { name: 'Country *' })
  35  |         this.enterContactPerson=page.getByRole('textbox', { name: 'Contact Person *' })
  36  |         this.enterPhoneNum=page.getByRole('textbox', { name: 'Phone Number *' })
  37  |         this.enterEmail=page.getByRole('textbox', { name: 'Email *' })
  38  |         this.enterMobileNumber=page.getByRole('textbox', { name: 'Mobile Number *' })
  39  |         this.enterNotes=page.getByRole('textbox', { name: 'Notes *' })
  40  |         this.clickAddBtn=page.locator('[id="btnAction"]')
  41  |         this.clickConfirmOK=page.locator("button.ajs-button.btn.btn-primary").last()
  42  |         this.clickAlertOK=page.locator("button.ajs-button.btn.btn-primary")
  43  |         this.clickSearchPanel=page.locator('button[data-caption="Search Panel"]')
  44  |         this.enterSearchTextbox=page.locator('input[id="psearch"]')
  45  |         this.clickSearchBtn=page.locator("button#btnsubmit")        
  46  |     }
  47  | 
  48  |     public async navigateToAddSupplier()
  49  |     {
  50  |         await this.clickSuppliers.waitFor()
  51  |         await this.clickSuppliers.click()
  52  |         await this.clickAddIcon.waitFor()
  53  |         await this.clickAddIcon.click()
  54  |     }
  55  | 
  56  |     public async addSupplierDetails(suppliername:string,address:string,
  57  |         city:string, country:string,cperson:string,pnumber:string,
  58  |         email:string,mnumber:string,notes:string
  59  | 
  60  |     )
  61  |     {
  62  |         await this.captureSupplierNum.waitFor()
  63  |         this.expNumber=await this.captureSupplierNum.inputValue()
  64  |         await this.enterSupplierName.fill(suppliername)
  65  |         await this.enterAddress.fill(address)
  66  |         await this.enterCity.fill(city)
  67  |         await this.enterCountry.fill(country)
  68  |         await this.enterContactPerson.fill(cperson)
  69  |         await this.enterPhoneNum.fill(pnumber)
  70  |         await this.enterEmail.fill(email)
  71  |         await this.enterMobileNumber.fill(mnumber)
  72  |         await this.enterNotes.fill(notes)
  73  |         await this.clickAddBtn.click()
  74  |        }
  75  | 
  76  |        public async handleAlerts()
  77  |        {
  78  |         if(await this.clickConfirmOK.isVisible({timeout:3000}).catch(()=>false))
  79  |         {
  80  |             await this.clickConfirmOK.click()
  81  |         }
  82  |         if(await this.clickAlertOK.isVisible({timeout:3000}).catch(()=>false))
  83  |         {
  84  |             await this.clickAlertOK.click()
  85  |         }
  86  | 
  87  |        }
  88  | 
  89  |        public async supplierTable()
  90  |        {
  91  |         if(!await this.enterSearchTextbox.isVisible()){
> 92  |             await this.clickSearchPanel.click()
      |                                         ^ Error: locator.click: Test ended.
  93  |         }
  94  |         await this.enterSearchTextbox.clear()
  95  |         await this.enterSearchTextbox.fill(this.expNumber)
  96  |         await this.clickSearchBtn.click()
  97  |         const supplierRow= await this.page.locator("#tbl_a_supplierslist tbody tr",
  98  |             {
  99  |                 hasText:this.expNumber
  100 |             }
  101 |         )
  102 |         await expect(supplierRow).toBeVisible()
  103 |         console.log(`Supplier number found in table: ${this.expNumber}`)
  104 |         await expect(supplierRow).toContainText(this.expNumber)
  105 | 
  106 |        }
  107 | 
  108 | 
  109 | 
  110 | }
```
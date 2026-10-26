# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPFixtures.spec.ts >> erp fixtures customer page
- Location: tests\ERPFixtures.spec.ts:22:5

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('#mi_a_customers') to be visible

```

# Test source

```ts
  1   | import { Page,Locator,expect } from "@playwright/test";
  2   | 
  3   | export interface CustomerData {
  4   |     customername: string,
  5   |     address: string,
  6   |     city: string,
  7   |     country: string,
  8   |     cperson: string,
  9   |     pnumber: string,
  10  |     email: string,
  11  |     mnumber: string,
  12  |     notes: string
  13  | }
  14  | 
  15  | 
  16  | export class CustomerPage{
  17  |         page:Page
  18  |         readonly clickCustomers:Locator        
  19  |         readonly clickAddIcon:Locator
  20  |         readonly captureCustomerNum:Locator
  21  |         readonly enterCustomerName:Locator
  22  |         readonly enterAddress:Locator
  23  |         readonly enterCity:Locator
  24  |         readonly enterCountry:Locator
  25  |         readonly enterContactPerson:Locator
  26  |         readonly enterPhoneNum:Locator
  27  |         readonly enterEmail:Locator
  28  |         readonly enterMobileNumber:Locator
  29  |         readonly enterNotes:Locator
  30  |         readonly clickAddBtn:Locator
  31  |         readonly clickConfirmOK:Locator
  32  |         readonly clickAlertOK:Locator
  33  |         readonly clickSearchPanel:Locator
  34  |         readonly enterSearchTextbox:Locator
  35  |         readonly clickSearchBtn:Locator
  36  |         private expNumber!: string
  37  | 
  38  |         constructor(page:Page){
  39  | 
  40  |         this.page=page
  41  |         this.clickCustomers=page.locator("#mi_a_customers")
  42  |         this.clickAddIcon=page.locator('span[data-caption="Add"]').first()
  43  |         this.captureCustomerNum=page.getByRole('textbox', { name: 'Customer Number *' })
  44  |         this.enterCustomerName=page.getByRole('textbox', { name: 'Customer Name *' })
  45  |         this.enterAddress=page.getByRole('textbox', { name: 'Address *' })
  46  |         this.enterCity=page.getByRole('textbox', { name: 'City *' })
  47  |         this.enterCountry=page.getByRole('textbox', { name: 'Country *' })
  48  |         this.enterContactPerson=page.getByRole('textbox', { name: 'Contact Person *' })
  49  |         this.enterPhoneNum=page.getByRole('textbox', { name: 'Phone Number *' })
  50  |         this.enterEmail=page.getByRole('textbox', { name: 'Email *' })
  51  |         this.enterMobileNumber=page.getByRole('textbox', { name: 'Mobile Number *' })
  52  |         this.enterNotes=page.getByRole('textbox', { name: 'Notes *' })
  53  |         this.clickAddBtn=page.locator('[id="btnAction"]')
  54  |         this.clickConfirmOK=page.locator("button.ajs-button.btn.btn-primary").last()
  55  |         this.clickAlertOK=page.locator("button.ajs-button.btn.btn-primary")
  56  |         this.clickSearchPanel=page.locator('button[data-caption="Search Panel"]')
  57  |         this.enterSearchTextbox=page.locator('input[id="psearch"]')
  58  |         this.clickSearchBtn=page.locator("button#btnsubmit")       
  59  |         }
  60  | 
  61  |         public async navigateToCustomer(){
> 62  |             await this.clickCustomers.waitFor()
      |                                       ^ Error: locator.waitFor: Target page, context or browser has been closed
  63  |             await this.clickCustomers.click()
  64  |             await this.clickAddIcon.waitFor()
  65  |             await this.clickAddIcon.click()
  66  |         }
  67  | 
  68  |         public async addCustomerDetails(customername: string,
  69  |             address: string, city: string, country: string,
  70  |             cperson: string, pnumber: string, email: string,
  71  |             mnumber: string, notes: string
  72  | 
  73  | 
  74  |         ){
  75  | 
  76  |             await this.captureCustomerNum.waitFor()
  77  |             this.expNumber=await this.captureCustomerNum.inputValue()
  78  |             await this.enterCustomerName.waitFor()
  79  |             await this.enterCustomerName.fill(customername)
  80  |             await this.enterAddress.fill(address)
  81  |             await this.enterCity.fill(city)
  82  |             await this.enterCountry.fill(country)
  83  |             await this.enterContactPerson.fill(cperson)
  84  |             await this.enterPhoneNum.fill(pnumber)
  85  |             await this.enterEmail.fill(email)
  86  |             await this.enterMobileNumber.fill(mnumber)
  87  |             await this.enterNotes.fill(notes)
  88  |             await this.clickAddBtn.click()
  89  |             
  90  |         }
  91  | 
  92  |         // public async addCustomerDetails(data: Record<string,string>){
  93  |         //     await this.captureCustomerNum.waitFor()
  94  |         //         this.expNumber = await this.captureCustomerNum.inputValue()
  95  |         //         await this.enterCustomerName.waitFor()
  96  |         //         await this.enterCustomerName.fill(data.customername)
  97  |         //         await this.enterAddress.fill(data.address)
  98  |         //         await this.enterCity.fill(data.city)
  99  |         //         await this.enterCountry.fill(data.country)
  100 |         //         await this.enterContactPerson.fill(data.cperson)
  101 |         //         await this.enterPhoneNum.fill(data.pnumber)
  102 |         //         await this.enterEmail.fill(data.email)
  103 |         //         await this.enterMobileNumber.fill(data.mnumber)
  104 |         //         await this.enterNotes.fill(data.notes)
  105 |         //         await this.clickAddBtn.click()
  106 |         // }
  107 | 
  108 |         // //using the interface for passing in parameters
  109 |         // public async addCustomerDetails(data: CustomerData){
  110 |         //     await this.captureCustomerNum.waitFor()
  111 |         //         this.expNumber = await this.captureCustomerNum.inputValue()
  112 |         //         await this.enterCustomerName.waitFor()
  113 |         //         await this.enterCustomerName.fill(data.customername)
  114 |         //         await this.enterAddress.fill(data.address)
  115 |         //         await this.enterCity.fill(data.city)
  116 |         //         await this.enterCountry.fill(data.country)
  117 |         //         await this.enterContactPerson.fill(data.cperson)
  118 |         //         await this.enterPhoneNum.fill(data.pnumber)
  119 |         //         await this.enterEmail.fill(data.email)
  120 |         //         await this.enterMobileNumber.fill(data.mnumber)
  121 |         //         await this.enterNotes.fill(data.notes)
  122 |         //         await this.clickAddBtn.click()
  123 |         // }
  124 | 
  125 | 
  126 |          public async handleAlerts()
  127 |        {
  128 |         if(await this.clickConfirmOK.isVisible({timeout:3000}).catch(()=>false))
  129 |         {
  130 |             await this.clickConfirmOK.click()
  131 |         }
  132 |         if(await this.clickAlertOK.isVisible({timeout:3000}).catch(()=>false))
  133 |         {
  134 |             await this.clickAlertOK.click()
  135 |         }
  136 | 
  137 |        }
  138 | 
  139 |         public async customerTable()
  140 |        {
  141 |         if(!await this.enterSearchTextbox.isVisible()){
  142 |             await this.clickSearchPanel.click()
  143 |         }
  144 |         await this.enterSearchTextbox.clear()
  145 |         await this.enterSearchTextbox.fill(this.expNumber)
  146 |         await this.clickSearchBtn.click()
  147 |         const customerRow= await this.page.locator("#tbl_a_customerslist tbody tr",
  148 |             {
  149 |                 hasText:this.expNumber
  150 |             }
  151 |         )
  152 |         await expect(customerRow).toBeVisible()
  153 |         console.log(`Customer number found in table: ${this.expNumber}`)
  154 |         await expect(customerRow).toContainText(this.expNumber)
  155 | 
  156 |        }
  157 | 
  158 |     
  159 | 
  160 | 
  161 | }
```
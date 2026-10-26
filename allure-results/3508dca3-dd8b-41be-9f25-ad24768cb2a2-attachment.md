# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPUsingExcelFile.spec.ts >> with excel sheet >> with supplier excel data Applier1
- Location: tests\ERPUsingExcelFile.spec.ts:21:14

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=f3e2]:
  - generic [ref=f3e3]:
    - link "Stock Accounting" [ref=f3e6] [cursor=pointer]:
      - /url: .
    - strong [ref=f3e9]: Stock Accounting
    - generic [ref=f3e12]:
      - text: "User Name:"
      - strong [ref=f3e13]: Administrator
      - text: "|"
      - link "Logout" [ref=f3e14] [cursor=pointer]:
        - /url: javascript:void(0);
  - text:                             
  - generic [ref=f3e17]:
    - list [ref=f3e18]:
      - listitem [ref=f3e19]:
        - link "Dashboard" [ref=f3e20] [cursor=pointer]:
          - /url: dashboard.php
      - listitem [ref=f3e21]:
        - link "Stock Items" [ref=f3e22] [cursor=pointer]:
          - /url: a_stock_itemslist.php?cmd=resetall
      - listitem [ref=f3e24]:
        - link "Suppliers" [ref=f3e25] [cursor=pointer]:
          - /url: a_supplierslist.php
      - listitem [ref=f3e26]:
        - link "Purchases" [ref=f3e27] [cursor=pointer]:
          - /url: a_purchaseslist.php?cmd=resetall
      - listitem [ref=f3e28]:
        - link "Customers" [ref=f3e29] [cursor=pointer]:
          - /url: a_customerslist.php
      - listitem [ref=f3e30]:
        - link "Sales" [ref=f3e31] [cursor=pointer]:
          - /url: a_saleslist.php?cmd=resetall
      - listitem [ref=f3e32]:
        - link "Outstandings" [ref=f3e33] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f3e35]:
        - link "Administrator" [ref=f3e36] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f3e38]:
        - link " Help (Categories)" [ref=f3e39] [cursor=pointer]:
          - /url: help_categorieslist.php
          - generic [ref=f3e40]: 
          - text: Help (Categories)
        - text:   
      - listitem [ref=f3e42]:
        - link " Settings" [ref=f3e43] [cursor=pointer]:
          - /url: "#"
          - generic [ref=f3e44]: 
          - text: Settings
        - text:          
      - listitem [ref=f3e46]:
        - link " Logout" [ref=f3e47] [cursor=pointer]:
          - /url: logout.php
          - generic [ref=f3e48]: 
          - text: Logout
    - list
  - generic [ref=f3e51]:
    - generic [ref=f3e52]:
      - list [ref=f3e53]:
        - listitem [ref=f3e54]:
          - link "" [ref=f3e55] [cursor=pointer]:
            - /url: index.php
        - listitem [ref=f3e57]:
          - text: /
          - link "Suppliers" [ref=f3e58] [cursor=pointer]:
            - /url: a_supplierslist.php
        - listitem [ref=f3e59]: / Add
        - link "" [ref=f3e60] [cursor=pointer]:
          - /url: javascript:void(0);
      - generic [ref=f3e63]:
        - generic [ref=f3e64] [cursor=pointer]:
          - radio "en" [checked]
          - text: en
        - generic [ref=f3e65] [cursor=pointer]:
          - radio "id"
          - text: id
    - generic [ref=f3e67]:
      - generic [ref=f3e68]:
        - generic [ref=f3e69]:
          - generic [ref=f3e70]: Supplier Number *
          - textbox "Supplier Number *" [active] [ref=f3e74]:
            - /placeholder: ""
            - text: Supplier-00000002129
        - generic [ref=f3e75]:
          - generic [ref=f3e76]: Supplier Name *
          - textbox "Supplier Name *" [ref=f3e80]:
            - /placeholder: Supplier Name
        - generic [ref=f3e81]:
          - generic [ref=f3e82]: Address *
          - textbox "Address *" [ref=f3e86]:
            - /placeholder: Address
        - generic [ref=f3e87]:
          - generic [ref=f3e88]: City *
          - textbox "City *" [ref=f3e92]:
            - /placeholder: City
        - generic [ref=f3e93]:
          - generic [ref=f3e94]: Country *
          - textbox "Country *" [ref=f3e98]:
            - /placeholder: Country
        - generic [ref=f3e99]:
          - generic [ref=f3e100]: Contact Person *
          - textbox "Contact Person *" [ref=f3e104]:
            - /placeholder: Contact Person
        - generic [ref=f3e105]:
          - generic [ref=f3e106]: Phone Number *
          - textbox "Phone Number *" [ref=f3e110]:
            - /placeholder: Phone Number
        - generic [ref=f3e111]:
          - generic [ref=f3e112]: Email *
          - textbox "Email *" [ref=f3e116]:
            - /placeholder: Email
        - generic [ref=f3e117]:
          - generic [ref=f3e118]: Mobile Number *
          - textbox "Mobile Number *" [ref=f3e122]:
            - /placeholder: Mobile Number
        - generic [ref=f3e123]:
          - generic [ref=f3e124]: Notes *
          - textbox "Notes *" [ref=f3e128]:
            - /placeholder: Notes
      - generic [ref=f3e130]:
        - button "Add" [ref=f3e131] [cursor=pointer]
        - button "Cancel" [ref=f3e132] [cursor=pointer]
  - generic [ref=f3e134]:
    - text: ©2015
    - link "Masino Sinaga" [ref=f3e135] [cursor=pointer]:
      - /url: http://www.ilovephpmaker.com
    - text: . All rights reserved. |
    - link "Terms and Conditions" [ref=f3e136] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "About Us" [ref=f3e137] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "Back to Top" [ref=f3e138] [cursor=pointer]:
      - /url: javascript:void(0);
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
  43  |         this.clickSearchPanel=page.locator('button[data-caption="Search Panel"][data-toggle="button"]')
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
> 64  |         await this.enterSupplierName.fill(suppliername)
      |                                      ^ Error: locator.fill: value: expected string, got undefined
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
  92  |             await this.clickSearchPanel.waitFor()
  93  |             await this.clickSearchPanel.click()
  94  |         }
  95  |         await this.enterSearchTextbox.clear()
  96  |         await this.enterSearchTextbox.fill(this.expNumber)
  97  |         await this.clickSearchBtn.click()
  98  |         const supplierRow= await this.page.locator("#tbl_a_supplierslist tbody tr",
  99  |             {
  100 |                 hasText:this.expNumber
  101 |             }
  102 |         )
  103 |         await expect(supplierRow).toBeVisible()
  104 |         console.log(`Supplier number found in table: ${this.expNumber}`)
  105 |         await expect(supplierRow).toContainText(this.expNumber)
  106 | 
  107 |        }
  108 | 
  109 | 
  110 | 
  111 | }
```
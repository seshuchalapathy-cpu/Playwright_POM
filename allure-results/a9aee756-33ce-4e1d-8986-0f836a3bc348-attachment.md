# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Singletest.spec.ts >> single test >> supplier test
- Location: tests\Singletest.spec.ts:7:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('ewPageCaption')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('ewPageCaption') with timeout 5000ms
  - waiting for locator('ewPageCaption')

```

```yaml
- link "Stock Accounting":
  - /url: .
- strong: Stock Accounting
- list:
  - listitem:
    - link " Help (Categories)":
      - /url: help_categorieslist.php
  - listitem:
    - link " Login":
      - /url: login.php
- list
- radio "en" [checked]
- text: en
- radio "id"
- text: id
- button "x"
- heading "Login " [level=4]:
  - text: Login
  - link "":
    - /url: javascript:void(0);
- text: User Name
- textbox "User Name": admin
- text: Password
- textbox "Password": master
- text: Options 
- button "Login"
- button "Reset"
- link "Forgot Password":
  - /url: forgotpwd.php
- link "Register":
  - /url: register.php
- text: ©2015
- link "Masino Sinaga":
  - /url: http://www.ilovephpmaker.com
- text: . All rights reserved. |
- link "Terms and Conditions":
  - /url: javascript:void(0);
- text: "|"
- link "About Us":
  - /url: javascript:void(0);
- text: "|"
- link "Back to Top":
  - /url: javascript:void(0);
```

```
Test timeout of 30000ms exceeded while running "afterEach" hook.
```

# Test source

```ts
  1  | import {test as base, expect} from '@playwright/test'
  2  | import { AdminLoginPage } from "../Pages/AdminLoginPage";
  3  | import { AdminLogoutPage } from "../Pages/AdminLogoutPage";
  4  | 
  5  | export const test=base
  6  | test.beforeEach(async({page})=>{
  7  | 
  8  |     const adminlogin= new AdminLoginPage(page)
  9  |     await adminlogin.launchUrl(process.env.BASE_URL!)
  10 |     await adminlogin.login(process.env.BASE_USER!,process.env.BASE_PASS!)
  11 |     
  12 | })
  13 | 
> 14 | test.afterEach(async({page})=>{
     |      ^ Test timeout of 30000ms exceeded while running "afterEach" hook.
  15 |     const adminlogout=new AdminLogoutPage(page)
  16 |     await adminlogout.adminLogout()
  17 | })
  18 | 
  19 | 
  20 | 
```
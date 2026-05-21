# Shopware QA / Automation Tester Task

## Environment
Official Shopware Demo Store:
https://www.shopware6-demo.development-s25.com/

## Tools Used
- Playwright
- JavaScript
- VS Code

## Setup

Clone repository:

git clone <repo-link>

Install dependencies:

npm install

Run tests:

npx playwright test

Run with browser visible:

npx playwright test --headed

## Automated Scenario

Guest user:

1. Opens storefront
2. Selects product
3. Adds product to cart
4. Proceeds as guest
5. Fills checkout details
6. Accepts terms
7. Places order
8. Verifies confirmation page

## Assertions Used

- URL verification
- Cart dialog visible
- Checkout page visible
- Order confirmation visible

## Improvements if I had more time

- Full Page Object implementation
- Additional negative scenarios
- Test data separation
- Screenshots and reporting
- CI pipeline integration
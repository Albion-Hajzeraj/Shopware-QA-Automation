### TC-001

Title: Guest completes checkout successfully

Preconditions:
- User is on homepage
- Product available

Steps:
1. Search for a product
2. Open product page
3. Add product to cart
4. Open cart
5. Proceed as guest
6. Fill valid customer data
7. Select Cash on Delivery
8. Confirm order

Expected Result:
Order confirmation page appears with order number

Priority:
High


### TC-002

Title: User adds multiple quantities before checkout

Preconditions:
- Product available

Steps:
1. Open product
2. Add to cart
3. Increase quantity
4. Continue checkout

Expected Result:
Cart updates correctly and total price changes

Priority:
Medium

### TC-003

Title: Search product and complete checkout

Preconditions:
- User is on homepage

Steps:
1. Enter product name in search bar
2. Select product from results
3. Add product to cart
4. Continue guest checkout
5. Enter valid information
6. Confirm order

Expected Result:
User successfully completes order

Priority:
High


### TC-004

Title: Add multiple different products to cart

Preconditions:
- Products available

Steps:
1. Open first product
2. Add to cart
3. Open another product
4. Add second product
5. Open cart

Expected Result:
Both products appear in cart

Priority:
Medium


### TC-005

Title: Change quantity before checkout

Preconditions:
- Product added to cart

Steps:
1. Open cart
2. Increase quantity
3. Proceed to checkout

Expected Result:
Cart updates quantity and total price correctly

Priority:
Medium


### TC-006

Title: Continue checkout with empty required fields

Preconditions:
- User at checkout page

Steps:
1. Leave required fields blank
2. Click continue

Expected Result:
Validation messages appear

Priority:
High


### TC-007

Title: Enter invalid email address

Preconditions:
- User at checkout page

Steps:
1. Enter invalid email:
abc123

2. Continue

Expected Result:
Email validation error shown

Priority:
High


### TC-008

Title: Access checkout with empty cart

Preconditions:
- Cart empty

Steps:
1. Open cart
2. Click checkout

Expected Result:
User cannot continue checkout

Priority:
Medium


### TC-009

Title: Enter very long customer name

Preconditions:
- User at checkout page

Steps:
1. Enter 100+ character first name

Expected Result:
System handles input correctly

Priority:
Low


### TC-010

Title: Special characters in customer name

Preconditions:
- User at checkout page

Steps:
1. Enter:
Albion !@#$%^&*

Expected Result:
Application handles input safely

Priority:
Low
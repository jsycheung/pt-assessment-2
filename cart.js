///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

const summedPrice = cart.reduce((acc, obj) => acc + obj.price, 0);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
  return cartTotal * (1 + tax) - couponValue;
};

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*

The customer object should contain the customer name, mailing address, email, phone number, a boolean indicating whether the customer is a member, and membership number.
Customer name - so that the food is given to the right customer. It is a string because it consists of characters and is usually printed on the receipt and written in the confirmation email.
Mailing address - so that food is delivered to the correct address. It is a string since it consists of characters and is printed on the receipt and written in the confirmation email.
Email - so that the digital receipt and any other information can be sent to the customer. It is a string since it consists of characters and is passed into the email system.
Phone number - so that the restaurant server or delivery person can contact the customer if necessary. It is a number because local phone number consists of numbers only.
Boolean indicating whether the customer is a member - if this is false, the system can skip some steps that are exclusive for members. It is a boolean for the system to identify easily if the customer is a member.
Membership number - so that the system can add the order details into the customer's membership account records, and add points into their account. It is a number because the membership number consists of numbers only.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
  name: "Jasmine Cheung",
  address: "70 Pacific Street, Cambridge MA, 02139",
  email: "jasminesyc2000@gmail.com",
  phone: 8628824426,
  isMember: true,
  membershipNumber: 1234567,
};

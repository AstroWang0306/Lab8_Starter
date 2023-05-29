# Lab 8 - Starter

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

Within a Github action that runs whenever code is pushed 

Reasons: 
  1.This helps catches any issues early in the deployment process.  
  
  2.The test can return the immediate feedback so we can modify the code as soon as possible. 
  
  3.Doing automation can save more time than munally testing. 
  
2. Would you use an end to end test to check if a function is returning the correct output? 

    No, unit test will be appropriate for checking if the function is return the corret output. 
    
3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? 

    Yes, unit test can allow us only considering the "message" feature without considering the entire message system. 
    
4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? 

    Yes, since "max message length" can be used as one functionality, which is what the unit test going to test. 

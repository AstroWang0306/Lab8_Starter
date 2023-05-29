# Lab 8 - Starter

Screenshot of the result:

<img width="566" alt="Screen Shot 2023-05-29 at 12 32 38 AM" src="https://github.com/AstroWang0306/Lab8_Starter/assets/97696773/80565e87-bd34-4641-9ef4-1f0f32ab3fb9">

<img width="609" alt="Screen Shot 2023-05-29 at 12 32 17 AM" src="https://github.com/AstroWang0306/Lab8_Starter/assets/97696773/df97f2c5-017d-4b2c-88f7-570d208c1a21">


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

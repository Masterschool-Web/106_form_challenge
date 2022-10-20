#  Specification
Write a functional component that imitates a ***log-in*** process. The component should be a form consisting of ***two*** input fields — for username and password — and a login button beneath them.

![Final Product](./img/finalProduct.png)


***
When the user selects Submit or hits enter, the form should check if the username and password entered match some user stored in the component’s state. If so, an **alert** should appear including the user’s username (as shown below), and the component should reset to its starting state.

![Successful Login](./img/successAlert.png)

***
If the username and password entered do not match an existing count, then (so long as each field is more than six characters long) create a new account, store it for future log-ins, and display an alert to notify the user. 
Just as the form does on successful login, it should clear the input fields following the alert.

![New Account](./img/newUser.png)

***
If the username and/or password entered is less than six characters, do not create a new account, and display an alert explaining the issue. 
Do not clear the input fields so that the user may append to what they have already entered:

![Error Alert](./img/errorAlert.png)

***
Finally, the user should not be allowed to input more than 20 characters in either field. If the user attempts to add a 21st character to their input, do not reflect their change, and display the error in an alert:
![Input too long](./img/tooLongAlert.png)

***
## Starter Code
You have been provided some code to get you started
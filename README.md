# Challenge-3---Password-Generator

## Demonstration

This build is a randomized password generator built using mostly JavaScript.

### Here are some screenshots of the website:

>This was the starter website I was provided with
![screenshot-of-starter-website](assets/images/initial-website.png)

>This picture is demonstrating the alert window asking for password length
![alert-screenshot](assets/images/alert.png)

>This picture is demonstrating the error alert that comes up when you don't enter a number within the specified range
![number-error-screenshot](assets/images/number-error.png)

>This picture is demonstrating the error alert that occurs when the user does not specify at least ONE character type
![character-error-screenshot](assets/images/character-error.png)

>This picture is demonstrating a succesful password randomization attempt
![successful-attempt-screenshot](assets/images/successful-result.png)


## How I did it

This project was intended to test my ability to develop the logic behind a dynamic website. 

I started the logic by initializing some variables on the top to hold relevant information for later. This consisted of a empty string variable for the resulting password and an empty array to hold all the different character types.

Next, I built the function that would generate the function.

Within the function, I prompted the user to ask for information regarding password length and which character types they wanted to include in their finished password. I, then, stored this information within local variables for later use.

Next, I validated that the User function was what was expected and created error alerts that exit the function if the User input is incorrect.

Next, based on the information I recieved before, I add the different character types to the empty string variable created in the beginning and iterate through said string, randomly select one character per loop. 

While iterating through the loop, I add the randomly selected character to the another empty string variable until I have the specified password length. I, then, return the password out of the function to another function which displays the random password on the webpage.

## Credits

University of Texas - Austin

[StackOverflow.com](https://stackoverflow.com/)

[MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[W3-Schools](https://www.w3schools.com/js/)


## License

Please refer to license within the repository


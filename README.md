# MyPersonalPasswordGenerator

## Description of Project
For this repository, the goal was to develop a random password generator from existing code while using mostly JavaScript. The goal was to ask the user some questions regarding the parameters that they would like to include within their password. Depending on their response, the website would then generate a random password using these perameters and display it on the scree. 

## Steps of Completing Project
Like mentioned before, most of the website consists and opperates using JavaScript. Here are the steps:

    1. Added starting arrays for Special, Numerical, Lowercase, and Uppercase characters.

    2. Developed a random character function that can be implemented into the the 4 different arrays. It selects X amount of characters depending on the users length .

    3. Developed a second function that gives prompts to the user before the program is ran. These prompts ensure that they choose the parameters given before executing the program.

    4. Developed the last function to generate the password. This ensures that the users parameters are met before creating the password. Once met and recorded, it calls the random character function to generate the password.

    5. Once generated, the last function calls in the password generator's return and uses it to display it into the HTML file. 

Afterwards, if the user wanted a new password, then they can just press "Generate Password" and it will run through the program again. 

## Live Website Link
Here is a live link of my personal Password Generator: https://ucruz2025.github.io/MyPersonalPasswordGenerator/
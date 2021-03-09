# Pre-work - _Follow the Pattern_

**Follow the Pattern** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Runhui Huang**

Time spent: **4** hours spent in total

## Required Functionality

The following **required** functionality is complete:

- [ x] Game interface has a heading (h1 tab), a line of body text (p tag), and four buttons that match the demo app
- [x ] "Start" button toggles between "Start" and "Stop" when clicked.
- [ x] Game buttons each play a sound when clicked.
- [x ] Computer plays back sequence of clues including sound and visual cue for each button
- [ x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [ x] User wins the game after guessing a complete pattern

The following **optional** features are implemented:

- [ x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [ x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ x] More than 4 functional game buttons
- [ x] Playback speeds up on each turn
- [ x] Computer picks a different pattern each time the game is played
- [ x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://cdn.glitch.com/4b9f3aec-e757-4e1c-bf27-cb6328d5f3a7%2Flight_sound.gif?v=1614820948717' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [LiceCap](http://www.cockos.com/licecap/).

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   www.google.com to search the proper syntax or method.
   https://www.photoresizer.com/ to crop the button background image.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   As my first-time use Glitch to build a web application, I do some research online and get familiar with the Glitch website layout. By following the tutorial, the coding process is smooth and effective. Everything is going well until I reach the step of generating tone, I know it can be easier to copy and paste the script and proceed to the next step base on the instruction. However, the unfamiliar script triggers my curiosity. I would like to learn how does sound implementation work in JavaScript. There is plenty of APIs available, it is easy to install and ready to use. When I give the buttons fill with a background image, I couldn’t find the URL for the image in the assets folder. Thanks to StackOverflow I realize Glitch will generate a new URL for the image when I place it into the folder. The last part of the prework is optional features, this is the way to design the UI and make the app look better. I spend a lot of time adding a clock to the application because I can not correctly invoke the method. It comes with a lot of tests by using console log, getting rid of multiple setInterval methods running at the same time. Lastly, I realize the audio is disabled when I use Google Chrome to run my application, I find out the solution in chrome developer tools. I have to call "resume()" at some time after the user interacted with the page. Overall this is a great exercise, and looking forward to joining the summer internship for more collaborative projects.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   This prework project is an individual project, it can clear the question by looking up online or ask peoples. I have been watching plenty of tutorials on the youtube channel and Learning different developer's ideas and design patterns. I was passionate to build some small projects in my free time. But I know that just the way to learn a new technique.  In the real world, web development requires working as a team. I don’t have many experiences that building projects with a team. My consideration is how to become a good team player in a web development career. Especially when I am new to the company, and how to give a solid contribution to the team?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
   I will adjust the layout, font, and background. Use CSS to style the button. Add the Tick tock sound to the clock when it is counting down, instead of 10 seconds, I would like to change to "10:00 second"  format to display. By changing the color red and adding a warning sound in the last 3 seconds, players can realize the reminding time. Give the player an option to increase the difficulty by adding a checkBox for shuffling the button every term.

## License

    Copyright [2021] [Runhui Huang]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

# Club Manager

#### _App created for Epicodus Independent Project, JavaScript - Week Three. Practice using Angular2. July 14th, 2017_

#### By **Alyssa Moody**

## Description

_An app that manages the roster of a fictitious fishing club._

## Program Specifications

| Description  | Input Example | Output Example |
| ------------- | ------------- | ------------- |
| The program allows users to view a list of all members in the club.  | View All Members  | Returns a list of all members.  |
| The program allows users to click on a member and view more details about that member.  | "Jane Doe"  | Shows bio, fishing stats, favorite fishery etc  |
| The program allows users to view an about page.  | --  | --  |
| The program allows users to filter members.  | --  | --  |
| The program allows admin to add a new member.  | --  | --  |
| The program allows admin to edit a member's details.  | --  | --  |
| The program allows admin to delete a member.  | --  | --  |
| MAYBE: The program allows users to post to a message board.  | --  | --  |
| MAYBE: The program uses admin authentication.  | --  | --  |

## Setup/Installation Requirements

**CLONING PROJECT**
Node.js with NPM: Check with **node -v**. Otherwise, download [Node](https://nodejs.org/en/download/).

Angular 4 CLI: Ensure you have Angular 4 installed by running > **ng -v**. If you do not have Angular 4, download [Angular CLI](https://github.com/angular/angular-cli).

**From GitHub:** Download or clone project repository onto desktop from GitHub.

In the terminal, cd into the project folder. Enter the following commands:

| Package | Terminal Command |
|:---:|:---:|
| npm |$ npm install |
| bower |$ bower install |

Firebase:
- install Firebase `npm install angularfire2@4.0.0-rc.0 firebase --save`
- install promise-polyfill patch `npm install promise-polyfill --save-exact`
- You will need a [Firebase API](https://firebase.google.com/) key to run this code.
    - Go to the website and create a free account. (Links to your gmail if you have one.)
    - In the user dashboard area, select the option `create a new project` and provide the name `database name here`.
    - You'll be taken to an "Overview" area. Select the option `add Firebase to your web app`.
    - In the project, in the src/app folder, create a file and name it `api-keys.ts`.
    - Paste the information from the firebase pop-up window into this format:
          export var masterFirebaseConfig = {
          apiKey: "xxxx",
          authDomain: "xxxx.firebaseapp.com",
          databaseURL: "https://xxxx.firebaseio.com",
          storageBucket: "xxxx.appspot.com",
          messagingSenderId: "xxxx"
          };
    - Back in Firebase, go to the Database area by selecting the Database option from the navbar on the left-hand side. Near the top of the page, there should be a blue navbar reading Realtime Database. Below this, select the option that reads RULES.
    - Change both the ".read", and ".write" properties here to "true" like this:<br> `
    {
      "rules": {
        ".read": "true",
        ".write": "true"
      }
    }`
    - Click on the Database option in the left-hand navigational menu.
    - Select the 3 vertical dots on the right-hand side of the grey bar with your database URL on it. (It's right next to the + and - buttons). This should bring up a small menu.
    - Select Import JSON from this menu. This will result in a modal window prompting you to upload a file.
    - Locate the sample-data.json file from the project folder, and upload it.


Enter the command > **ng build**

Enter the command > **ng serve**

_Visit http://localhost:4200/ in your preferred browser and you will see the application._


## Known Bugs

_No known bugs._

## Support and contact details

_If you run into any issues or have questions, ideas or concerns, please contact Alyssa Moody at alyssanicholemoody@gmail.com_

## Technologies Used

**Languages:** HTML, CSS, JavaScript/TypeScript.

**Package Managers:** NPM and Bower.

**Frameworks/Libraries:** Angular2.

**Database Management:** Firebase.

### License

*MIT license Agreement*

Copyright (c) 2017 **_Alyssa Moody_*

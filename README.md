# Welcome to reactjs-automated-teller-machine!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and serves as a virtual, functional ATM machine.

Features:

1. Once the project is running locally in Google Chrome (see steps below) and the user clicks the "Enter PIN" button, they will be prompted to enter their pin. The pin textfield will only accept a maximum of four numbers (letters are not permitted). Once a valid pin is entered, the "Enter PIN" button label will update on the UI to read "OK" and allow the user to "authenticate" by clicking the button.

2. After the user has authenticated, their card type will become highlighted above the ATM screen on the UI, and they will have the ability to check their balance and withdraw/deposit funds. The option to re-enter the user's pin will also be available.

3. The withdraw/deposit textfield will only accept numbers, and once the user begins typing, the "Re-Enter PIN" label will update to read "OK" to allow the user to enter their choice by clicking the button. After a withdrawal or deposit, the user can click the "Balance" button to see their most up to date balance.

4. After clicking "Exit", the application state will reset and the user can click the "Enter PIN" button again to reauthenticate.

## State Management and Dependencies

1. This project utilizes React hooks for managing state and side effects. 
2. Material UI is utilized with tss-react/mui and the makeStyles API for incorporating styles and theme.

## Running the Project

1. Clone the project by running `git clone https://github.com/gomezvt/reactjs-automated-teller-machine.git`

2. Change directory into the root of the project, and run `npm install` in the terminal/command prompt

3. Run `npm start` in the terminal/command prompt to start the app in development mode.

4. Open [http://localhost:3000](http://localhost:3000) in Google Chrome for best display and performance. The page will reload when you make changes.


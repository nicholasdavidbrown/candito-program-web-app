
# Powerbuilder Web App

Version 1.0 based on the Candido program.  
Available at http://www.canditotraininghq.com/free-programs/

This is a fitness routine that myself and a friend are currently doing. I've thrown this little web app together in an attempt to solve the problem of "I really hate tracking this routine via excel on my phone".

Feel free to do whatever you like with the project.

---

# Software

## React JS
Run ```yarn``` to install files and ```yarn start``` to run development

## Firebase 
In order to run the project you'll need to have a firebase project initialized.

Setup a firebase project and instantiate the **Authentication** and **Firestore** in the Google Firebase console.

Create a ```.env.development``` and ```.env.production``` file with the following content (taken from the Firebase project settings)

```
REACT_APP_API_KEY= ***
REACT_APP_AUTH_DOMAIN= ***
REACT_APP_DATABASE_URL= ***
REACT_APP_PROJECT_ID= ***
REACT_APP_STORAGE_BUCKET= ***
REACT_APP_MESSAGING_SENDER_ID= ***
REACT_APP_ID= ***
REACT_APP_CONFIRMATION_EMAIL_REDIRECT= ***
```
The confirmation email redirect will be different based on the environment. Route it to the domain of the hosted app if you are running a production app.

## Node Modules
- React Router Dom
- Styled Components

--- 

Created by Nick Brown & Tom Bradford

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
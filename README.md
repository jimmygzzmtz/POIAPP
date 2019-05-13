# POI-Api & POIApp

## Objective
Have a simple way to get Points of Interest by sending a location and the type of Point of Interest wanted, and receiving a list of matching Points of Interest in a database, while also allowing the use of crowdsourcing to populate the data.

## Description
POIApp is a Progressive Web App that utilizes POI-Api, created using Ionic 4 and Angular. POIApp uses all of the routes in POI-Api to present the POIs in a graphically-friendly manner, using the motif of cards, while also allowing users to, using their accounts, submit their own POIs, delete, update, etc. By being a Progressive Web App, POIApp can be installed on any device with a modern browser, including Windows, Linux, Mac and Chrome OS using Chrome, Android using Chrome, or iOS using Safari and its “Add to Home Screen” function.

## General Characteristics
- The user can sign up for an account.<br />
- The user can login to his account.<br />
- The user can see all the POIs and their data.<br />
- The user can filter (search) the POIs by location, type, or both.<br />
- The user can tap on the Maps Link on the POI to be taken to the corresponding information in Google Maps.<br />
- The user can submit their own POIs with their corresponding information.<br />
- The user can delete or change their own POIs by their ID (or any POI if it is the administrator).<br />
- The user can install POIApp as a Progressive Web App.<br />

## Link to application
### Front end
https://poiapp.herokuapp.com
### Back end
https://poiapi.herokuapp.com/

## Developers
- Jaime Alberto González Martínez A01193591<br />
- Ariel Méndez Santillán A01020690<br />

## Installing the Progressive Web App

### iOS<br />
1. Open the PWA link in Safari, and let POIApp load.<br />
2. Click the share button at the bottom of the browser.<br />
3. Scroll right in the bottom row until you find the “Add to Home Screen” option.<br />
4. Click on “Add to Home Screen”, then on “Add”.<br />
5. Find and open POIApp from the Home Screen.<br />

### Android<br />
1. Open the PWA link in Chrome, and let POIApp load.<br />
2. Wait until a “Add POIApp to Home Screen” banner appears towards the bottom of the page.<br />
3. Click on the banner, and then click the “Add” button.<br />
4. Find and open POIApp from the Applications List.<br />

### Desktop Platforms (Chrome)<br />
1. Open the PWA link in Chrome, and let POIApp load.<br />
2. In the Chrome settings menu, click on “Install POIApp”, and then on “Install”.<br />
3. If you are running Chrome 76 or above, an install button should appear in the address bar.<br />
4. Find and open POIApp from Launchpad on macOS, or Start Menu on Windows.<br />

## User Manual

### Signing Up<br />
When opening the application for the first time, or logging out, the Account modal will show. By entering a username and password, an account will be created, with the password being hashed. In addition, the user will be granted a token, which will be automatically used to login.

### Logging in<br />
Although logging saves between states (closing the app, etc), the option to log out is there. If this has happened, or using POIApp from another device, logging in follows the same procedure as signing up, entering the username and password, and clicking on the checkmark button.

### Logging out<br />
To log out of an account, click the red tools button in the top right corner, and then the exit button in the same top right corner in the Tools page. If you wish to go back without logging out, click the back button in the top left corner.

### Viewing POIs<br />
After logging in, the main screen is presented, which shows the list of POIs in the database, showing its photo, name, location, type, description, maps link, and ID. The ID is used to modify and delete POIs, while the Maps link can be clicked to be taken to the location in Google Maps.

### Filtering POIs<br />
Using the card at the top of the page, the name of a location can be entered (case insensitive, and also detects part of a name), along with the selection of a type, and upon clicking on the search icon, the list of POIs is filtered. It is important to note that they can be filtered by location, type, or both. If location is empty and “any type” is selected, it returns all the POIs in the database.

### Create POI<br />
To submit a POI, enter the tools page by clicking the red gears button in the top right corner of the main screen, and enter information in all the fields in the create section, making sure that maps and image are both direct links, and click the checkmark button. Afterwards, the POI will appear in the main screen.

### Update POI<br />
To update a POI, enter the tools page by clicking the red gears button in the top right corner of the main screen, copy the ID from the desired POI from the main screen, and submit any information you wish to change in the Update section. Afterwards, click the checkmark button, and the updated POI will appear in the main screen.

### Delete POI<br />
To delete a POI, enter the tools page by clicking the red gears button in the top right corner of the main screen, and copy the ID from the desired POI from the main screen you wish to change in the Delete section. Afterwards, click the checkmark button, and the POI will disappear from the main screen.

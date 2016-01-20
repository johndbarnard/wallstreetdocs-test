# John Barnard - Coding Test

##Install

Please ensure you have npm and bower installed - I'm sure you do!

To install please run:

```npm install```

This will also run bower install.

##Run

To run the app please:

```npm start```

##Testing

Testing has been set up for unit testing and end to end tests but I ran out of time to write full tests. There is
just one end to end test to make sure a non-logged in user is redirected to login. To run please either use

```npm test```

Or run the app and in a different terminal run:

```npm run protractor```

##Notes

* I was unable to find the correct glyphs for the login user and padlock so used the default bootstrap ones
* I hit the ping API endpoint as part of checking if the user is logged in (as well as checking for the existence of their token) and send the token even though I see it's not needed. My thinking was that this could be used against an endpoint to check the token is still valid.


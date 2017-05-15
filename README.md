This repo is divided into two main parts.
The sub-directory 'httptuts' and the root directory where the former directory sits.
The httptuts directory contains exercises and example codes I partook in while I was diligently learning from the Youtube channel.

The root directory itself contains the To-Do web app that was built at the end of the tutorial, aside the 'httptuts' directory, the rest of the files and folder in the root directory are for the web app.

The Package.json file already contains the dependencies my web app used, so to run application, run npm install in the terminal/command line to install the application and then you are good to go.
NB you must run npm install in the same root directory where the package.json is

After running npm install, run node app.js in the terminal/commandline to play around.

Then open your browser, type localhost:3000 to access the not-so-pretty homepage, but you can try typing '/about' and '/rooms/:id' after localhost to route through different endpoints.

To see the web app itself, you will need to stop the server in the terminal already running for app.js with the control + c keyboard shortcut and then run node tempengine.js

The views directory contains all the files I used as templating engine for my web app.
The assets directory contains the CSS the web app uses.
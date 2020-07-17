---|HOW TO START|---
Create bot client at https://discord.com/developers/applications by clicking "New Application" and creating your bot in the "Bot" tab

Scroll down on the bot tab and configure the permissions you want Itachi to have, and then copy down that integer

Go to your application's general info tab and copy down the clientID

Go to this link replacing {clientID} and {permissionsInteger} with the numbers you copied down before, https://discord.com/oauth2/authorize?client_id={clientID}&scope=bot&permissions={permissionsInteger}

Add Itachi to your server

Clone the master branch to your PC or server

Generate and copy a token for your bot from the bot page and paste it into the options.json file

Run index.js in a node.js environment

---|OPTIONS|---
Your wake key can be changed in the options.json file

Replace the funfacts with your own, or add as many as you want on line 179 through line 181

Any of the Username based text commands such as -kill, -slap, or -shank, can be altered or added to using the string "%USER%" as the command user and %VICTIM% as the mentioned user

---|CREATOR REQUESTS|---
Please do not change the package.json, this bot is credited to me, Vain Alibi.
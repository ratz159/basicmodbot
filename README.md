VERDUGOMANAGER BOT
==================

Verdugo Manager Bot is a discord bot intended to perform basic moderation features. If you wish to host your own instance of this bot, feel free. This is hosted locally via docker (if you wish to run it the way it was initially intended, install docker for windows [here](https://docs.docker.com/docker-for-windows/install/)).

Running your own instance
--------------------------
1. Make a copy of .example.env and name it .env
2. Place _your_ bot token and desired prefix in the new .env file
3. Run the command `docker build -t <name of module> .` and then `docker run -d <name of module>`
4. You're all set!

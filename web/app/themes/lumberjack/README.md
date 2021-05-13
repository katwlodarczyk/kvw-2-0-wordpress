# KATVONWIESENDORF.COM 2.0 wordpress

## Local Development
1. ### Create .env
`cp .env.example .env`

2. ### Running Docker:

For the first time :
`docker-compose up -d --build`

Normally: `docker-compose up -d`


3. Export the latest copy of the database from phpmyadmin

4. ### Update your hosts file

`sudo vi /etc/hosts` and add the following:
```
127.0.0.1 local.katvonwiesendorf.com
127.0.0.1 kvw-2-0-mysql
```

5. Connect to the database using DB credentials in the .env file
6. `composer install`
7. ` cd web/app/themes/lumberjack`
8. `npm install`
9. `npm run watch`

If everything has been set up correctly, the site should now be running on `local.katvonwiesendorf.com`

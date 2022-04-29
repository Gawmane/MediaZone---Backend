# MediaZone---Backend

Vi har bygget en database og API til users og events de skulle bruge på Mediazone App.
Vi har sæt databasen op i HeidiSQL og har prøvet om den virker med Postman. Man skal selvfølgelig have en navn og adgangskode for at få adgang. Disse informationer er gemt i .env filen, som er ignoreret fra Github. I vores kode bruger vi dotenv til at importere alle informationer og for at få adgang.
Vi har lavet en login, for beskyttelsen af siden og routeren skal tjekke om vores token er ok for at få adgang.
Først den kræves en model i vores project til data struktur, som vi senere skal bruge til at få adgang til og opdatere vores data. Derefter exporterer vi modellen for at kunne bruges i controller. Modellen har dataen fra mySQL database.
Controller handler alle requests til databasen.
I index filen laver vi json filerne   og beskriver hvilken web ønsker vi at tillade at oprette forbindelse til. Her tillader  vi forskellige operationer, som GET, POST, OPTIONS, PUT, PATCH,DELETE.
Vi bygger individuelle controllers til  model handling, og vi bygger op hver operation.
Vi har bygget endpointerne med routers. Vi har parameterne req, res, som representerer HTTP request og svar fra serveren. 
Vi har arbejdet først lokalt og bagefter den skulle op til at være online, på Heroku.
Node JS på Heroku: https://boiling-castle-70220.herokuapp.com/
Og endpointerne  /api/user , api/events, /api/team, /api/usergroup,  /login.
Vi har bygget routes først med GET request, for at hente listerne (af brugere eller events osv). Der er mulighed for at se detaljer, hvor vi bruger også en GET request, men vi har brug for en Id for at kunne se detaljerne til en bestemt user/event.
POST requesten er bygget op for at kunne oprette , og PUT til at opdatere en vælgt id. 
Til sidst vi har bygget også en DELETE request hvor vi kan slette , og vi har brug for en bestemt id igen for at kunne fuldføre den. 
Man skal starte projekten op i terminalen med ”nodemon index.js” for at kunne starte den.

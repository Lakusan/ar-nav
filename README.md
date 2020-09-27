AR_NAV

Augmented Reality Exploration Web-App


#  (run in ./client and in ./ for NodeJs)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development (starts Node server and vue client)
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Important infos
```
//Login as Admin

{
    "email" : "admin@ar-nav.com",
    "password" : "password"
}



//Coords used in APP

SRH Vorplatz : 49.413912, 8.651406

SRH Park im Teich: 49.414357, 8.651720

Park am Cube: 49.413185, 8.653858

SRH Bib: 49.412210, 8.654399 


//HTTPS
./keys
Deactivated in Dev mode
AR.JS requires HTTPS
solved by redirecting users so google pages link
Cert ... OKnUqYcgGknoYHZT

```



### Working Features

Backend ( Port 3005)

NodeJS
    Express
    JOI (Validation)
    JSONWebToken
    Express Handlebars (View Engine for Serverside Testing Websites)
    bcrypt (Password hashes)
    mongoose (MongoDB)
    dotenv (env-Variables)

    :DEV
    concurrently (start multiple scripts with one command)
    nodemon

-> Backend is REST API
    Provides data form DB
    Validates incomming form data
    login/signup system with JWT in Cookie
    validates users (JWT token | cookie validation)
    private routes

    
Test Frontend (NodeJS views with handlebars)
    login/logout/signup user
    navigation (routes)
    redirection to main content
    validate form data
    error handling and representation
    validate user with token and grant access to private route if token/cookie is valid



Production Frontend (Client Folder Port 8080)
    VueJs
    Vueify (pretty templates)
    axios (communicate with REST-API)
    vue-router (route through vue views)



### INFOS for the examination

where to find the Features

Feature Nr.

1       BACKEND

1.a      Ortsbezogene Informationen und Daten werden in einer Datenbank gespeichert               
       -> (GET http://127.0.0.1:3005/locations)

1.b    Die Daten sind über eine geeignete API abrufbar (z.B. REST) 
       ->  (GET http://127.0.0.1:3005/locations - Name, lat/lon, description)                           

1.c     Lese- und/oder Schreibzugriffe sind über Authentifizierungsmechanismen                  
        (z.B. JSON Webtoken) geschützt.
        -> ./routes/verifyToken.js (JWT and JWT in Cookie)

1.d     Lese- und/oder Schreibzugriffe auf verschiedene Inhalte sind durch ein                  
        Autorisierungskonzept geschützt (z.B. Admin-Modus)
        -> Not fully ready yet. Began to implement user roles in DB, 
            Node accessControl (./accessControl)
     

2       FRONTEND APP

2.a     Objekte werden an der korrekten Position in das Sichtfeld, 
        bzw. auf dem Display eingeblendet
        -> Scan Marker or Look for Object

2.b     Objekte werden mit der korrekten Größe in das Sichtfeld, bzw. auf 
        dem Display eingeblendet
        -> Scale and size aof object are hardcoded

2.c     Objekte werden mit der korrekten Ausrichtung in das Sichtfeld, bzw.
        auf dem Display eingeblendet
        -> Face to Player

3       Extra Features

3.a     Zusatzinformationen zu Objekten sind abrufbar (z.B. Textinformationen)
        -> Take a Look at the Comment Section
            Coodinates and Komments with description
            -> AR-Mode Description of the Object on the Pink plane as Text

3.b     Die App ermöglicht ein Token-basiertes Login in die Backend API
        -> Login system - Login form via nodejs view form or vue landingpage

3.c     Die App bietet abhängig von der Benutzerrolle verschiedene Funktionen
        an (z.B. Admin-Modus)

3.d     Objekte in der Nähe werden auf einer Karte 
        -> Leaflet.js map with tiles from OpenStreetMap

3.e     Über eine Navigation (z.B. Einblendung von Pfeilen) kann zu einem 
        Objekt/Objektteil navigiert werden.
        -> Navigation over Map via leaflet.js leaflet.routing machine
            -> click on marker and follow

3.f     Benutzer können Kommentare an einem Objekt anbringen
        -> Comment Section Kommentare = Posts per Location

3.g     Kommentare können Unterkommentare haben (mind. eine Ebene)
        -> Posts can have unlimited Comments

3.h     Live Informationen zu einem Objekt werden angezeigt und die 
        Darstellung in der App bei Bedarf aktualisiert 
        (z.B. Temperatur, Wind, …)
        -> API => http://api.openweathermap.org

4       Bonus Features

4.a     Backend

4.a.a   Input validation (Login, Register,..)
        -> 

4.a.b   Hashed Passwords with bcrypt
        -> GET  http://127.0.0.1:3005/auth/user

4.a.c   Evironment Variables (dotenv)#
        ./.env

4.a.d   Mongo Database in Cloud

4.b     Frontend

4.b.a   Leaflet Map / Openstreetmap in Dialog, interactive
        
4.b.b   e3335e744d6567a1f1986dba9b4773f5

        






//DELETE BEVOR DEPLOYMENT

e3335e744d6567a1f1986dba9b4773f5
api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=13e54b46b705ad698e7f60c5b8fee2bb
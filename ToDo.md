- Change Routes and add /api/
- make folders for validation 
- check where to add the frontend (logic and stuff for pages)
- Purge old Session stuff (express-session)


BACKEND
[X] REST API 
        [X] auth.js
                [X] register
                        [X] Validate input (JOI)
                        [X] Check if email exists
                        [X] Check if name exists
                        [X] Hash Password (bcrypt)
                        [X] Store new User in DB
                [X] login user
                        [X] Valtdate input (JOI)
                        [X] Check if email/password is valid
                        [X] Assign JSON WEB TOKEN to UID
                        [X] Redirect to main app
                [ ] logout user
                        [ ] Make Token invalid
                        [ ] Redirect to index

        [ ]verifyToken.js (verify user access to private routes)
                [ ] No token in Header -> no Access
                [ ] Token Valid -> User = valid
                 
           [ ] Comments
           [ ] forms

        [ ] Views
           [ ] main App
           [ ] index
           [ ] forms
                [ ] login
                [ ] register
           [ ] logout

        



[ ] DB (Connection, Model, Secret Acc Data-> ENV)
+ DotEnv
+ Register User
+ Login
+ Validate Input Data
+ JSON WEb Token
- Gelocation Data -> Calc Distance to POI
- Get Geolocation POI
- APIs:
        - GLTF Models
        - Geolocation POI

FRONTEND
+ Register Form
+ Login Form (Btn: Register, Login, Guest)
+ Main
    - Leaflet: (Show POIs per category)
        -> should max that to 5 per x km or smth
        -> Zoom, Toggle Sattelite Images
        -> 
    - Calc distance to POI and other Calculations
    - AR.js basic setup
    - Geolocation Position Data
    - Get Data from SRV (Geolocation POI and Distance to POI)
    - Get 3D Models
    - Admin:
            - Resize and Position Models
              -> Push Data back to DB
            - Add ToDo Comments
    - User:
            - Add Comments and Comments on Comments
    - Guest:
            - Only Demonstration (View Mode without Comments)




What now: Get Data from OpenStreetMap an pass it to DB

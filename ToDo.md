- Change Routes and add /api/
- make folders for validation 
- check where to add the frontend (logic and stuff for pages)
- Purge old Session stuff (express-session)


BACKEND
+ Routing
+ DB (Connection, Model, Secret Acc Data-> ENV)
+ DotEnv
+ Register User
+ Login
+ Validate Input Data
+ JSON WEb Token -> Session
- Gelocation Data -> Calc Distance to POI
- Get Geolocation POI
- APIs:
        - GLTF Models
        - Geolocation POI

FRONTEND
- Register Form
- Login Form (Btn: Register, Login, Guest)
- Main
    - Leaflet: (Show POIs per category)
        -> should max that to 5 per x km or smth
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


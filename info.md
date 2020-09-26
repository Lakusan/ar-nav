//MongoDB Atlas

OKnUqYcgGknoYHZT:user1
NsdQXErIJWYOLE7m:puser
mongodb+srv://<username>:<password>@arcluster.x9c0h.mongodb.net/<dbname>?retryWrites=true&w=majority

//Login as Admin

{
    "email" : "admin@ar-nav.com",
    "password" : "password"
}


// Collections of the DB






//COORDS USED IN AR_APP

SRH Vorplatz : 49.413912, 8.651406

SRH Park im Teich: 49.414357, 8.651720

Park am Cube: 49.413185, 8.653858

SRH Bib: 49.412210, 8.654399 

HTTPS -> in Keys Folder and deactivated in Dev mode
Cert ... OKnUqYcgGknoYHZT
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem

//location model
{
    "name" : "test",
    "lat": "49.4415",
    "lon": "8.4458",
    "description": "This is the Description",
    "post": {"data": {"author": "post author", "message": "Post Message",  "comment": { "author" : "Comment Author", "message" : "Comment Message"}}},
    "model": "one.gltf",
    "author": "Fritz"
}


//register user model

 

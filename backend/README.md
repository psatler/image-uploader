> Backend of image uploader

This is the backend of an image uploader app which makes use of Express, MongoDB, Multer for dealing with files. More dependencies can be found below.

# How to run
You need to create a `.env` file as shown in the `.env.test` in the root directory of the backend folder.

It was also created a script to run either in dev mode or production mode (when deployed). In dev mode, it uses _nodemon_ to restart automatically whenever there is a javascript file modification.

```js
npm run dev // for development mode
```
or
```
yarn dev
```

# Folder Structure
- __config__: Holds the configuration of multer, like the type of files allowed to upload, the size limit, etc.
- __models__: Defines the fields to be stored about the posts as well as features of deletion from,local disk when a file is deleted from mongodb.
- __routes__: As the name says, defines the routes used by the app.


# Some Dependencies

- _morgan_: for logging http requests.
- _multer_: to handle requests of the type *Multiform part* middleware.
- _mongoose_: middleware for mongoDB. It was used. an MongoDB Compass to develop locally on Windows 10.
- _nodemon_ for local development restarts.
- _dotenv_ for environment variables. There is a _.env.test_ file for guidance.
- [_cors_](https://www.npmjs.com/package/cors): to enable CORS 

# Some software used as helpers
- [MongoDB](https://www.mongodb.com/products/compass) Compass for setting up MongoDB locally
- [Insomnia](https://insomnia.rest/) for testing http requests



# How to run
It was created a script to run either in dev mode or production mode (when deployed). In dev mode, it uses _nodemon_ to restart automatically whenever there is a javascript file modification.

```js
npm run dev // for development mode
```
or
```
yarn dev
```


# dependencies used

- _morgan_: for logging http requests
- _multer_: to handle requests of the type *Multiform part* middleware
- _mongoose_: middleware for mongoDB. It was used an MongoDB Compass to develop locally on Windows 10.


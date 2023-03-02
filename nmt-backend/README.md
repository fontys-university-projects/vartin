# Backend Documentation

# Table of Content
- [Backend Documentation](#backend-documentation)
- [Table of Content](#table-of-content)
- [Initialization](#initialization)
- [Code Explanation](#code-explanation)
  - [User](#user)
    - [**Authentication endpoint (login, register)**](#authentication-endpoint-login-register)
    - [**Info, Settings, Password Change**](#info-settings-password-change)
    - [**Diary**](#diary)
  - [Article](#article)
    - [**Creation**](#creation)
    - [**Fetching**](#fetching)
  - [Community](#community)
    - [**Post Creation**](#post-creation)
    - [**Comment Creation**](#comment-creation)
    - [**Fetching**](#fetching-1)

# Initialization

Firstly we need to install all the packages 
```sh
npm install
```
After that we need to setup the .env check out [This Document](doc/INITIALIZATION.md)

And last but not least there are two ways to run the backend (nodemon makes it auto restart on crash)

```sh
nodemon index.js
```
OR
```sh
node index.js
```

# Code Explanation
> The coding structure is taken by LogRocket which is heavily inspired of the code-flow of Microsoft's. Each and every folder is explained what it does.

## User
[Back to Top](#table-of-content)

In the user we have everything focused on the user flow (authentication, diary, settings, personal info, etc.)
- [User Controller](controllers/user.controller.js)
- [User Service](services/user.service.js)
- [User Route](routes/user.js)

### **Authentication endpoint (login, register)**

The registration endpoint is focused on checking if the user exists from the database and if it doesn't it does multiple validations using the [validation utility](utils/validation.js) and hashes the password using bcrypt encoding

The login endpoint is checking if everything is alright with the user's credentials and then generates a JWT token (currently the tokens last forever and there is no way of de-validating them) 

### **Info, Settings, Password Change**
The information endpoint is giving all the necessary information of the user (like personal details, user role, creation date, email verification etc)

The settings endpoint is responsible for the modification of the user's personal information and responsible for password changing

### **Diary**
The diary creation is slightly more complex, it checks for the 24 hour cycle (Server time) which allows users to modify their diary using the prisma upsert method, you are only allowed to have one entry per day, but you are allowed to modify that entry as many times as you would like. There is also checking if the user is Premium for the advanced entries.

## Article
[Back to Top](#table-of-content)

- [Article Controller](controllers/article.controller.js)
- [Article Service](services/article.service.js)
- [Article Route](routes/article.js)

### **Creation**
Article creation requires you to have the "Author" role, the endpoint is locked with a middleware, which requires you to have that role! Currently this is not implemented in the Frontend, you can either use some client or you can use the Prisma Studio `npx prisma studio` to create a new article.

### **Fetching**
The articles are fetched automatically in asc order, in the future there is an option to make queries and do the other sorting as well as adding the feature to do popularity tracking

## Community
[Back to Top](#table-of-content)

- [Community Controller](controllers/community.controller.js)
- [Community Service](services/community.service.js)
- [Community Route](routes/community.js)

### **Post Creation**
To create a post, you need to be authenticated, currently both the "User" and "Premium" roles can do unlimited posts, but in the future the limit can be implemented, this can be done by using prisma find many and set start and end date, then we can do array.length, if they reach certain limit, they will be blocked from creating

### **Comment Creation**
Comment creation, does not require any special role, both free and premium users are allowed to comment.

### **Fetching**
The posts and their comments are fetched automatically in asc order.

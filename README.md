# Backoffice RECYCLO +
Application for recycle life and ecosystem

## IT using in project
Backend Adonis framework of NodeJS
Libraries : Joi, Typescript, Lucid
Database : MySQL

## Pre-requirements
- Languages : Javascript, SQL, Typescript (High recommended)
- Frameworks : AdonisJS
- Library : Joi & Express

# install project back
> cd back && npm ci
> cp .env.example .env
> node ace migration:fresh
> node ace db:seed -i  (select user first seeds)
> node ace db:seed -i  (select others seeds)

# install project mobile
> cd mobile && npm ci


Validation :
    Joi : Using reactive native version
    React : Using component for validation
API :
    AdonisJs: Auth
    AdonisJS: Database (MySQL)
    NodeJS: Using Typescript
Requirements :
    oAuth : https://www.npmjs.com/package/react-native-app-auth
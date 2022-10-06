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
> node ace serve --watch

# install project mobile
> cd mobile && npm ci --force


Validation :
    Joi : Using reactive native version
    React : Using component for validation
API :
    AdonisJs: Auth
    AdonisJS: Database (MySQL)
    NodeJS: Using Typescript
Requirements :
    oAuth : https://www.npmjs.com/package/react-native-app-auth

# SMTP Access for test :
    > SMTP_HOST=smtp.datanoorsolution.com
    > SMTP_PORT=587
    > SMTP_USERNAME=no-reply@datanoorsolution.com
    > SMTP_PASSWORD=i906Cu1,DDMuva4yykKS~E#a

# Error Argon2 reinstall
    > cd node_modules/bcrypt
    > node-pre-gyp install --fallback-to-build

# Dump db from Docker
    > ocker exec back_db_1 /usr/bin/mysqldump -u root --password=c++ edge_recyclo > backup.sql
# Lauch bash Docker
    > docker exec -it back_db_1 bash -l

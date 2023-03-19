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

# install project mobile
> cd mobile && npm ci --force

# Validation :
    Joi : Using reactive native version
    React : Using component for validation

# API :
Preprod API URL
    > http://app.eksneks.com:3333
To change the API for localhost :
    > mobile/src/api/constants.js > BASE_URL

# Config (Class: Config)
This class provides a set of methods to retrieve configuration data from local storage.
## Properties:
    user: null | Object
    The user object that contains the configuration data.
## Methods:
 init(): Promise<void>
    Initializes the user object by retrieving the configuration data from local storage.

  getToken(): Promise<string | false>
    Returns the bearer token string if the user is authenticated with a bearer token; otherwise, returns false.

  getUserEmail(): Promise<string | false>
    Returns the user's email if it is available; otherwise, returns false.

## Usage:
> import Config from '~/services/EKSNEKS.config';

> // To initialize the user object and retrieve the configuration data:
> await Config.init();

> // To get the bearer token:
> const token = await Config.getToken();

> // To get the user's email:
> const email = await Config.getUserEmail();

This class is useful when working with configuration data that needs to be retrieved from local storage. The init() method initializes the user object by retrieving the configuration data from local storage. The getToken() method returns the bearer token string if the user is authenticated with a bearer token; otherwise, it returns false. The getUserEmail() method returns the user's email if it is available; otherwise, it returns false.

To use this class, you can import it and call its methods as shown in the usage example above.
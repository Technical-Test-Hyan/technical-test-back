# Contacts API


This is an Api for you to control your contacts. A simple but very usable proposal.


## Functionalities

- Create, edit, delete users
- Create, edit, delete contacts
- Connect your contacts with your account
- Take control of your contacts


## Your api link

[API](https://contacts-api-hyan.herokuapp.com/)

## Your api documentation link

[DOCUMENTATION](https://technical-test-m6-api-docs.vercel.app/)


## Running locally

Clone the project

```bash
  git clone "key of project"
```

Enter the directory

```bash
  cd technical-test-back
```

Install the dependencies

```bash
  yarn
```
In the file .env, put our credentials to access your database

Run the migrations

```bash
  yarn typeorm migration:generate src/migrations/createTables -d src/data-source.ts
```
```bash
  yarn typeorm migration:run -d src/data-source.ts
```

Start the server

```bash
  yarn dev
```


## Technologies used


**Back-end:** NodeJS, UUID, jsonwebtoken, bcrypt, TYPEORM, TypeScript, Express, Yup


## My contacts


- [github](https://github.com/hyanlopes)
- [portifolio](https://hyan-portifolio.vercel.app/)
- [linkedin](https://www.linkedin.com/in/hyanlopes/)

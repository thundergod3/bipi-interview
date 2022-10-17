# Bipi Interview

## Technology Stack

- NodeJS
- ExressJS
- GraphQL
- KnexJS
- Postgresql

## Setup

```
npm install
```

or

```
yarn install
```

After that, need to install global knex to using cli

```
npm install -g knex
```

or

```
yarn global add knex
```

Then, need you setup your local database postgres base on `.env.example`
After finished, run migration

```
npx knex migrate:latest --knexfile db/knexfile.js
```

Finally, just run below command to enjoy the application :D

```
npm run dev
```

or

```
yarn dev
```

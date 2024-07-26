## Stacks
- Include JWT and Bcrypt for encryption
- MVC architecture using Node JS and Express for HTTP request
- Using Postgresql and Sequelize for ORM
- Axios used for hiting API from third party

## How To Use
- NPM Install
- Edit config file according to your database setup
- Use sequelize-cli to make new models and migrations (I recommend using dbdiagram.io first to design the schema )
- make env files with

```
PORT = 3001
SECRET_KEY = "secret"
BASE_URL = "http://dev3.dansmultipro.co.id/api/recruitment/positions"
```

- run script npm run dbsetup
- run npm start to run project

## Sequelize

1. Sequelize init => create config/config.json
2. Setup dan ubah nama database
3. npx sequelize-cli db:create
4. Create model and migration npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
5. Ubah file di migration dan models
6. npx sequelize-cli db:migrate
7. generate seed

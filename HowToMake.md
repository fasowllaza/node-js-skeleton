## Stacks
- Include JWT and Bcrypt for encryption
- Using Postgresql and Sequelize for ORM

STEP by Step

1. npx sequelize-cli model:generate --name Users --attributes id:INTEGER,email:STRING,password:STRING,status:STRING,BorrowsId:INTEGER,role: STRING

2. npx sequelize-cli model:generate --name Borrows --attributes BorrowsId:INTEGER,BookId:INTEGER,UserId:INTEGER,startBorrow:DATE,endBorrow:DATE,status:STRING

3. npx sequelize-cli model:generate --name Books --attributes id:INTEGER,title:STRING

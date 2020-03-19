<h3 align="center">
  Challenge 2: FastFeet
</h3>

<p>
This challenge is part of Final Challenge, which is a complete app (Back-end, Front-end Mobile) that is evaluated for the issue of Bootcamp GoStack Certificate
</p>

## :rocket: About the challenge

In this challenge I had to put in practice what I've learned about Nodejs so far<br>

- Allow that user authenticate by using email and password
- Use authentication library called JWT (Json web token)
- Validate data entry schema with Yup
- Create admin user using seeds from sequelize
- Allow to create admin users through POST and use bcrypt to encrypt the password
 . Use Sequelize Hook *beforeSave*
- Create Tables using migration from sequelize
- Allow only admin insert recipients data through JWT

### **Tools that I've used**

- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (PostgreSQL);
- Docker
- Vscode

### **What I've learned**

- Yarn/Npm
- Nodejs Concepts and how it really works
 . Goolgle V8
 . Single-Thread
  - Multi-Thread through	C++ by lib libuv
  - Background-Threads
 . Event Loop
  - Callstack
 . Non-blocking IO
  - Web sotcket (Persistent request)
- ExpressJS framework
 . Good for micro-services
 . Without opinion/structure
- How an API works
- How to use and add extra configs on Nodemon
- How to use sucrase to add Es6/7+ features in Nodejs (I could use also Babel)
- Docker concepts and how it works
- How to apply editor config
- How to use Sequelize ORM for Postgres/Mysql
- How to use EsLint / Prittier and the benefits of using it
- How to use migrations / seeds
- How to organize folders structure and how to import files
- How to use bcrypt library
- How to validate data schema through Yup library
- How to use local/global middleware, is this case I've created auth middleware
- Concepts of JWT (Json Web Token) and how to apply it
 . Goolgle V8
 . Headers (token type, algorithm)
 . Payload (Additional data)
 . Signature
- Authentication through JWT
- HTTP verbs

### **How to use it**

Install node modules
```
yarn install
```

Run migrations
```
yarn sequelize db:migrate
```

Run Seed
```
yarn sequelize db:seed:all
```

Run Server
```
yarn dev
```

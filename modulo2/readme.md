-- CRIAR UMA NOVA ESTRUTURA APLICACAO --
yarn init -Y Criar o projeto
yarn add express

-- SUCRASE E NODEMON --
yarn add sucrase nodemon -D

-- Usando o padrão do airnbnb --
yarn add eslint -D
yarn eslint --init
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

-- Instal Sequelize --
yarn add sequelize
yarn add sequelize-cli -D

Install Dependencies Postgress
yarn add pg pg-hstore

Create Migrations
yarn sequelize migration:create --name=create-users
yarn sequelize db:migrate
yarn sequelize db:migrate:undo
yarn sequelize db:migrate:undoAll

yarn add bcryptjs
yarn add jsonwebtoken

#validacoes
yarn add yup

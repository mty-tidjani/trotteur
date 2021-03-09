# Coq Trotteur

Repo for coq trotteur interview test.

## What is inside?

- Node api (./api)
- React client (./client)

## Start the app

1. Clone the repo

        $ git clone https://github.com/mty-tidjani/trotteur.git

2. Install dependencies

        $ cd ./api && yarn 
        $ cd ./client && yarn
    
3. Start apps

    You must update the enviroments variables in ./api first
        
        $ cd ./api && cp .env.example .env && nano .env

        $ npm start

    You should be getting the client(gatsby) on localhost:3000 and the api on localhost:4040

    
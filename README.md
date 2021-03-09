# Coq Trotteur test repo

Repo for coq trotteur interview test.

## What is inside?

- Node api (./api)
- Gatsby client (./gatsby)

## Start the app

1. Clone the repo

        $ git clone https://github.com/mty-tidjani/trotteur.git

2. Install dependencies

        $ cd ./api && yarn 
        $ cd ./gatsby && yarn
    
3. Start apps

    You must update the enviroments variables in ./api first
        
        $ cd ./api && cp .env.example .env && nano .env

        $ npm start

    You should be getting the client(gatsby) on localhost:8000 and the api on localhost:4040

    
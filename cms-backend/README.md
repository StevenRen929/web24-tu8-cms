## Backend flow

GET "/weather"

- index.js -> loaders/index.js -> loaders/express.js ->

- app/routes -> app/middleware(maybe) -> app/validation -> app/controller -> app/services -> return data from openweatherAPI

## Folder structure

- index.js (entry file)
- loaders/index.js (load all related that needs to start the server, eg: express, mongoose)
- loaders/express (express related config, eg: routes, port)

##

- routes (this is where we define all our URL)
- middleware (anything that need to be reject before enter business logic, eg: authUser)
- validation (validate frontend req avoid something like email=SELECT\*FROM users)
- controller (handle stuff related to req and res)
- services (business logic/third party api)

mvc(model, view(react),controller)

model (ORM)

.env (environment variables to START YOU APP, DO NOT COMMIT THIS FILE this should be ignore in the .gitignore)

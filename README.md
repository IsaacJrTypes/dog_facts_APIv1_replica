# Dog Facts API v1 Replica


## Introduction
The following is a API replica mimicking [Dog API](https://dogapi.dog/docs/api-v2) GET fact API endpoint. The behavior uses http requests to deliver dog facts in an JSON object. 

The project creates a `Get /facts` endpoint which fetches dog fact data from an array. 

Built with Node.js and Express

## Default Behavior
When the user make a get request `/facts`, the server will send a JSON object with an array of all the dog facts from `dog_facts.js`

## Dynamic Behavior
If the user makes a get request `/facts?number=3`, the server will send a JSON object with an array of 3 dog facts pulled from `dog_facts.js`. 

Any input deviating from these behaviors, the server will send appropriate error status with a message hinting valid inputs.

## Examples of JSON Response
### Success
>`{  "facts":  ['Corgi is Welsh for "dwarf dog".'],  "success":  true  }`

### Failure
>`{ "error": "Request a number from range 1 - 435", "success": false }`

## How to Run the Server

1. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) or [Fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) the repository from Github.

1. In project directory terminal, run `npm install` to install all dependencies. Notice there is now a package-lock.json created.

1. In terminal, run `npm run build` to create a server instance

3. In your web browser, navigate to: http://localhost:3000/ to view a local instance of the server.

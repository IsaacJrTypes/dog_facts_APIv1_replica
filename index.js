import express from 'express'
import { data } from './assets/dog_facts.js'

const app = express()
const port = process.env.PORT || 3000

app.set('port', port)

app.get('/', (req, res) => {
  res.type('text/plain')
  res.send('heeeeellllooooooo')
})

/*
Create /facts endpoint
 [x] read number quary prameters
 [x] if number is provided, return that many fact. Else, return all facts
*/
app.get('/facts', (req, res) => {
  // Grab url from param
  const queryResponse = req.query
  let jsonReponse // Response conditional
  const queryNumValue = Math.abs(parseInt(queryResponse.number))

  //Handles if number not queried
  if (!queryResponse.hasOwnProperty('number')) {
    jsonReponse = { facts: [...data], success: true }
    res.type('json')
    res.send(jsonReponse)
    //Handles valid input range
  } else if (queryNumValue > 0 && queryNumValue <= data.length) {
    jsonReponse = { facts: data.slice(0, queryNumValue), success: true }
    res.type('json')
    res.send(jsonReponse)
  } else {
    jsonReponse = {
      error: `Request a number from range 1 - ${data.length}`,
      success: false,
    }
    res.status(406).type('json').send(jsonReponse)
  }
})

// Error handling
app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404: page not found')
})

app.listen(app.get('port'), () => {
  console.log(`Express running at ${port}`)
  console.log(`In browser go to: http://localhost:${port}`)
})

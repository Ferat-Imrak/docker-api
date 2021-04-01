const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([
      {
          name: 'Ferhat',
          email: 'ferhat@gmail.com'
      },
      {
          name: 'Alice',
          email: 'alice@gmail.com'
      },
      {
          name: 'Jake',
          email: 'jake@yahoo.com'
      },
      {
          name: 'Maria',
          email: 'maria@yahoo.com'
  },
  {
      name: 'Alex',
      email: 'alex@yahoo.com'
}
  ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express');
const res = require('express/lib/response');
const app = express();
const fs =require('fs')
const path = require('path');

const databasePath = path.join(__dirname, 'database.json')
const ansPath = path.join(__dirname, 'ans.json')

const data = fs.readFileSync(databasePath)
const database = JSON.parse(data)

const ans = fs.readFileSync(ansPath)
const answer = JSON.parse(ans)

// Trả về answer bất kì
app.get('/api/answer', (req, res) => {
  res.set('title', 'Answer')
  //get random answer
  const randomAnswer = answer.ans.sort(() => 0.5 - Math.random()).slice(0, 1)
  res.json(randomAnswer)
})


//Tarot

app.get('/api', (req, res) => {
  const response = { status: "Successfully deploying API" };
  res.set('title', 'Tarot API')
  res.send(response);
});

app.get('/api/author', (req, res) => {
  res.set('title', 'Author')
  res.send({ author: "@yun.khngn", date_created: "15/5/2023" });
});

// Trả về tất cả các lá bài
app.get('/api/cards', (req, res) => {
  res.set('title', 'Cards database')
  res.json(database.cards)
})

// Tra 1 lá bài
app.get('/api/cards/:slug', (req, res) => {
  const slug = req.params.slug
  const card = database.cards.find((card) => card.slug === slug)
  if (!card) {
    return res.status(404).json({ error: 'Card not found' })
  }
  res.set('title', card.name)
  res.json(card)
})

// Random 3 lá bài
app.get('/api/random', (req, res) => {
  const cards = database.cards.sort(() => 0.5 - Math.random()).slice(0, 3)
  res.set('title', 'Random 3 cards')
  res.json(cards)
})

// Tra thông tin của một lá bài bất kì
app.get('/api/cards/:slug/:field/', (req, res) => {
  const slug = req.params.slug
  const field = req.params.field
  const card = database.cards.find(card => card.slug === slug)

  if (!card) {
    return res.status(404).json({ message: 'Card not found' })
  }

  if (card[field]) {
    res.set('title', `${card.name} - ${field}`)
    res.json({ 
      [field]: card[field] })
  } else {
    res.status(404).json({ message: `Field ${field} not found` })
  }
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;
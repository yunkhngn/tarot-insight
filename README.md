# Tarot Insight Repository

Tarot Insight Repository is an open-source code repository for a cross-platform tarot card reading application. This repository provides source code, documentation, and resources necessary to build and develop a tarot card reading application.

*Author: @yunkhngn*

----------
## 1. Description
The Tarot Insight app allows users to explore and discover the fascination of tarot cards through the following features:

- Tarot card collection: The repository provides a complete collection of tarot cards, including both Major Arcana and Minor Arcana. Users can learn about each card and its meaning.

- Automatic card reading: The app offers the ability to automatically draw a tarot card, allowing users to receive a random card and corresponding message to reflect and learn from.
- Learn about tarot: The repository provides detailed documentation and guidance on the history, structure, and usage of tarot cards. Users can learn about tips, methods, and techniques for using tarot cards.
- User-friendly interface: The app is designed with a simple and user-friendly interface, making it easy for users to interact and experience tarot card reading conveniently and easily.
- Tarot Insight Repository is a useful resource for those interested in developing and expanding their own tarot card reading application.

<img src="https://thepalmtreehouse.com/wp-content/uploads/2022/09/photo-1600429991827-5224817554f8.jpeg" style="border-radius:10px"></img>

## 2. Installation
To install the app, follow these steps:

1. Clone the repository to your local machine

```sh
git clone https://github.com/yunkhngn/tarot-insight.git
cd tarot-insight
```
2. Install dependencies

```sh
yarn install
## or npm install
```

Run the app
```sh
yarn start
## or npm start
```
3. Install API dependencies
```sh
cd api

yarn install

## or npm install

node index.js
```
## 3. Usage
To use the app, follow these steps:

Launch the app on your preferred platform. Explore the tarot card collection and learn about each card. Draw a card to receive a message and reflect on its meaning.

Learn more about tarot cards and techniques for using them in readings.
Contributing.

## 4. Contribution

Contributions to Tarot Insight Repository are welcome! To contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or fix
3. Make changes and commit them to your branch
4. Submit a pull request to the main repository.

_____________
## API Documentation

> Tarot API provides information parsed from AE Waite's The Pictorial Key to the Tarot. This was created using ExpressJS and Nodejs.

### Quick start

```javascript
fetch("https://tarotinsight.vercel.app/api/")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    //extract data
  })
  .catch(function (error) {
    // handle what went wrong
  });
```

### Documentation

| GET path                      | Result                                  | Params                                                                                                          |
| :---------------------------- | --------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| `/api/` or `/api/cards` | return all cards                        |                                                                                                                 |
| `/api/cards/:name`   | return card with specified `name` | `'/the-magician'`,`'/the-fool'`... |
| `/api/cards/:name/:search/`        | search fields of one cards                        | `/the-magician/desc`                                                              |
| `/api/random`        | get 3 random card                     |                                                                                  |

**JSON format:**
```json
{
  "type":"Type majors or minors",
  "slug":"Slug",
  "name_short":"Short name",
  "name":"Name",
  "value":"Card index (string)",
  "value_int": "Card index (number)",
  "meaning_up": "Meaning up.",
  "meaning_rev": "Meaning reverse.",
  "desc": "Descriptions"
}
```

_____________
## 5. License

Tarot Insight Repository is licensed under the MIT License. See LICENSE for more information.
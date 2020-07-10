const express = require('express');
const koalaRouter = express.Router();
const pg = require('pg');
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  console.log('In /koalas GET');

  let queryText = `SELECT * FROM "koalas";`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`error in GET /koalas ${error}`);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  console.log(`In /koalas POST with`, req.body);

  const koalaToAdd = req.body;
  const queryText = `INSERT INTO "koalas" ("name", "age", "gender", "ready_to_transfer", "notes")
                        VALUES ($1, $2, $3, $4, $5);`;
  pool
    .query(queryText, [
      koalaToAdd.name,
      koalaToAdd.age,
      koalaToAdd.gender,
      koalaToAdd.ready_to_transfer,
      koalaToAdd.notes,
    ])
    .then((responseFromDatabase) => {
      console.log(responseFromDatabase);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error in POST /koalas ${error}`);
      res.sendStatus(500);
    });
});

module.exports = koalaRouter;

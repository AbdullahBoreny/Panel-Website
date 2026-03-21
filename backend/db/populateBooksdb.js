#! /usr/bin/env node
require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS books (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 255 )
);

INSERT INTO books (title) 
VALUES
  ('To Kill a Mockingbird'),
  ('The Alchemist'),
  ('Crime And Punishment');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://abdbor:12291229@n@localhost:5432/top_users",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

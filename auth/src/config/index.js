const port = process.env.PORT;
const host = process.env.HOST;
const db = process.env.MONGO_URL;
const apiUrl = process.env.API_URL;

module.exports = {
  port,
  host,
  db,
  apiUrl
}
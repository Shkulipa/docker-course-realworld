const port = process.env.PORT;
const host = process.env.HOST;
const db = process.env.MONGO_URL;
const authApiUrl = process.env.AUTH_API_URL;

module.exports = {
  port,
  host,
  db,
  authApiUrl
}
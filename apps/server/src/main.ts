import app from './app';
const PORT = process.env.PORT || 1999;
// import {connectDB} from "./config/db.js"

app.listen(PORT, () => {
  console.log(`listening at port http://localhost:${PORT}`);
});

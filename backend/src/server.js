require('dotenv').config()
const app = require('./app')

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
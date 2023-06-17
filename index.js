const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Francis');
})








const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listenig to port ${port}...`));
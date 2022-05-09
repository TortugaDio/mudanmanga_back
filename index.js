const app = require('./app');
const port = process.env.PORT || 3000;

app.listen( port , (...any) => {
    console.log(any);
    console.log(`Server running on port ${port}`);
})
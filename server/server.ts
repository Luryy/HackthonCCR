import app from './src/config/custom-express';

const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log(`Server on port ${port}`);
});
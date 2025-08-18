import cors from 'cors';
//import framework to get functionality like routing and middleware
import express from 'express';
//create an instance of express - actual server
const app = express();

app.use(cors());


//set up of route of the API
app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
});


//to start up our backend and show it in the console that it's running
app.listen(8080, () => {console.log("Server is running on port: 8080")});



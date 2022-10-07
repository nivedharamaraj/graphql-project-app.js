const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const { default: mongoose } = require('mongoose');

const schema = require('./server/schema/schema');

const app = express();
const cors =require("cors");

app.use(cors());
app.use('/sree',graphqlHTTP({
    graphiql:true,
    schema: schema
    
}));
//mongodb+srv://sree:<password>@graphql-cluster.hucxcjl.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://${process.env.mongoUserName}:${process.env.mongoUserPassword}@graphql-cluster.hucxcjl.mongodb.net/${process.env.mongoDatabase}?retryWrites=true&w=majority
`,{useNewUrlParser: true, useUnifiedTopology:true})
.then(()=> {
app.listen(4000,()=>{ 
    console.log('Listening for requests on my awesome port 4000');
});
})
.catch((e)=> console.log("Error:::"+e));
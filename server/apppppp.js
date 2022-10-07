const express = require('express');
const {graphqlHTTP} = require('express-graphql');

const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();
const port =process.env.PORT||4000

app.use('/nive',graphqlHTTP({
    graphiql:true,
     schema :schema,
    
})
);

mongoose.connect(`mongodb+srv://${process.env.mongoUserName}:${process.env.mongoUserPassword}@graphqlcluster.fvtjqp4.mongodb.net/${process.env.mongoDatabase}?retryWrites=true&w=majority
`,{useNewUrlParser: true, useUnifiedTopology:true})

.then(()=> {
app.listen({port : port},()=>{ 
    console.log('Listening for requests on my awesome port 4000');
});
})
.catch((e)=> console.log("Error:::"+e));


const express = require('express');
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema.js')
const mongoose = require('mongoose')
const cors = require('cors');

const app = express();

const gremlin = require('gremlin');

app.use(cors())
mongoose.connect("mongodb+srv://jonny:test123@productstutorial-ngm8y.mongodb.net/gqldb?retryWrites=true&w=majority", 
{ useNewUrlParser: true }).catch(error => console.log("THIS IS MY ERROR: " + error));
var connection = mongoose.connection;

connection.once('open', () =>{
    console.log('connected to db')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () =>{
    console.log("Now listening for requests on port 4000")
})


// const traversal = gremlin.process.AnonymousTraversalSource.traversal;
// const __ = gremlin.process.statics;
// const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
// const column = gremlin.process.traversal.column
// const direction = gremlin.process.traversal.direction
// const p = gremlin.process.traversal.P
// const pick = gremlin.process.traversal.pick
// const pop = gremlin.process.traversal.pop
// const order = gremlin.process.traversal.order
// const scope = gremlin.process.traversal.scope
// const t = gremlin.process.traversal.t
// const Graph = gremlin.structure.Graph;

// const g = traversal().withRemote(new DriverRemoteConnection('ws://localhost:8182/gremlin'));

// const v1 = g.addV('person').property('name','marko');
// // const v2 = g.addV('person').property('name','stephen').next();
// // g.V(v1).addE('knows').to(v2).property('weight',0.75).iterate();

// console.log(g.V())
// // console.lo(new DriverRemoteConnection('ws://localhost/127.0.0.1:8182/gremlin'))

// const marko = g.V().has('person', 'name', 'marko').next()
// const peopleMarkoKnows = g.V().has('person', 'name', 'marko').out('knows').toList()

// g.V().toList()
//   .then(names => console.log(names));

// //   peopleMarkoKnows.then(names => console.log(names[0].properties));
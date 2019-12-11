import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Charts } from './Charts'; 
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';



const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'iot';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
});










function App() {
/*
  handleDateChange = (e) => {
    const value = e.target.value;
    console.log(value)
  }


  console.log("TESTowe TESTY ");
  fetch(`http://numbersapi.com/455`)
  // fetch(`https://przyjazdy.pl/warszawa/s/145803`)
  // http://api.timezonedb.com/v2.1/get-time-zone?key=ONJSMB3BUZLL&format=json&by=zone&zone=Europe/Warsaw
  // http://api.timezonedb.com/v2.1/get-time-zone?key=ONJSMB3BUZLL&format=json&by=zone&zone=Europe/Warsaw
  .then(res => {
    if (res.ok) {
      return res
    }
    throw Error(res.status);
    console.log(res)
  })
  .then(res => res.json())
  .then(data => this.setState({
    text: data.text
  }))
  .catch(err => {
    this.setState({ text: "Jest problem :( " + err })
  })
*/
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
         <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/charts" component={Charts} />
              <Route component={NoMatch} />
            </Switch>
        </Layout>
      </Router>
    </React.Fragment>

  );
}

export default App; 

//libs
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import { Header, EmployeesList, Content, EmployerSchedule } from 'components';

//styles
import 'styles/index.css';

function App() {
  return (
    <Router>
      <main>
        <Header />
        <Content>
          <Switch>
            <Route path="/" exact component={EmployeesList} />
            <Route path="/employee/:id" exact component={EmployerSchedule} />
          </Switch>
        </Content>
      </main>
    </Router>
  );
}

export default App;

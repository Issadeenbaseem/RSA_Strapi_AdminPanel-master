/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from 'strapi-helper-plugin';
// clea
// Utils
import pluginId from '../../pluginId';
// Containers
import HomePage from '../HomePage';
import ApplicationPage from '../ApplicationPage';


const App = () => {
  return (
    <div>
      <Switch>
      
       {/* <Route path={`/plugins/${pluginId}`} component={Admin} exact /> */}
        <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
        <Route path={`/plugins/${pluginId}/:id`} component={ApplicationPage} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;

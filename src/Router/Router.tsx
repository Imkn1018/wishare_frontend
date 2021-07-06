import { memo, VFC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from '../components/templates/Layout';
import { RouteIndex } from './RouteIndex';

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route
        path="/"
        render={({ match: { url } }) => (
          <Switch>
            {RouteIndex.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                <Layout>{route.children}</Layout>
              </Route>
            ))}
          </Switch>
        )}
      />

      {/* それ以外のページ */}
      {/* <Route path="*">
        <Page404 />
      </Route> */}
    </Switch>
  );
});

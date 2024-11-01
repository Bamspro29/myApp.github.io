import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Composant pour les routes privées, accessible uniquement aux utilisateurs connectés
const PrivateRoute = ({ component: Component, role, allowedRoles, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      // Vérifie si l'utilisateur est authentifié et a le rôle requis
      role && allowedRoles.includes(role) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;

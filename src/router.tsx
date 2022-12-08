import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
import { RequireAuth } from 'src/contexts/Auth/RequireAuth';


import SidebarLayout from 'src/layouts/SidebarLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import BaseLayout from './layouts/BaseLayout';


const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

const HomeDashboard = Loader(lazy(() => import('src/content/dashboards/Home')));
const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('src/content/pages/Status/Status500'))
);
const StatusComingSoon = Loader(
  lazy(() => import('src/content/pages/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/content/pages/Status/Maintenance'))
);
const Orgs = Loader(
  lazy(() => import('src/content/pages/Orgs'))
);
const AddOrg = Loader(
  lazy(() => import('src/content/pages/Orgs/AddOrg'))
);
const Login = Loader(
  lazy(() => import('src/content/pages/Login'))
);

const Projects = Loader(
  lazy(() => import('src/content/pages/Projects'))
);
const AddProject = Loader(
  lazy(() => import('src/content/pages/Projects/AddProject'))
);

const Charts = Loader(
  lazy(() => import('src/content/pages/Projects/components/Charts'))
);
const Equipments = Loader(
  lazy(() => import('src/content/pages/Equipments'))
);
const AddEquipment = Loader(
  lazy(() => import('src/content/pages/Equipments/AddEquipment'))
);

const Users = Loader(
  lazy(() => import('src/content/pages/Users'))
);
const AddUser = Loader(
  lazy(() => import('src/content/pages/Users/AddUser'))
);
const routes: RouteObject[] = [
  {
    path: '',
    element: <RequireAuth><SidebarLayout /></RequireAuth>,
    children: [
      {
        path: '/',
        element: <HomeDashboard />
      },
    ]
  },
  {
    path: 'orgs',
    element: <RequireAuth><SidebarLayout /></RequireAuth>,
    children: [
      {
        path: '',
        element: <Orgs />
      },
      {
        path: ':id',
        element: <RequireAuth role="admin"><AddOrg /></RequireAuth>
      },
      {
        path: 'add',
        element: <RequireAuth role="user"><AddOrg /></RequireAuth>
      },
    ]
  },
  {
    path: 'users',
    element: <RequireAuth><SidebarLayout /></RequireAuth>,
    children: [
      {
        path: '',
        element: <Users />
      },
      {
        path: ':id',
        element: <RequireAuth role="user"><AddUser /></RequireAuth>
      },
      {
        path: 'password/:id',
        element: <RequireAuth role="user"><AddUser editPassword={true} /></RequireAuth>
      },
      {
        path: 'add',
        element: <RequireAuth role="user"><AddUser /></RequireAuth>
      },
    ]
  },

  {
    path: 'projects',
    element: <RequireAuth><SidebarLayout /></RequireAuth>,
    children: [
      {
        path: '',
        element: <Projects />
      },
      {
        path: 'charts/:id',
        element: <Charts />
      },
      {
        path: 'org/:orgId',
        element: <Projects />
      },
      {
        path: ':id',
        element: <RequireAuth role="user"><AddProject /></RequireAuth>
      },
      {
        path: 'add',
        element: <RequireAuth role="user"><AddProject /></RequireAuth>
      },
    ]
  },

  {
    path: 'equipments',
    element: <RequireAuth><SidebarLayout /></RequireAuth>,
    children: [
      {
        path: '',
        element: <Equipments />
      },
      {
        path: 'project/:projectId',
        element: <Equipments />
      },
      {
        path: ':id',
        element: <RequireAuth role="user"><AddEquipment /></RequireAuth>
      },
      {
        path: 'add',
        element: <RequireAuth role="user"><AddEquipment /></RequireAuth>
      },
    ]
  },
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: 'dashboard',
    element: <RequireAuth><SidebarLayout /></RequireAuth>,
    children: [
      {
        path: '',
        element: <HomeDashboard />
      },
      {
        path: 'dashboard',
        element: <HomeDashboard />
      },
    ]
  }
];

export default routes;

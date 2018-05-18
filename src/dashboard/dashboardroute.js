import App from '../App';


const dashboardRoutes = [{
  path: '/dashboard',
  name: 'Dashboard',
  icon: 'pe-7s-graph',
  component: App,
},
{
  path: '/user',
  name: 'User Profile',
  icon: 'pe-7s-user',
  component: App,
},
{
  path: '/table',
  name: 'Table List',
  icon: 'pe-7s-note2',
  component: App,
},
{
  path: '/typography',
  name: 'Typography',
  icon: 'pe-7s-news-paper',
  component: App,
},
{
  path: '/icons',
  name: 'Icons',
  icon: 'pe-7s-science',
  component: App,
},
{
  path: '/maps',
  name: 'Maps',
  icon: 'pe-7s-map-marker',
  component: App,
},
{
  path: '/notifications',
  name: 'Notifications',
  icon: 'pe-7s-bell',
  component: App,
},
{
  upgrade: true,
  path: '/upgrade',
  name: 'Upgrade to PRO',
  icon: 'pe-7s-rocket',
  component: App,
},
{
  redirect: true,
  path: '/',
  to: '/dashboard',
  name: 'Dashboard',
},

];

export default dashboardRoutes;

import { NotFound, Pushes } from '../pages';

export const routes = [
  {
    path: '/dashboard',
    element: NotFound,
    exact: true,
  },
  {
    path: '/audience',
    element: NotFound,
    exact: true,
  },
  {
    path: '/pushes',
    element: Pushes,
    exact: true,
  },
  {
    path: '/offers',
    element: NotFound,
    exact: true,
  },
  {
    path: '/devices',
    element: NotFound,
    exact: true,
  },
  {
    path: '/metrics',
    element: NotFound,
    exact: true,
  },
];

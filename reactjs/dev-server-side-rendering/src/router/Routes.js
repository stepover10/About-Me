import React from 'react';
import Loadable from 'react-loadable';

const loading = () => <div>Loading...</div>;


const Countries = Loadable({
  loader: () => import('../pages/home/Home'),
  loading,
});

const Country = Loadable({
  loader: () => import('../pages/about/About'),
  loading
});

export default [
  {
    component: Countries,
    path: '/',
    exact: true
  },
  {
    component: Country,
    path: '/:name'
  }
];
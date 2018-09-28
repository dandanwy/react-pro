import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import home from '../components/home/home';

const router = [
    { 
      path: '/home',
      component: home,
    //  indexRoute: { component: Dashboard },
    //   childRoutes: [
    //     { path: 'about', component: About },
    //     { path: 'inbox',
    //       component: Inbox,
    //       childRoutes: [
    //         { path: '/messages/:id', component: Message },
    //         { path: 'messages/:id',
    //           onEnter: function (nextState, replaceState) {
    //             replaceState(null, '/messages/' + nextState.params.id)
    //           }
    //         }
    //       ]
    //     }
    //   ]
    }
  ]

  export default {
    router
  }
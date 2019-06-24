export default {
    plugins: [
      ['umi-plugin-react', {
        antd: true
      }],
    ],
    routes: [{
      path: '/',
      component: '../layout',
      routes: [
        {
          path: '/',
          component: 'Helloworld',
        },
        {
          path: '/helloworld',
          component: 'Helloworld'
        },
        {
          path: '/businesses',
          routes: [
            { path: '/businesses/analysis', component: 'Businesses/Analysis' },
            { path: '/businesses/management', component: 'Businesses/Management' },           
          ]
        },
        {
          path: '/customers',
          routes: [
            { path: '/customers/analysis', component: 'Customers/Analysis' },
            { path: '/customers/management', component: 'Customers/Management' },           
          ]
        },
        {
          path: '/orders',
          routes: [
            { path: '/orders/analysis', component: 'Orders/Analysis' },
            { path: '/orders/management', component: 'Orders/Management' },           
          ]
        },
        {
          path: '/categories',
          routes: [
            { path: '/categories/analysis', component: 'Categories/Analysis' },
            { path: '/categories/management', component: 'Categories/Management' },           
          ]
        },
        {
          path: '/admin',
          routes: [
            { path: '/admin/setting', component: 'Admin/Setting' },               
          ]
        },
        
      ]
    }],
  }

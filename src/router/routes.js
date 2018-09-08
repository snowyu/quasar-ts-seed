
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'h', component: () => import('components/Hello.vue') },
      { path: 'hd', component: () => import('components/HelloDecorator.vue') },
      { path: '', component: () => import('pages/Index.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes


const routes = [
  { path: '*', redirect: '/backlog' },
  { path: '/backlog', component: () => import('components/Backlog.vue') },
  { path: '/board', component: () => import('components/Board.vue') }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({ path: '*', component: () => import('pages/Error404.vue') })
}

export default routes

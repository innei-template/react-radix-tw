import { buildSidebarRoute } from '~//lib/route'

export const aboutRoute = buildSidebarRoute({
  path: '/about',
  component: () => null,
  title: 'About',
  group: 'Home',
})

import { buildSidebarRoute } from '~//lib/route'

const Home = () => {
  return <div className="text-crimsonA-12">Home</div>
}

export const indexRoute = buildSidebarRoute({
  path: '/',
  component: Home,
  title: 'Home',
  group: 'Home',
})

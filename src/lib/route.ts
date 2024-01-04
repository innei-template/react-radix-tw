import type { RouteComponent } from '@tanstack/react-router';
import { Route } from '@tanstack/react-router'

import { rootRoute } from '../router'

export const buildSidebarRoute = <TPath extends string>({
  path,
  title,
  group,
  component,
}: {
  path: TPath
  title: string
  group: string
  component: RouteComponent
}) =>
  new Route({
    getParentRoute: () => rootRoute,
    path,
    component,
    meta: {
      title,
      group,
    },
  })

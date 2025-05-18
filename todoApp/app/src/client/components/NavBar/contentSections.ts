import type { NavigationItem } from '../NavBar/NavBar';
import { routes } from 'wasp/client/router';

export const appNavigationItems: NavigationItem[] = [
  { name: 'Home', to: routes.LandingPageRoute.to },
  { name: 'AI Scheduler', to: routes.DemoAppRoute.to },
  { name: 'Pricing', to: routes.PricingPageRoute.to },
];

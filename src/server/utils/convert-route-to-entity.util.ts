const mapping: Record<string, string> = {
  bids: 'bid',
  products: 'product',
  startups: 'startup',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

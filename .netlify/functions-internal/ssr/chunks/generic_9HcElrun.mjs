export { renderers } from '../renderers.mjs';

const page = () => import('./pages/generic_V_u2550x.mjs').then(n => n.g);

export { page };

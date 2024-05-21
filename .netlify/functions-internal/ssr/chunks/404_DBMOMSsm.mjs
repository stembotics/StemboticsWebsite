export { renderers } from '../renderers.mjs';

const page = () => import('./pages/404_iGo1Emob.mjs').then(n => n._);

export { page };

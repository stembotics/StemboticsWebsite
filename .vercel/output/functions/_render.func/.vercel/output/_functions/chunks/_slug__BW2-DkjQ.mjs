export { renderers } from '../renderers.mjs';

const page = () => import('./pages/_slug__BWtoWams.mjs').then(n => n._);

export { page };

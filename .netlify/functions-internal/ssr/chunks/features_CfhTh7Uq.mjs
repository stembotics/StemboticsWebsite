export { renderers } from '../renderers.mjs';

const page = () => import('./pages/features_Bck16k6M.mjs').then(n => n.f);

export { page };

export { renderers } from '../renderers.mjs';

const page = () => import('./pages/features_VP7-elAO.mjs').then(n => n.f);

export { page };

import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CITAxjRD.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DRVU4hyS.mjs');
const _page1 = () => import('./chunks/404_DzSO_Iyw.mjs');
const _page2 = () => import('./chunks/about_BDpButAi.mjs');
const _page3 = () => import('./chunks/_slug__D_6iqRDH.mjs');
const _page4 = () => import('./chunks/_single__D3o1sAek.mjs');
const _page5 = () => import('./chunks/index_mOYLOYx-.mjs');
const _page6 = () => import('./chunks/_single__DokgfyxH.mjs');
const _page7 = () => import('./chunks/index_UifPcWHp.mjs');
const _page8 = () => import('./chunks/_category__DbIjV4BA.mjs');
const _page9 = () => import('./chunks/index_CUllzIGc.mjs');
const _page10 = () => import('./chunks/contact_BrytJ0Ba.mjs');
const _page11 = () => import('./chunks/features_CwgEosat.mjs');
const _page12 = () => import('./chunks/how-it-works_BobUHHxf.mjs');
const _page13 = () => import('./chunks/_single__B0aBJOd4.mjs');
const _page14 = () => import('./chunks/index_aQY-iX2X.mjs');
const _page15 = () => import('./chunks/portal_CH8tI01a.mjs');
const _page16 = () => import('./chunks/pricing_O5V-5Ghj.mjs');
const _page17 = () => import('./chunks/signin_ClL_bzJQ.mjs');
const _page18 = () => import('./chunks/signup_De2bzDma.mjs');
const _page19 = () => import('./chunks/_regular__D6yCCH19.mjs');
const _page20 = () => import('./chunks/index_Dm_oVCZ1.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/blog/page/[slug].astro", _page3],
    ["src/pages/blog/[single].astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/career/[single].astro", _page6],
    ["src/pages/career/index.astro", _page7],
    ["src/pages/categories/[category].astro", _page8],
    ["src/pages/categories/index.astro", _page9],
    ["src/pages/contact.astro", _page10],
    ["src/pages/features.astro", _page11],
    ["src/pages/how-it-works.astro", _page12],
    ["src/pages/integrations/[single].astro", _page13],
    ["src/pages/integrations/index.astro", _page14],
    ["src/pages/portal.astro", _page15],
    ["src/pages/pricing.astro", _page16],
    ["src/pages/signin.astro", _page17],
    ["src/pages/signup.astro", _page18],
    ["src/pages/[regular].astro", _page19],
    ["src/pages/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "b4e40d67-c128-4bac-98cd-ccd2edb8cf95"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

import { renderers } from './renderers.mjs';
import { manifest } from './manifest_eoeC-GTz.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_XwyojTQr.mjs');
const _page1 = () => import('./chunks/404_KY8mG_Kv.mjs');
const _page2 = () => import('./chunks/about_CU1Wq0fe.mjs');
const _page3 = () => import('./chunks/_slug__CLzN3hTl.mjs');
const _page4 = () => import('./chunks/_single__C_E_lynL.mjs');
const _page5 = () => import('./chunks/index_Bqh2VzmY.mjs');
const _page6 = () => import('./chunks/_single__Clb9k3A6.mjs');
const _page7 = () => import('./chunks/index_-qalOVwf.mjs');
const _page8 = () => import('./chunks/_category__CywVbhpx.mjs');
const _page9 = () => import('./chunks/index_XsuNOJti.mjs');
const _page10 = () => import('./chunks/contact_NpdqyhXw.mjs');
const _page11 = () => import('./chunks/features_mZMfrdQ3.mjs');
const _page12 = () => import('./chunks/how-it-works_CZARf74C.mjs');
const _page13 = () => import('./chunks/_single__OaTMSzIP.mjs');
const _page14 = () => import('./chunks/index_BHLEdzs_.mjs');
const _page15 = () => import('./chunks/portal_CkMYekQk.mjs');
const _page16 = () => import('./chunks/pricing_D7CK3YK-.mjs');
const _page17 = () => import('./chunks/signin_Bdr4iZZG.mjs');
const _page18 = () => import('./chunks/signup_BlZPj405.mjs');
const _page19 = () => import('./chunks/_regular__BnmZRI9q.mjs');
const _page20 = () => import('./chunks/index_C0r0ldbe.mjs');
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
    "middlewareSecret": "41227376-d819-49d2-8d43-4ea66f189195"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

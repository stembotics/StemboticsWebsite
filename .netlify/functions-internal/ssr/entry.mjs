import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BJa7yItE.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_B6W05cmT.mjs');
const _page1 = () => import('./chunks/404_DBMOMSsm.mjs');
const _page2 = () => import('./chunks/about_C38MimzF.mjs');
const _page3 = () => import('./chunks/_slug__D5oaUXWR.mjs');
const _page4 = () => import('./chunks/_single__CIqYLKMh.mjs');
const _page5 = () => import('./chunks/index_vlhrJiye.mjs');
const _page6 = () => import('./chunks/_single__C6BkbEyX.mjs');
const _page7 = () => import('./chunks/index_KTqjA_a8.mjs');
const _page8 = () => import('./chunks/_category__CJXhqBS0.mjs');
const _page9 = () => import('./chunks/index_CKwNNqhS.mjs');
const _page10 = () => import('./chunks/contact_Fp1AuRjz.mjs');
const _page11 = () => import('./chunks/features_BTEkim_r.mjs');
const _page12 = () => import('./chunks/how-it-works_R95v9llQ.mjs');
const _page13 = () => import('./chunks/_single__aXYtFo3y.mjs');
const _page14 = () => import('./chunks/index_C4fVJUiz.mjs');
const _page15 = () => import('./chunks/portal_a6DwzeFQ.mjs');
const _page16 = () => import('./chunks/pricing_CuDhit87.mjs');
const _page17 = () => import('./chunks/signin_DDUjKO1v.mjs');
const _page18 = () => import('./chunks/signup_BesIp06P.mjs');
const _page19 = () => import('./chunks/_regular__CQJZ3BAv.mjs');
const _page20 = () => import('./chunks/index_Btqt4UhX.mjs');
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
    "middlewareSecret": "03a29d28-fb75-44a8-9477-bf64a54e304a"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

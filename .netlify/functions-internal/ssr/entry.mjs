import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BqE6D0j8.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_zX-ByEGt.mjs');
const _page1 = () => import('./chunks/404_BA4o3Ao9.mjs');
const _page2 = () => import('./chunks/about_DxfLFbyH.mjs');
const _page3 = () => import('./chunks/admin_D-jj435g.mjs');
const _page4 = () => import('./chunks/_slug__-Nfkr8CB.mjs');
const _page5 = () => import('./chunks/_single__afa8gcmb.mjs');
const _page6 = () => import('./chunks/index_BnzOFp4H.mjs');
const _page7 = () => import('./chunks/_single__CeWdaSCS.mjs');
const _page8 = () => import('./chunks/index_BBvWCgz8.mjs');
const _page9 = () => import('./chunks/_category__BnU6UyHD.mjs');
const _page10 = () => import('./chunks/index_BPPVrz1s.mjs');
const _page11 = () => import('./chunks/contact_B2WllYWw.mjs');
const _page12 = () => import('./chunks/features_BVbj5bOX.mjs');
const _page13 = () => import('./chunks/how-it-works_BaqdnVK7.mjs');
const _page14 = () => import('./chunks/_single__DwHWdg46.mjs');
const _page15 = () => import('./chunks/index_qxGI04sM.mjs');
const _page16 = () => import('./chunks/portal_CgHlzfuv.mjs');
const _page17 = () => import('./chunks/pricing_D27RNIDG.mjs');
const _page18 = () => import('./chunks/signin_BGFqn2dP.mjs');
const _page19 = () => import('./chunks/signup_Dzj4rjPo.mjs');
const _page20 = () => import('./chunks/volunteer_BuEv4eMq.mjs');
const _page21 = () => import('./chunks/_regular__D1_jwu8O.mjs');
const _page22 = () => import('./chunks/index_v3Ee31ef.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/admin.astro", _page3],
    ["src/pages/blog/page/[slug].astro", _page4],
    ["src/pages/blog/[single].astro", _page5],
    ["src/pages/blog/index.astro", _page6],
    ["src/pages/career/[single].astro", _page7],
    ["src/pages/career/index.astro", _page8],
    ["src/pages/categories/[category].astro", _page9],
    ["src/pages/categories/index.astro", _page10],
    ["src/pages/contact.astro", _page11],
    ["src/pages/features.astro", _page12],
    ["src/pages/how-it-works.astro", _page13],
    ["src/pages/integrations/[single].astro", _page14],
    ["src/pages/integrations/index.astro", _page15],
    ["src/pages/portal.astro", _page16],
    ["src/pages/pricing.astro", _page17],
    ["src/pages/signin.astro", _page18],
    ["src/pages/signup.astro", _page19],
    ["src/pages/volunteer.astro", _page20],
    ["src/pages/[regular].astro", _page21],
    ["src/pages/index.astro", _page22]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "59bd6390-6735-4a10-8ba3-57fa1bf8e4cc"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

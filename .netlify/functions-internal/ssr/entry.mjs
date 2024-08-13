import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Bu0vtszP.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_qHLctx_I.mjs');
const _page1 = () => import('./chunks/404_DoAh_oud.mjs');
const _page2 = () => import('./chunks/about_DfsJuTyE.mjs');
const _page3 = () => import('./chunks/admin_CHoGfcGB.mjs');
const _page4 = () => import('./chunks/_slug__BDSEflW2.mjs');
const _page5 = () => import('./chunks/_single__BWv_G3W1.mjs');
const _page6 = () => import('./chunks/index_CM0Z9yHe.mjs');
const _page7 = () => import('./chunks/_single__DSjXwZZP.mjs');
const _page8 = () => import('./chunks/index_C1oc2DVj.mjs');
const _page9 = () => import('./chunks/_category__Dj45Cydi.mjs');
const _page10 = () => import('./chunks/index_CDXrlOSY.mjs');
const _page11 = () => import('./chunks/contact_CkA7OozW.mjs');
const _page12 = () => import('./chunks/features_BznE8K_x.mjs');
const _page13 = () => import('./chunks/_single__BcA_rNnY.mjs');
const _page14 = () => import('./chunks/index__Tk3dI6_.mjs');
const _page15 = () => import('./chunks/portal_C8ejiqqT.mjs');
const _page16 = () => import('./chunks/pricing_DuBgxLtJ.mjs');
const _page17 = () => import('./chunks/red-watch_hmS3cnkZ.mjs');
const _page18 = () => import('./chunks/signin_cugPhqYK.mjs');
const _page19 = () => import('./chunks/signup_DF0cpmDl.mjs');
const _page20 = () => import('./chunks/volunteer_3orm2H2i.mjs');
const _page21 = () => import('./chunks/_regular__CLpZSKOG.mjs');
const _page22 = () => import('./chunks/index_DWQP4MH2.mjs');
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
    ["src/pages/integrations/[single].astro", _page13],
    ["src/pages/integrations/index.astro", _page14],
    ["src/pages/portal.astro", _page15],
    ["src/pages/pricing.astro", _page16],
    ["src/pages/red-watch.astro", _page17],
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
    "middlewareSecret": "52cbfee6-a06e-45be-a2a9-5d66badae41c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

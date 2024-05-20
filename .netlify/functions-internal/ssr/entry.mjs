import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BVnsMM_1.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BeCBN9dA.mjs');
const _page1 = () => import('./chunks/404_Da6yfmmd.mjs');
const _page2 = () => import('./chunks/about_CywylZWZ.mjs');
const _page3 = () => import('./chunks/_slug__DrxnvPll.mjs');
const _page4 = () => import('./chunks/_single__ZqbqqGqR.mjs');
const _page5 = () => import('./chunks/index_Deo6LhhH.mjs');
const _page6 = () => import('./chunks/_single__DHa_tB8A.mjs');
const _page7 = () => import('./chunks/index_DvgGg2JT.mjs');
const _page8 = () => import('./chunks/_category__B2Nx2XeF.mjs');
const _page9 = () => import('./chunks/index_l6tbYFqx.mjs');
const _page10 = () => import('./chunks/contact_C_waHXBA.mjs');
const _page11 = () => import('./chunks/features_CucnSVRv.mjs');
const _page12 = () => import('./chunks/how-it-works_DoRUcUvP.mjs');
const _page13 = () => import('./chunks/_single__D_tL4O7W.mjs');
const _page14 = () => import('./chunks/index_C-h3mDwD.mjs');
const _page15 = () => import('./chunks/portal_CummIkUe.mjs');
const _page16 = () => import('./chunks/pricing__Lxesh4d.mjs');
const _page17 = () => import('./chunks/signin_BuQI-EMl.mjs');
const _page18 = () => import('./chunks/signup_DrivuaJQ.mjs');
const _page19 = () => import('./chunks/_regular__f_4UsFYy.mjs');
const _page20 = () => import('./chunks/index_Dr19dgwu.mjs');
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
    "middlewareSecret": "d7f79755-2781-428f-b378-bfddffffefd2"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

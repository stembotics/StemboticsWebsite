import { renderers } from './renderers.mjs';
import { manifest } from './manifest_MuDDirdR.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_D4xEMOkN.mjs');
const _page1 = () => import('./chunks/404_D9svy_x_.mjs');
const _page2 = () => import('./chunks/about_CX99ae0h.mjs');
const _page3 = () => import('./chunks/admin_DqFr5fOT.mjs');
const _page4 = () => import('./chunks/_slug__Dv4lI2xW.mjs');
const _page5 = () => import('./chunks/_single__ucPmpPul.mjs');
const _page6 = () => import('./chunks/index_DEVk3QIB.mjs');
const _page7 = () => import('./chunks/_single__B5pg7ise.mjs');
const _page8 = () => import('./chunks/index_Db4cDhWh.mjs');
const _page9 = () => import('./chunks/_category__M4BDXvCN.mjs');
const _page10 = () => import('./chunks/index_Bqj0V6yU.mjs');
const _page11 = () => import('./chunks/contact_Dgu3NyPH.mjs');
const _page12 = () => import('./chunks/features_kQuqrrwd.mjs');
const _page13 = () => import('./chunks/_single__CnYXxx1b.mjs');
const _page14 = () => import('./chunks/index_BxnRCMHm.mjs');
const _page15 = () => import('./chunks/portal_C91IT5SN.mjs');
const _page16 = () => import('./chunks/pricing_BSzPYnPk.mjs');
const _page17 = () => import('./chunks/red-watch_UEaSE3RV.mjs');
const _page18 = () => import('./chunks/signin_CbmOyhBg.mjs');
const _page19 = () => import('./chunks/signup_BTrUy_4m.mjs');
const _page20 = () => import('./chunks/volunteer_DtOtngrX.mjs');
const _page21 = () => import('./chunks/_regular__C27LG3GG.mjs');
const _page22 = () => import('./chunks/index_ClibgYbP.mjs');
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
    "middlewareSecret": "65cbc341-fa0f-492e-b7fe-a4412464a3a4"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

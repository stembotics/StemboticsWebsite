import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CRmgWkvA.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BeJxjYZG.mjs');
const _page1 = () => import('./chunks/404_DFOw3ZWn.mjs');
const _page2 = () => import('./chunks/about_CtQjTgto.mjs');
const _page3 = () => import('./chunks/admin_j-hsqiPo.mjs');
const _page4 = () => import('./chunks/_slug__D9LVEcLw.mjs');
const _page5 = () => import('./chunks/_single__I2a3Z3UX.mjs');
const _page6 = () => import('./chunks/index_DMwz6ZdL.mjs');
const _page7 = () => import('./chunks/_single__D2UqBEgi.mjs');
const _page8 = () => import('./chunks/index_BVILw6c_.mjs');
const _page9 = () => import('./chunks/_category__Cqj4MHnX.mjs');
const _page10 = () => import('./chunks/index_DhF7OA2B.mjs');
const _page11 = () => import('./chunks/contact_RLqZ-YfJ.mjs');
const _page12 = () => import('./chunks/features_1G32cxHZ.mjs');
const _page13 = () => import('./chunks/how-it-works_Bn76GnQu.mjs');
const _page14 = () => import('./chunks/_single__CYoPNBq7.mjs');
const _page15 = () => import('./chunks/index_BwHfBWvj.mjs');
const _page16 = () => import('./chunks/portal_Dbntt2db.mjs');
const _page17 = () => import('./chunks/pricing_BxiV8GZ-.mjs');
const _page18 = () => import('./chunks/signin_Bep6-Jfq.mjs');
const _page19 = () => import('./chunks/signup_wQx-ZvSF.mjs');
const _page20 = () => import('./chunks/volunteer_CrENpYta.mjs');
const _page21 = () => import('./chunks/_regular__C2K9PRuN.mjs');
const _page22 = () => import('./chunks/index_UN0genBi.mjs');
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
    "middlewareSecret": "e837a4c8-56cd-4f4a-b292-5150964bf820"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

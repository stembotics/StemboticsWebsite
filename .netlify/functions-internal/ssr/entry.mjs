import { renderers } from './renderers.mjs';
import { manifest } from './manifest_v--xinSe.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BH3BIGGC.mjs');
const _page1 = () => import('./chunks/404_BSb3ke0F.mjs');
const _page2 = () => import('./chunks/about_DKTUplag.mjs');
const _page3 = () => import('./chunks/admin_BqZNQG-l.mjs');
const _page4 = () => import('./chunks/_slug__BipGLiuR.mjs');
const _page5 = () => import('./chunks/_single__Dy4m3dnc.mjs');
const _page6 = () => import('./chunks/index_Id2Ew2OC.mjs');
const _page7 = () => import('./chunks/_single__Dpl5IBF7.mjs');
const _page8 = () => import('./chunks/index_Bn4SgFUX.mjs');
const _page9 = () => import('./chunks/_category__BHvzzsVN.mjs');
const _page10 = () => import('./chunks/index_Kb77etqd.mjs');
const _page11 = () => import('./chunks/contact_CQTQRavE.mjs');
const _page12 = () => import('./chunks/features_0iihYLz-.mjs');
const _page13 = () => import('./chunks/_single__q_t3og1Z.mjs');
const _page14 = () => import('./chunks/index_xKPYbAT_.mjs');
const _page15 = () => import('./chunks/portal_Bigb6dKx.mjs');
const _page16 = () => import('./chunks/pricing_BnwfJoJV.mjs');
const _page17 = () => import('./chunks/red-watch_DcowWHAO.mjs');
const _page18 = () => import('./chunks/signin_BGyvS7fO.mjs');
const _page19 = () => import('./chunks/signup_Dq0KDr4d.mjs');
const _page20 = () => import('./chunks/volunteer_CPDBMvCH.mjs');
const _page21 = () => import('./chunks/_regular__DulwMYar.mjs');
const _page22 = () => import('./chunks/index_CoNEdGMA.mjs');
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
    "middlewareSecret": "73033452-dc5d-44ae-bd20-46335b766e33"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

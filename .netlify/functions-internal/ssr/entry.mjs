import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BrbmoiZA.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_D83Ua2R9.mjs');
const _page1 = () => import('./chunks/404_CiwL6u3j.mjs');
const _page2 = () => import('./chunks/about_xN3bm0Br.mjs');
const _page3 = () => import('./chunks/admin_Deia-dl_.mjs');
const _page4 = () => import('./chunks/_slug__8bm9sWdx.mjs');
const _page5 = () => import('./chunks/_single__BUHqty-d.mjs');
const _page6 = () => import('./chunks/index_1LjUeHVU.mjs');
const _page7 = () => import('./chunks/_single__Dnpt8Iuc.mjs');
const _page8 = () => import('./chunks/index_Dfu7cyi7.mjs');
const _page9 = () => import('./chunks/_category__BxoOpyvL.mjs');
const _page10 = () => import('./chunks/index_CMXLAlev.mjs');
const _page11 = () => import('./chunks/contact_DFee-HMR.mjs');
const _page12 = () => import('./chunks/features_BmAUTLKL.mjs');
const _page13 = () => import('./chunks/how-it-works_I5uoNPcN.mjs');
const _page14 = () => import('./chunks/_single__DTsbm2X3.mjs');
const _page15 = () => import('./chunks/index_BPo02Nf-.mjs');
const _page16 = () => import('./chunks/portal_DN1p5xzC.mjs');
const _page17 = () => import('./chunks/pricing_DSHajxqw.mjs');
const _page18 = () => import('./chunks/signin_CNL6mlSX.mjs');
const _page19 = () => import('./chunks/signup_BJQhehIn.mjs');
const _page20 = () => import('./chunks/volunteer_DBHLo8ZD.mjs');
const _page21 = () => import('./chunks/_regular__DIhnDovG.mjs');
const _page22 = () => import('./chunks/index_DyPlzcyl.mjs');
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
    "middlewareSecret": "c9043322-7919-4eff-bd16-52b52b845d81"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

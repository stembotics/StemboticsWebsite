import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Btke33Iu.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_NLa1O9_f.mjs');
const _page1 = () => import('./chunks/404_CKCkewFI.mjs');
const _page2 = () => import('./chunks/about_zTk-cZVb.mjs');
const _page3 = () => import('./chunks/_slug__DDBOtt_3.mjs');
const _page4 = () => import('./chunks/_single__BV7n8K8M.mjs');
const _page5 = () => import('./chunks/index_C9yHXknx.mjs');
const _page6 = () => import('./chunks/_single__D2Nw9Jw4.mjs');
const _page7 = () => import('./chunks/index_DRvPT1Ht.mjs');
const _page8 = () => import('./chunks/_category___dT2cTW1.mjs');
const _page9 = () => import('./chunks/index_Cc8lgTb_.mjs');
const _page10 = () => import('./chunks/contact_BhhbIF8z.mjs');
const _page11 = () => import('./chunks/features_nT1LzSe5.mjs');
const _page12 = () => import('./chunks/how-it-works_CAycCpeR.mjs');
const _page13 = () => import('./chunks/_single__BkU6euYr.mjs');
const _page14 = () => import('./chunks/index_D3lqwHKW.mjs');
const _page15 = () => import('./chunks/portal_BMoO6WII.mjs');
const _page16 = () => import('./chunks/pricing_DgXInfh_.mjs');
const _page17 = () => import('./chunks/signin_Bk4pJxxM.mjs');
const _page18 = () => import('./chunks/signup_bnpQSe_I.mjs');
const _page19 = () => import('./chunks/_regular__Bww1112Z.mjs');
const _page20 = () => import('./chunks/index_CTAjAz_V.mjs');
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
    "middlewareSecret": "5c50842a-07af-4846-9838-dcfb792701df"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

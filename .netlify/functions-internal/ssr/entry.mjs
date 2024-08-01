import { renderers } from './renderers.mjs';
import { manifest } from './manifest_0a7TBNhg.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_M1zfxo0H.mjs');
const _page1 = () => import('./chunks/404_DgCy5RZu.mjs');
const _page2 = () => import('./chunks/about_BgKiU7b4.mjs');
const _page3 = () => import('./chunks/admin_CUWUR54G.mjs');
const _page4 = () => import('./chunks/_slug__Db5FXJFM.mjs');
const _page5 = () => import('./chunks/_single__CersyBNy.mjs');
const _page6 = () => import('./chunks/index_CGefEY8A.mjs');
const _page7 = () => import('./chunks/_single__DpUp_RWf.mjs');
const _page8 = () => import('./chunks/index_BIpFDik4.mjs');
const _page9 = () => import('./chunks/_category__C4dCfEPQ.mjs');
const _page10 = () => import('./chunks/index_CBP-JIfU.mjs');
const _page11 = () => import('./chunks/contact_sOjJsGdu.mjs');
const _page12 = () => import('./chunks/features_CfhTh7Uq.mjs');
const _page13 = () => import('./chunks/_single__nwpgcGnX.mjs');
const _page14 = () => import('./chunks/index_Br8ttQV3.mjs');
const _page15 = () => import('./chunks/portal_CbQqNlzQ.mjs');
const _page16 = () => import('./chunks/pricing_Th4FakfT.mjs');
const _page17 = () => import('./chunks/red-watch_qyKl9lXz.mjs');
const _page18 = () => import('./chunks/signin_c_HLF6H9.mjs');
const _page19 = () => import('./chunks/signup_CtPW7EO_.mjs');
const _page20 = () => import('./chunks/volunteer_BzjOskVj.mjs');
const _page21 = () => import('./chunks/_regular__DXMowwRx.mjs');
const _page22 = () => import('./chunks/index_BQTMo_Fx.mjs');
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
    "middlewareSecret": "4acef0a3-70de-4e03-b359-a227baea7b7a"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

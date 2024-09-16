import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DA3vGju7.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_fpEA6ekR.mjs');
const _page1 = () => import('./chunks/404_Ba_lcMie.mjs');
const _page2 = () => import('./chunks/about_B5zVO5ow.mjs');
const _page3 = () => import('./chunks/admin_DwCv2m4D.mjs');
const _page4 = () => import('./chunks/_slug__BtRNa4zf.mjs');
const _page5 = () => import('./chunks/_single__Bi2NdAwI.mjs');
const _page6 = () => import('./chunks/index_D2JnHpb-.mjs');
const _page7 = () => import('./chunks/_single__CJFjIG2c.mjs');
const _page8 = () => import('./chunks/index_D56AzcWi.mjs');
const _page9 = () => import('./chunks/_category__CU9N6BQX.mjs');
const _page10 = () => import('./chunks/index_BR4zmVBs.mjs');
const _page11 = () => import('./chunks/contact_rS7B268d.mjs');
const _page12 = () => import('./chunks/features_B32RSPYd.mjs');
const _page13 = () => import('./chunks/_single__FUvyyrtw.mjs');
const _page14 = () => import('./chunks/index_BWsU8-gn.mjs');
const _page15 = () => import('./chunks/portal_JFim1wqA.mjs');
const _page16 = () => import('./chunks/pricing_Bt2abN7K.mjs');
const _page17 = () => import('./chunks/red-watch_DvH5IYaN.mjs');
const _page18 = () => import('./chunks/signin_NoVzNRIW.mjs');
const _page19 = () => import('./chunks/signup_BVlaQKBC.mjs');
const _page20 = () => import('./chunks/volunteer_sS6lJn2A.mjs');
const _page21 = () => import('./chunks/_regular__CH7xybds.mjs');
const _page22 = () => import('./chunks/index_zUw0hsIW.mjs');
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
    "middlewareSecret": "672287ce-26db-4b4b-bfb4-73e925ee55de"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

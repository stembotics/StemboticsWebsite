import { renderers } from './renderers.mjs';
import { manifest } from './manifest_cklIDCIo.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_9C_PrV2-.mjs');
const _page1 = () => import('./chunks/404_DDej2avs.mjs');
const _page2 = () => import('./chunks/about_N6dxw_Lo.mjs');
const _page3 = () => import('./chunks/admin_CYs8jhoj.mjs');
const _page4 = () => import('./chunks/_slug__Beo7L3I6.mjs');
const _page5 = () => import('./chunks/_single__C8yQJ-v7.mjs');
const _page6 = () => import('./chunks/index_ROxidzqR.mjs');
const _page7 = () => import('./chunks/_single__C9CzlbZQ.mjs');
const _page8 = () => import('./chunks/index_Ba3-qRdC.mjs');
const _page9 = () => import('./chunks/_category__D4VxjVoL.mjs');
const _page10 = () => import('./chunks/index_BMSpQHx5.mjs');
const _page11 = () => import('./chunks/contact_D7kHTo9a.mjs');
const _page12 = () => import('./chunks/features_U5q0JiEY.mjs');
const _page13 = () => import('./chunks/how-it-works_1wLmRgZm.mjs');
const _page14 = () => import('./chunks/_single__PTJo3c5T.mjs');
const _page15 = () => import('./chunks/index_B_BQ0m1P.mjs');
const _page16 = () => import('./chunks/portal_xLBW9vfn.mjs');
const _page17 = () => import('./chunks/pricing_CAukWAn4.mjs');
const _page18 = () => import('./chunks/signin_DcXT7ime.mjs');
const _page19 = () => import('./chunks/signup_C4QULe7i.mjs');
const _page20 = () => import('./chunks/volunteer_CO5JQ5_Q.mjs');
const _page21 = () => import('./chunks/_regular__vjNyHwOI.mjs');
const _page22 = () => import('./chunks/index_DzfnxBme.mjs');
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
    "middlewareSecret": "1c3620c7-9ac5-4611-8563-7ec4defe0367"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

import { renderers } from './renderers.mjs';
import { manifest } from './manifest_C_RF_ePA.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DML0QAqF.mjs');
const _page1 = () => import('./chunks/404_Clngppvj.mjs');
const _page2 = () => import('./chunks/about_QYviJpaS.mjs');
const _page3 = () => import('./chunks/_slug__lKEsugp0.mjs');
const _page4 = () => import('./chunks/_single__BC2YA1uJ.mjs');
const _page5 = () => import('./chunks/index_mh97iN-u.mjs');
const _page6 = () => import('./chunks/_single__DqrHE2ST.mjs');
const _page7 = () => import('./chunks/index_C8FrsADH.mjs');
const _page8 = () => import('./chunks/_category__Db8Mbe_U.mjs');
const _page9 = () => import('./chunks/index_CHUrA2mz.mjs');
const _page10 = () => import('./chunks/contact_CFOY3jCq.mjs');
const _page11 = () => import('./chunks/features_P8POoqXg.mjs');
const _page12 = () => import('./chunks/how-it-works_DNI4rZi2.mjs');
const _page13 = () => import('./chunks/_single__tTRnua7f.mjs');
const _page14 = () => import('./chunks/index_q8e4axBc.mjs');
const _page15 = () => import('./chunks/portal_fJndkjd9.mjs');
const _page16 = () => import('./chunks/pricing_BBR803uM.mjs');
const _page17 = () => import('./chunks/signin_e6NTp99s.mjs');
const _page18 = () => import('./chunks/signup_Dcy4VR23.mjs');
const _page19 = () => import('./chunks/_regular__DlNi1uOo.mjs');
const _page20 = () => import('./chunks/index_Dg__26f2.mjs');
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
    "middlewareSecret": "096a2f22-fc79-464d-a516-35248878abd2"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

import { r as renderers } from './chunks/internal_BsTt5pTQ.mjs';
import { c as createExports } from './chunks/entrypoint_BYibh-oc.mjs';
import { manifest } from './manifest_OlgEID3O.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/admin/attendance.astro.mjs');
const _page4 = () => import('./pages/admin/products.astro.mjs');
const _page5 = () => import('./pages/admin/reports.astro.mjs');
const _page6 = () => import('./pages/admin.astro.mjs');
const _page7 = () => import('./pages/api/auth/login.astro.mjs');
const _page8 = () => import('./pages/api/auth/set-cookie.astro.mjs');
const _page9 = () => import('./pages/api/auth/signout.astro.mjs');
const _page10 = () => import('./pages/api/auth/signup.astro.mjs');
const _page11 = () => import('./pages/api/auth/teacher-signup.astro.mjs');
const _page12 = () => import('./pages/api/cart.astro.mjs');
const _page13 = () => import('./pages/api/checkout.astro.mjs');
const _page14 = () => import('./pages/api/contact.astro.mjs');
const _page15 = () => import('./pages/api/courses/analytics.astro.mjs');
const _page16 = () => import('./pages/api/courses/content/create.astro.mjs');
const _page17 = () => import('./pages/api/courses/create.astro.mjs');
const _page18 = () => import('./pages/api/courses/enroll.astro.mjs');
const _page19 = () => import('./pages/api/courses/like.astro.mjs');
const _page20 = () => import('./pages/api/courses/list.astro.mjs');
const _page21 = () => import('./pages/api/courses/progress/update.astro.mjs');
const _page22 = () => import('./pages/api/courses/_id_/sessions.astro.mjs');
const _page23 = () => import('./pages/api/mailservice.astro.mjs');
const _page24 = () => import('./pages/api/products/_id_.astro.mjs');
const _page25 = () => import('./pages/api/products.astro.mjs');
const _page26 = () => import('./pages/api/sessions/_sessionid_/attendance.astro.mjs');
const _page27 = () => import('./pages/api/sessions/_sessionid_/notes.astro.mjs');
const _page28 = () => import('./pages/api/teachers/add-achievement.astro.mjs');
const _page29 = () => import('./pages/api/teachers/add-note.astro.mjs');
const _page30 = () => import('./pages/api/teachers/delete-achievement/_id_.astro.mjs');
const _page31 = () => import('./pages/api/teachers/update-attendance.astro.mjs');
const _page32 = () => import('./pages/api/teachers/update-bio.astro.mjs');
const _page33 = () => import('./pages/api/teachers/update-profile.astro.mjs');
const _page34 = () => import('./pages/api/teachers/upload-image.astro.mjs');
const _page35 = () => import('./pages/cart.astro.mjs');
const _page36 = () => import('./pages/checkout/cancel.astro.mjs');
const _page37 = () => import('./pages/checkout/success.astro.mjs');
const _page38 = () => import('./pages/contact.astro.mjs');
const _page39 = () => import('./pages/courses/_id_/content/_contentid_.astro.mjs');
const _page40 = () => import('./pages/courses/_id_/manage.astro.mjs');
const _page41 = () => import('./pages/courses/_id_.astro.mjs');
const _page42 = () => import('./pages/courses.astro.mjs');
const _page43 = () => import('./pages/dashboard.astro.mjs');
const _page44 = () => import('./pages/faq.astro.mjs');
const _page45 = () => import('./pages/login.astro.mjs');
const _page46 = () => import('./pages/privacy.astro.mjs');
const _page47 = () => import('./pages/products/_id_.astro.mjs');
const _page48 = () => import('./pages/products.astro.mjs');
const _page49 = () => import('./pages/resources.astro.mjs');
const _page50 = () => import('./pages/signup.astro.mjs');
const _page51 = () => import('./pages/sitemap.xml.astro.mjs');
const _page52 = () => import('./pages/teachers/signup.astro.mjs');
const _page53 = () => import('./pages/teachers/_id_.astro.mjs');
const _page54 = () => import('./pages/teachers.astro.mjs');
const _page55 = () => import('./pages/terms.astro.mjs');
const _page56 = () => import('./pages/why-us.astro.mjs');
const _page57 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/admin/attendance.astro", _page3],
    ["src/pages/admin/products.astro", _page4],
    ["src/pages/admin/reports.astro", _page5],
    ["src/pages/admin/index.astro", _page6],
    ["src/pages/api/auth/login.ts", _page7],
    ["src/pages/api/auth/set-cookie.ts", _page8],
    ["src/pages/api/auth/signout.ts", _page9],
    ["src/pages/api/auth/signup.ts", _page10],
    ["src/pages/api/auth/teacher-signup.ts", _page11],
    ["src/pages/api/cart/index.ts", _page12],
    ["src/pages/api/checkout/index.ts", _page13],
    ["src/pages/api/contact.ts", _page14],
    ["src/pages/api/courses/analytics/index.ts", _page15],
    ["src/pages/api/courses/content/create.ts", _page16],
    ["src/pages/api/courses/create.ts", _page17],
    ["src/pages/api/courses/enroll.ts", _page18],
    ["src/pages/api/courses/like.ts", _page19],
    ["src/pages/api/courses/list.ts", _page20],
    ["src/pages/api/courses/progress/update.ts", _page21],
    ["src/pages/api/courses/[id]/sessions.ts", _page22],
    ["src/pages/api/mailService.ts", _page23],
    ["src/pages/api/products/[id].ts", _page24],
    ["src/pages/api/products/index.ts", _page25],
    ["src/pages/api/sessions/[sessionId]/attendance.ts", _page26],
    ["src/pages/api/sessions/[sessionId]/notes.ts", _page27],
    ["src/pages/api/teachers/add-achievement.ts", _page28],
    ["src/pages/api/teachers/add-note.ts", _page29],
    ["src/pages/api/teachers/delete-achievement/[id].ts", _page30],
    ["src/pages/api/teachers/update-attendance.ts", _page31],
    ["src/pages/api/teachers/update-bio.ts", _page32],
    ["src/pages/api/teachers/update-profile.ts", _page33],
    ["src/pages/api/teachers/upload-image.ts", _page34],
    ["src/pages/cart.astro", _page35],
    ["src/pages/checkout/cancel.astro", _page36],
    ["src/pages/checkout/success.astro", _page37],
    ["src/pages/contact.astro", _page38],
    ["src/pages/courses/[id]/content/[contentId].astro", _page39],
    ["src/pages/courses/[id]/manage.astro", _page40],
    ["src/pages/courses/[id].astro", _page41],
    ["src/pages/courses/index.astro", _page42],
    ["src/pages/dashboard/index.astro", _page43],
    ["src/pages/faq.astro", _page44],
    ["src/pages/login.astro", _page45],
    ["src/pages/privacy.astro", _page46],
    ["src/pages/products/[id].astro", _page47],
    ["src/pages/products/index.astro", _page48],
    ["src/pages/resources.astro", _page49],
    ["src/pages/signup.astro", _page50],
    ["src/pages/sitemap.xml.ts", _page51],
    ["src/pages/teachers/signup.astro", _page52],
    ["src/pages/teachers/[id].astro", _page53],
    ["src/pages/teachers/index.astro", _page54],
    ["src/pages/terms.astro", _page55],
    ["src/pages/why-us.astro", _page56],
    ["src/pages/index.astro", _page57]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f3cf014d-3430-4a16-ae30-540dc79bf0c8",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

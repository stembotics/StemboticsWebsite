import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';

const Badge = ({ type, children }) => {
  return /* @__PURE__ */ jsx("span", { className: `badge ${type}`, children });
};

const Changelog = ({ children, date }) => {
  return /* @__PURE__ */ jsx("section", { className: "section changelogs pt-0", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "row justify-center", children: /* @__PURE__ */ jsx("div", { className: "lg:col-18", children: /* @__PURE__ */ jsxs("div", { className: "row mb-2 lg:mt-0", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:col-3", children: /* @__PURE__ */ jsx("h6", { className: "mb-4 pl-7 text-lg lg:mt-0 lg:pl-0", children: date }) }),
    /* @__PURE__ */ jsx("div", { className: "border-border lg:col-9 lg:border-l lg:pb-10 lg:pl-10", children: /* @__PURE__ */ jsx("div", { className: "changelogs-content rounded-xl bg-white p-6 shadow-lg lg:p-10", children }) })
  ] }) }) }) }) });
};

export { Badge as B, Changelog as C };

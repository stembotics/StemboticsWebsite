import { jsxs, jsx } from 'react/jsx-runtime';

const Blockquote = ({ name, children }) => {
  return /* @__PURE__ */ jsxs("div", { className: "blockquote my-10 rounded-xl bg-white px-16 py-8 lg:px-20", children: [
    /* @__PURE__ */ jsx("blockquote", { className: "text-2xl text-dark", children }),
    /* @__PURE__ */ jsx("p", { className: "mb-0 mt-4", children: name })
  ] });
};

export { Blockquote as B };

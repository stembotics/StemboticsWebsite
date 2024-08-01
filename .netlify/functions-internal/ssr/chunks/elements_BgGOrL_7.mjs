import { _ as __astro_tag_component__, i as Fragment, v as createVNode } from './astro_CTCjbM0q.mjs';
import './astro/assets-service_BtMcE9EN.mjs';
import { $ as $$Image } from './pages/404_64xs1Xd1.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { N as Notice } from './pages/index_DLv6xvnl.mjs';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
/* empty css                                    */
import 'github-slugger';
import 'marked';
import { T as Tabs } from './Tabs_DkanSRUO.mjs';
import 'clsx';

const Button = ({ href, style, rel, children }) => {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      target: "_blank",
      rel: `noopener noreferrer ${rel ? rel === "follow" ? "" : rel : "nofollow"}`,
      className: `btn me-4 mb-4 ${style === "outline" ? "btn-outline-primary" : "btn-primary"} border-primary hover:text-white hover:no-underline`,
      children
    }
  );
};

const Accordion = ({ title, children, className }) => {
  const [show, setShow] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: `rounded border border-border ${className}`, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "relative block w-full  bg-theme-light px-4 py-3 text-left text-dark",
        onClick: () => setShow(!show),
        children: [
          title,
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: `absolute right-4 top-1/2 m-0 h-4 w-4 -translate-y-1/2 ${show && "rotate-180"}`,
              x: "0px",
              y: "0px",
              viewBox: "0 0 512.011 512.011",
              xmlSpace: "preserve",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fill: "currentColor",
                  d: "M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: `px-4 py-3 ${!show && "hidden"}`, children })
  ] });
};

const Video = ({ title, width = 500, height = "auto", src, ...rest }) => {
  return /* @__PURE__ */ jsxs(
    "video",
    {
      className: "overflow-hidden rounded-md",
      width,
      height,
      controls: true,
      ...rest,
      children: [
        /* @__PURE__ */ jsx(
          "source",
          {
            src: src.match(/^http/) ? src : `/videos/${src}`,
            type: "video/mp4"
          }
        ),
        title
      ]
    }
  );
};

const Youtube = ({ id, title, ...rest }) => {
  return /* @__PURE__ */ jsx(
    LiteYouTubeEmbed,
    {
      id,
      title,
      ...rest,
      wrapperClass: "yt-lite rounded-md"
    }
  );
};

function Tab({ name, children }) {
  return /* @__PURE__ */ jsx("div", { "data-name": name, children });
}

const frontmatter = {
  "title": "Elements",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "heading-1",
    "text": "Heading 1"
  }, {
    "depth": 2,
    "slug": "heading-2",
    "text": "Heading 2"
  }, {
    "depth": 3,
    "slug": "heading-3",
    "text": "Heading 3"
  }, {
    "depth": 4,
    "slug": "heading-4",
    "text": "Heading 4"
  }, {
    "depth": 5,
    "slug": "heading-5",
    "text": "Heading 5"
  }, {
    "depth": 6,
    "slug": "heading-6",
    "text": "Heading 6"
  }, {
    "depth": 3,
    "slug": "paragraph",
    "text": "Paragraph"
  }, {
    "depth": 3,
    "slug": "emphasis",
    "text": "Emphasis"
  }, {
    "depth": 3,
    "slug": "link",
    "text": "Link"
  }, {
    "depth": 3,
    "slug": "ordered-list",
    "text": "Ordered List"
  }, {
    "depth": 3,
    "slug": "unordered-list",
    "text": "Unordered List"
  }, {
    "depth": 3,
    "slug": "code-and-syntax-highlighting",
    "text": "Code and Syntax Highlighting"
  }, {
    "depth": 4,
    "slug": "html",
    "text": "HTML"
  }, {
    "depth": 4,
    "slug": "css",
    "text": "CSS"
  }, {
    "depth": 4,
    "slug": "javascript",
    "text": "JavaScript"
  }, {
    "depth": 3,
    "slug": "button",
    "text": "Button"
  }, {
    "depth": 3,
    "slug": "quote",
    "text": "Quote"
  }, {
    "depth": 3,
    "slug": "notice",
    "text": "Notice"
  }, {
    "depth": 3,
    "slug": "tab",
    "text": "Tab"
  }, {
    "depth": 4,
    "slug": "did-you-come-here-for-something-in-particular",
    "text": "Did you come here for something in particular?"
  }, {
    "depth": 4,
    "slug": "i-wanna-talk-about-the-assassination-attempt",
    "text": "I wanna talk about the assassination attempt"
  }, {
    "depth": 4,
    "slug": "we-know-youre-dealing-in-stolen-ore",
    "text": "We know you\u2019re dealing in stolen ore"
  }, {
    "depth": 3,
    "slug": "table",
    "text": "Table"
  }, {
    "depth": 3,
    "slug": "collapse",
    "text": "Collapse"
  }, {
    "depth": 3,
    "slug": "image",
    "text": "Image"
  }, {
    "depth": 3,
    "slug": "youtube-video",
    "text": "Youtube video"
  }, {
    "depth": 3,
    "slug": "custom-video",
    "text": "Custom video"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "heading-1",
      children: "Heading 1"
    }), "\n", createVNode(_components.h2, {
      id: "heading-2",
      children: "Heading 2"
    }), "\n", createVNode(_components.h3, {
      id: "heading-3",
      children: "Heading 3"
    }), "\n", createVNode(_components.h4, {
      id: "heading-4",
      children: "Heading 4"
    }), "\n", createVNode(_components.h5, {
      id: "heading-5",
      children: "Heading 5"
    }), "\n", createVNode(_components.h6, {
      id: "heading-6",
      children: "Heading 6"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "paragraph",
      children: "Paragraph"
    }), "\n", createVNode(_components.p, {
      children: "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you\u2019re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships."
    }), "\n", createVNode(_components.p, {
      children: "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you\u2019re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "emphasis",
      children: "Emphasis"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Did you come here for something in ", createVNode(_components.strong, {
            children: "particular"
          }), " or just general"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Did you come here for something in ", createVNode("ins", {
            children: "particular"
          })]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.em, {
            children: "Did you come here"
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Did you come here for ", createVNode(_components.strong, {
            children: "something"
          }), " in particular"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Did you come here for something in particular"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Did you come here for something in particular"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["URLs and URLs in angle brackets will automatically get turned into links. ", createVNode(_components.a, {
            href: "http://www.example.com",
            children: "http://www.example.com"
          }), " or"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.a, {
            href: "http://www.example.com",
            children: "http://www.example.com"
          }), " and sometimes example.com (but not on Github, for example)."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "link",
      children: "Link"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.google.com",
        children: "I\u2019m an inline-style link"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.google.com",
        title: "Google's Homepage",
        children: "I\u2019m an inline-style link with title"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://www.themefisher.com",
        children: "I\u2019m a reference-style link"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "../blob/master/LICENSE",
        children: "I\u2019m a relative reference to a repository file"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://gethugothemes.com",
        children: "You can use numbers for reference-style link definitions"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Or leave it empty and use the ", createVNode(_components.a, {
        href: "https://www.getjekyllthemes.com",
        children: "link text itself"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "example.com (but not on Github, for example)."
    }), "\n", createVNode(_components.p, {
      children: "Some text to show that the reference links can follow later."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "ordered-list",
      children: "Ordered List"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "List item"
      }), "\n", createVNode(_components.li, {
        children: "List item"
      }), "\n", createVNode(_components.li, {
        children: "List item"
      }), "\n", createVNode(_components.li, {
        children: "List item"
      }), "\n", createVNode(_components.li, {
        children: "List item"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "unordered-list",
      children: "Unordered List"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "List item"
      }), "\n", createVNode(_components.li, {
        children: "List item"
      }), "\n", createVNode(_components.li, {
        children: "List item"
      }), "\n", createVNode(_components.li, {
        children: "List item"
      }), "\n", createVNode(_components.li, {
        children: "List item"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "code-and-syntax-highlighting",
      children: "Code and Syntax Highlighting"
    }), "\n", createVNode(_components.h4, {
      id: "html",
      children: "HTML"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: '"nav-item"'
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: '"nav-link"'
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " href"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: '"/"'
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">Home</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  </"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: '"nav-item"'
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: '"nav-link"'
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: " href"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: '"about/"'
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">About</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  </"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "`}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h4, {
      id: "css",
      children: "CSS"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "css",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "img"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  vertical-align: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "middle"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  border: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  max-width: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "100"
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "%"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "  height: "
          }), createVNode(_components.span, {
            style: {
              color: "#D19A66"
            },
            children: "auto"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h4, {
      id: "javascript",
      children: "JavaScript"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "window"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: '"load"'
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ", ("
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75",
              fontStyle: "italic"
            },
            children: "e"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#C678DD"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "  document"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#61AFEF"
            },
            children: "querySelector"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: '".preloader"'
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#E5C07B"
            },
            children: "style"
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#E06C75"
            },
            children: "display"
          }), createVNode(_components.span, {
            style: {
              color: "#56B6C2"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#98C379"
            },
            children: ' "none"'
          }), createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ABB2BF"
            },
            children: "});"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "button",
      children: "Button"
    }), "\n", createVNode(Button, {
      href: "#",
      style: "solid",
      children: createVNode(_components.p, {
        children: "Button"
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "quote",
      children: "Quote"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once."
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "notice",
      children: "Notice"
    }), "\n", createVNode(Notice, {
      type: "note",
      children: "This is a simple note."
    }), "\n", createVNode(Notice, {
      type: "tip",
      children: "This is a simple note."
    }), "\n", createVNode(Notice, {
      type: "info",
      children: "This is a simple note."
    }), "\n", createVNode(Notice, {
      type: "warning",
      children: "This is a simple note."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "tab",
      children: "Tab"
    }), "\n", createVNode(Tabs, {
      "client:load": true,
      "client:component-path": "@/shortcodes/Tabs",
      "client:component-export": "default",
      "client:component-hydration": true,
      children: [createVNode(Tab, {
        name: "Tab 1",
        children: [createVNode(_components.h4, {
          id: "did-you-come-here-for-something-in-particular",
          children: "Did you come here for something in particular?"
        }), createVNode(_components.p, {
          children: "Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you\u2019re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf."
        })]
      }), createVNode(Tab, {
        name: "Tab 2",
        children: [createVNode(_components.h4, {
          id: "i-wanna-talk-about-the-assassination-attempt",
          children: "I wanna talk about the assassination attempt"
        }), createVNode(_components.p, {
          children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        }), createVNode(_components.p, {
          children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        })]
      }), createVNode(Tab, {
        name: "Tab 3",
        children: [createVNode(_components.h4, {
          id: "we-know-youre-dealing-in-stolen-ore",
          children: "We know you\u2019re dealing in stolen ore"
        }), createVNode(_components.p, {
          children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        }), createVNode(_components.p, {
          children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo"
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "table",
      children: "Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "#"
          }), createVNode(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "First"
          }), createVNode(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Last"
          }), createVNode(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Handle"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Row:1 Cell:1"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Row:1 Cell:2"
          }), createVNode(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Row:1 Cell:3"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Row:2 Cell:1"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Row:2 Cell:2"
          }), createVNode(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Row:2 Cell:3"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Row:3 Cell:1"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Row:3 Cell:2"
          }), createVNode(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Row:3 Cell:3"
          })]
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "collapse",
      children: "Collapse"
    }), "\n", createVNode(Accordion, {
      "client:load": true,
      title: "Why should you need to do this?",
      "client:component-path": "@/shortcodes/Accordion",
      "client:component-export": "default",
      "client:component-hydration": true,
      children: createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "This is a thing."
        }), "\n", createVNode(_components.li, {
          children: "This is a thing."
        }), "\n", createVNode(_components.li, {
          children: "This is a thing."
        }), "\n", createVNode(_components.li, {
          children: "This is a thing."
        }), "\n", createVNode(_components.li, {
          children: "This is a thing."
        }), "\n"]
      })
    }), "\n", createVNode(Accordion, {
      "client:load": true,
      title: "How can I adjust Horizontal centering",
      "client:component-path": "@/shortcodes/Accordion",
      "client:component-export": "default",
      "client:component-hydration": true,
      children: createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "This is a thing."
        }), "\n", createVNode(_components.li, {
          children: "This is a thing."
        }), "\n", createVNode(_components.li, {
          children: "This is a thing."
        }), "\n", createVNode(_components.li, {
          children: "This is a thing."
        }), "\n", createVNode(_components.li, {
          children: "This is a thing."
        }), "\n"]
      })
    }), "\n", createVNode(Accordion, {
      "client:load": true,
      title: "Should you use Negative margin?",
      "client:component-path": "@/shortcodes/Accordion",
      "client:component-export": "default",
      "client:component-hydration": true,
      children: createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "This is a thing."
        }), "\n", createVNode(_components.li, {
          children: "This is a thing."
        }), "\n", createVNode(_components.li, {
          children: "This is a thing."
        }), "\n", createVNode(_components.li, {
          children: "This is a thing."
        }), "\n", createVNode(_components.li, {
          children: "This is a thing."
        }), "\n"]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "image",
      children: "Image"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/images/flower.jpg",
        alt: "image"
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "youtube-video",
      children: "Youtube video"
    }), "\n", createVNode(Youtube, {
      "client:load": true,
      id: "ZEe-IFezQok",
      title: "Play:Youtube",
      "client:component-path": "@/shortcodes/Youtube",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "custom-video",
      children: "Custom video"
    }), "\n", createVNode(Video, {
      width: "100%",
      src: "https://joy1.videvo.net/videvo_files/video/free/video0467/large_watermarked/_import_61516692993d77.04238324_preview.mp4"
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/elements";
const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/pages/elements.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/pages/elements.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };

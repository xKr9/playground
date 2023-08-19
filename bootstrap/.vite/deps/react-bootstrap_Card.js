import {
  require_classnames,
  require_jsx_runtime,
  useBootstrapPrefix
} from "./chunk-NSHX344G.js";
import {
  __toESM,
  require_react
} from "./chunk-L7APZED3.js";

// node_modules/react-bootstrap/esm/Card.js
var import_classnames5 = __toESM(require_classnames());
var React6 = __toESM(require_react());

// node_modules/react-bootstrap/esm/createWithBsPrefix.js
var import_classnames = __toESM(require_classnames());

// node_modules/dom-helpers/esm/camelize.js
var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function(_, chr) {
    return chr.toUpperCase();
  });
}

// node_modules/react-bootstrap/esm/createWithBsPrefix.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var pascalCase = (str) => str[0].toUpperCase() + camelize(str).slice(1);
function createWithBsPrefix(prefix, {
  displayName = pascalCase(prefix),
  Component,
  defaultProps
} = {}) {
  const BsComponent = React.forwardRef(({
    className,
    bsPrefix,
    as: Tag = Component || "div",
    ...props
  }, ref) => {
    const componentProps = {
      ...defaultProps,
      ...props
    };
    const resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
    return (0, import_jsx_runtime.jsx)(Tag, {
      ref,
      className: (0, import_classnames.default)(className, resolvedPrefix),
      ...componentProps
    });
  });
  BsComponent.displayName = displayName;
  return BsComponent;
}

// node_modules/react-bootstrap/esm/divWithClassName.js
var React2 = __toESM(require_react());
var import_classnames2 = __toESM(require_classnames());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var divWithClassName_default = (className) => React2.forwardRef((p, ref) => (0, import_jsx_runtime2.jsx)("div", {
  ...p,
  ref,
  className: (0, import_classnames2.default)(p.className, className)
}));

// node_modules/react-bootstrap/esm/CardImg.js
var import_classnames3 = __toESM(require_classnames());
var React3 = __toESM(require_react());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var CardImg = React3.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix,
    className,
    variant,
    as: Component = "img",
    ...props
  }, ref) => {
    const prefix = useBootstrapPrefix(bsPrefix, "card-img");
    return (0, import_jsx_runtime3.jsx)(Component, {
      ref,
      className: (0, import_classnames3.default)(variant ? `${prefix}-${variant}` : prefix, className),
      ...props
    });
  }
);
CardImg.displayName = "CardImg";
var CardImg_default = CardImg;

// node_modules/react-bootstrap/esm/CardHeader.js
var import_classnames4 = __toESM(require_classnames());
var React5 = __toESM(require_react());
var import_react = __toESM(require_react());

// node_modules/react-bootstrap/esm/CardHeaderContext.js
var React4 = __toESM(require_react());
var context = React4.createContext(null);
context.displayName = "CardHeaderContext";
var CardHeaderContext_default = context;

// node_modules/react-bootstrap/esm/CardHeader.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var CardHeader = React5.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "card-header");
  const contextValue = (0, import_react.useMemo)(() => ({
    cardHeaderBsPrefix: prefix
  }), [prefix]);
  return (0, import_jsx_runtime4.jsx)(CardHeaderContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime4.jsx)(Component, {
      ref,
      ...props,
      className: (0, import_classnames4.default)(className, prefix)
    })
  });
});
CardHeader.displayName = "CardHeader";
var CardHeader_default = CardHeader;

// node_modules/react-bootstrap/esm/Card.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var DivStyledAsH5 = divWithClassName_default("h5");
var DivStyledAsH6 = divWithClassName_default("h6");
var CardBody = createWithBsPrefix("card-body");
var CardTitle = createWithBsPrefix("card-title", {
  Component: DivStyledAsH5
});
var CardSubtitle = createWithBsPrefix("card-subtitle", {
  Component: DivStyledAsH6
});
var CardLink = createWithBsPrefix("card-link", {
  Component: "a"
});
var CardText = createWithBsPrefix("card-text", {
  Component: "p"
});
var CardFooter = createWithBsPrefix("card-footer");
var CardImgOverlay = createWithBsPrefix("card-img-overlay");
var Card = React6.forwardRef(({
  bsPrefix,
  className,
  bg,
  text,
  border,
  body = false,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "card");
  return (0, import_jsx_runtime5.jsx)(Component, {
    ref,
    ...props,
    className: (0, import_classnames5.default)(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
    children: body ? (0, import_jsx_runtime5.jsx)(CardBody, {
      children
    }) : children
  });
});
Card.displayName = "Card";
var Card_default = Object.assign(Card, {
  Img: CardImg_default,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Body: CardBody,
  Link: CardLink,
  Text: CardText,
  Header: CardHeader_default,
  Footer: CardFooter,
  ImgOverlay: CardImgOverlay
});
export {
  Card_default as default
};
//# sourceMappingURL=react-bootstrap_Card.js.map

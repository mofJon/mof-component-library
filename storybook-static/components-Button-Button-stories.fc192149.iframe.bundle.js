"use strict";
(self.webpackChunkcomponent_library =
  self.webpackChunkcomponent_library || []).push([
  [747],
  {
    "./components/Button/Button.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Primary: () => Primary,
          Secondary: () => Secondary,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_joncouch_Documents_base_builds_component_library_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/defineProperty.js",
        );
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(t), !0).forEach(function (r) {
                (0,
                _Users_joncouch_Documents_base_builds_component_library_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(
                  e,
                  r,
                  t[r],
                );
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ownKeys(Object(t)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(t, r),
                  );
                });
        }
        return e;
      }
      const __WEBPACK_DEFAULT_EXPORT__ = {
        component: __webpack_require__("./components/Button/index.tsx").z,
        argTypes: { intent: { table: { disable: !0 } } },
      };
      var Primary = { args: { variant: "primary", text: "Button" } },
        Secondary = {
          args: _objectSpread(
            _objectSpread({}, Primary.args),
            {},
            { variant: "secondary" },
          ),
        };
      (Primary.parameters = {
        ...Primary.parameters,
        docs: {
          ...Primary.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    variant: 'primary',\n    text: 'Button'\n  }\n}",
            ...Primary.parameters?.docs?.source,
          },
        },
      }),
        (Secondary.parameters = {
          ...Secondary.parameters,
          docs: {
            ...Secondary.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    ...Primary.args,\n    variant: 'secondary'\n  }\n}",
              ...Secondary.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = ["Primary", "Secondary"];
    },
    "./components/Box/index.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { x: () => Box });
      var defineProperty = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/defineProperty.js",
        ),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js",
        ),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        box = (0,
        __webpack_require__(
          "./node_modules/class-variance-authority/dist/index.mjs",
        ).j)("box", {
          variants: { intent: { flex: ["flex flex-1"], block: ["block"] } },
          defaultVariants: { intent: "flex" },
        });
      try {
        (box.displayName = "box"),
          (box.__docgenInfo = {
            description: "",
            displayName: "box",
            props: {
              intent: {
                defaultValue: null,
                description: "",
                name: "intent",
                required: !1,
                type: { name: '"flex" | "block" | null' },
              },
              class: {
                defaultValue: null,
                description: "",
                name: "class",
                required: !1,
                type: { name: "ClassValue" },
              },
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "ClassValue" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["components/Box/Box.styles.tsx#box"] = {
              docgenInfo: box.__docgenInfo,
              name: "box",
              path: "components/Box/Box.styles.tsx#box",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var motion = __webpack_require__(
          "./node_modules/framer-motion/dist/es/render/dom/motion.mjs",
        ),
        _excluded = ["className", "variant"];
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(t), !0).forEach(function (r) {
                (0, defineProperty.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ownKeys(Object(t)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(t, r),
                  );
                });
        }
        return e;
      }
      var Box = function Box(_ref) {
        var className = _ref.className,
          _ref$variant = _ref.variant,
          variant = void 0 === _ref$variant ? "flex" : _ref$variant,
          props = (0, objectWithoutProperties.Z)(_ref, _excluded),
          isAnimated = props.animate || props.variants,
          allProps = _objectSpread(
            _objectSpread(
              {},
              (function boxVars(intent, classes) {
                var baseStyles = "\n        ".concat(classes || "", "\n    ");
                return { className: box({ intent, className: baseStyles }) };
              })(variant, className),
            ),
            props,
          );
        return (0, react.createElement)(
          isAnimated ? (0, motion.E)("div") : "div",
          allProps,
          props.children,
        );
      };
      try {
        (Box.displayName = "Box"),
          (Box.__docgenInfo = {
            description: "",
            displayName: "Box",
            props: {
              variant: {
                defaultValue: { value: "flex" },
                description: "",
                name: "variant",
                required: !1,
                type: {
                  name: "enum",
                  value: [{ value: '"flex"' }, { value: '"block"' }],
                },
              },
              intent: {
                defaultValue: null,
                description: "",
                name: "intent",
                required: !1,
                type: { name: '"flex" | "block" | null' },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["components/Box/index.tsx#Box"] = {
              docgenInfo: Box.__docgenInfo,
              name: "Box",
              path: "components/Box/index.tsx#Box",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./components/Button/index.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { z: () => Button });
      var defineProperty = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/defineProperty.js",
        ),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js",
        ),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        Button_styles_button = (0,
        __webpack_require__(
          "./node_modules/class-variance-authority/dist/index.mjs",
        ).j)("button", {
          variants: {
            intent: {
              primary: [
                "bg-blue-500",
                "text-white",
                "border-transparent",
                "hover:bg-blue-600",
              ],
              secondary: [
                "bg-green-300",
                "text-gray-800",
                "border-green-800",
                "hover:bg-green-400",
              ],
            },
            size: {
              sm: ["text-sm", "py-1", "px-2"],
              md: ["text-base", "py-2", "px-4"],
              full: ["py-2", "w-full"],
            },
          },
          compoundVariants: [
            { intent: "primary", size: ["md", "full"], class: "uppercase" },
          ],
          defaultVariants: { intent: "primary", size: "md" },
        });
      try {
        (Button_styles_button.displayName = "button"),
          (Button_styles_button.__docgenInfo = {
            description: "",
            displayName: "button",
            props: {
              intent: {
                defaultValue: null,
                description: "",
                name: "intent",
                required: !1,
                type: { name: '"primary" | "secondary" | null' },
              },
              size: {
                defaultValue: null,
                description: "",
                name: "size",
                required: !1,
                type: { name: '"sm" | "md" | "full" | null' },
              },
              class: {
                defaultValue: null,
                description: "",
                name: "class",
                required: !1,
                type: { name: "ClassValue" },
              },
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "ClassValue" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "components/Button/Button.styles.tsx#button"
            ] = {
              docgenInfo: Button_styles_button.__docgenInfo,
              name: "button",
              path: "components/Button/Button.styles.tsx#button",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var motion = __webpack_require__(
          "./node_modules/framer-motion/dist/es/render/dom/motion.mjs",
        ),
        components = __webpack_require__("./components/index.ts"),
        _excluded = ["className", "variant", "size", "text"],
        __jsx = react.createElement;
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(t), !0).forEach(function (r) {
                (0, defineProperty.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ownKeys(Object(t)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(t, r),
                  );
                });
        }
        return e;
      }
      var Button = function Button(_ref) {
        var className = _ref.className,
          _ref$variant = _ref.variant,
          variant = void 0 === _ref$variant ? "primary" : _ref$variant,
          _ref$size = _ref.size,
          size = void 0 === _ref$size ? "md" : _ref$size,
          _ref$text = _ref.text,
          text = void 0 === _ref$text ? "Button" : _ref$text,
          props = (0, objectWithoutProperties.Z)(_ref, _excluded),
          isAnimated = props.animate || props.variants,
          allProps = _objectSpread(
            _objectSpread(
              {},
              (function buttonVars(intent, size, classes) {
                var baseStyles = "\n        rounded mr-auto\n         ".concat(
                  classes || "",
                  "\n    ",
                );
                return {
                  className: Button_styles_button({
                    intent,
                    size,
                    className: baseStyles,
                  }),
                };
              })(variant, size, className),
            ),
            props,
          );
        return (0, react.createElement)(
          isAnimated ? (0, motion.E)("button") : "button",
          allProps,
          __jsx(components.xv, { text }),
        );
      };
      try {
        (Button.displayName = "Button"),
          (Button.__docgenInfo = {
            description: "",
            displayName: "Button",
            props: {
              text: {
                defaultValue: { value: "Button" },
                description: "",
                name: "text",
                required: !1,
                type: { name: "string" },
              },
              variant: {
                defaultValue: { value: "primary" },
                description: "",
                name: "variant",
                required: !1,
                type: {
                  name: "enum",
                  value: [{ value: '"primary"' }, { value: '"secondary"' }],
                },
              },
              intent: {
                defaultValue: null,
                description: "",
                name: "intent",
                required: !1,
                type: { name: '"primary" | "secondary" | null' },
              },
              size: {
                defaultValue: { value: "md" },
                description: "",
                name: "size",
                required: !1,
                type: { name: '"sm" | "md" | "full" | null' },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["components/Button/index.tsx#Button"] = {
              docgenInfo: Button.__docgenInfo,
              name: "Button",
              path: "components/Button/index.tsx#Button",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./components/Text/index.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, { x: () => Text });
      var defineProperty = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/defineProperty.js",
        ),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js",
        ),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        Text_styles_text = (0,
        __webpack_require__(
          "./node_modules/class-variance-authority/dist/index.mjs",
        ).j)("text", {
          variants: {
            intent: {
              primary: ["text-white-800"],
              secondary: ["text-gray-800"],
            },
            size: {
              h1: "font-bold leading-tight text-4xl uppercase",
              h2: "font-bold leading-tight text-3xl",
              h3: "font-bold leading-tight text-2xl",
              h4: "font-medium leading-tight text-xl",
              h5: "font-medium leading-tight text-lg",
              h6: "font-medium leading-tight text-md",
              button: "font-medium leading-tight text-sm",
              copy: "leading-normal text-sm lh-2",
            },
          },
          compoundVariants: [
            { intent: "primary", size: "copy", class: "text-white-600" },
          ],
          defaultVariants: { intent: "primary", size: "copy" },
        });
      try {
        (Text_styles_text.displayName = "text"),
          (Text_styles_text.__docgenInfo = {
            description: "",
            displayName: "text",
            props: {
              intent: {
                defaultValue: null,
                description: "",
                name: "intent",
                required: !1,
                type: { name: '"primary" | "secondary" | null' },
              },
              size: {
                defaultValue: null,
                description: "",
                name: "size",
                required: !1,
                type: {
                  name: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "button" | "copy" | null',
                },
              },
              class: {
                defaultValue: null,
                description: "",
                name: "class",
                required: !1,
                type: { name: "ClassValue" },
              },
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "ClassValue" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["components/Text/Text.styles.tsx#text"] = {
              docgenInfo: Text_styles_text.__docgenInfo,
              name: "text",
              path: "components/Text/Text.styles.tsx#text",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var motion = __webpack_require__(
          "./node_modules/framer-motion/dist/es/render/dom/motion.mjs",
        ),
        _excluded = ["className", "variant", "text", "textStyle"];
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(t), !0).forEach(function (r) {
                (0, defineProperty.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ownKeys(Object(t)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(t, r),
                  );
                });
        }
        return e;
      }
      var Text = function Text(_ref) {
        var className = _ref.className,
          _ref$variant = _ref.variant,
          variant = void 0 === _ref$variant ? "primary" : _ref$variant,
          _ref$text = _ref.text,
          text = void 0 === _ref$text ? "Text" : _ref$text,
          _ref$textStyle = _ref.textStyle,
          textStyle = void 0 === _ref$textStyle ? "copy" : _ref$textStyle,
          props = (0, objectWithoutProperties.Z)(_ref, _excluded),
          isAnimated = props.animate || props.variants,
          allProps = _objectSpread(
            _objectSpread(
              _objectSpread(
                {},
                (function textVars(intent, size, classes) {
                  var baseStyles = "\n        ".concat(classes || "", "\n    ");
                  return {
                    className: Text_styles_text({
                      intent,
                      size,
                      className: baseStyles,
                    }),
                  };
                })(variant, textStyle, className),
              ),
              props,
            ),
            {},
            { dangerouslySetInnerHTML: { __html: text } },
          ),
          textTag = "copy" === textStyle ? "p" : textStyle;
        return (0, react.createElement)(
          isAnimated ? (0, motion.E)(textTag) : textTag,
          allProps,
        );
      };
      try {
        (Text.displayName = "Text"),
          (Text.__docgenInfo = {
            description: "",
            displayName: "Text",
            props: {
              text: {
                defaultValue: { value: "Text" },
                description: "",
                name: "text",
                required: !1,
                type: { name: "string" },
              },
              variant: {
                defaultValue: { value: "primary" },
                description: "",
                name: "variant",
                required: !1,
                type: {
                  name: "enum",
                  value: [{ value: '"primary"' }, { value: '"secondary"' }],
                },
              },
              textStyle: {
                defaultValue: { value: "copy" },
                description: "",
                name: "textStyle",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"h1"' },
                    { value: '"h2"' },
                    { value: '"h3"' },
                    { value: '"h4"' },
                    { value: '"h5"' },
                    { value: '"h6"' },
                    { value: '"button"' },
                    { value: '"copy"' },
                  ],
                },
              },
              intent: {
                defaultValue: null,
                description: "",
                name: "intent",
                required: !1,
                type: { name: '"primary" | "secondary" | null' },
              },
              size: {
                defaultValue: null,
                description: "",
                name: "size",
                required: !1,
                type: {
                  name: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "button" | "copy" | null',
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["components/Text/index.tsx#Text"] = {
              docgenInfo: Text.__docgenInfo,
              name: "Text",
              path: "components/Text/index.tsx#Text",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./components/index.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        xu: () => Box.x,
        zx: () => Button.z,
        Kq: () => Stack,
        xv: () => Text.x,
      });
      var Box = __webpack_require__("./components/Box/index.tsx"),
        Button = __webpack_require__("./components/Button/index.tsx"),
        defineProperty = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/defineProperty.js",
        ),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js",
        ),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        stack = (0,
        __webpack_require__(
          "./node_modules/class-variance-authority/dist/index.mjs",
        ).j)("stack", {
          variants: {
            intent: { row: ["flex", "flex-row"], column: ["flex", "flex-col"] },
          },
          defaultVariants: { intent: "column" },
        });
      try {
        (stack.displayName = "stack"),
          (stack.__docgenInfo = {
            description: "",
            displayName: "stack",
            props: {
              intent: {
                defaultValue: null,
                description: "",
                name: "intent",
                required: !1,
                type: { name: '"row" | "column" | null' },
              },
              class: {
                defaultValue: null,
                description: "",
                name: "class",
                required: !1,
                type: { name: "ClassValue" },
              },
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "ClassValue" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "components/Stack/Stack.styles.tsx#stack"
            ] = {
              docgenInfo: stack.__docgenInfo,
              name: "stack",
              path: "components/Stack/Stack.styles.tsx#stack",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var motion = __webpack_require__(
          "./node_modules/framer-motion/dist/es/render/dom/motion.mjs",
        ),
        _excluded = ["className", "direction", "gap"];
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(t), !0).forEach(function (r) {
                (0, defineProperty.Z)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : ownKeys(Object(t)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(t, r),
                  );
                });
        }
        return e;
      }
      var Stack = function Stack(_ref) {
        var className = _ref.className,
          _ref$direction = _ref.direction,
          direction = void 0 === _ref$direction ? "row" : _ref$direction,
          _ref$gap = _ref.gap,
          gap = void 0 === _ref$gap ? 2 : _ref$gap,
          props = (0, objectWithoutProperties.Z)(_ref, _excluded),
          isAnimated = props.animate || props.variants,
          allProps = _objectSpread(
            _objectSpread(
              {},
              (function stackVars(intent, gap, classes) {
                var baseStyles = "\n        gap-"
                  .concat(gap, "\n        ")
                  .concat(classes || "", "\n    ");
                return { className: stack({ intent, className: baseStyles }) };
              })(direction, gap, className),
            ),
            props,
          );
        return (0, react.createElement)(
          isAnimated ? (0, motion.E)("div") : "div",
          allProps,
          props.children,
        );
      };
      try {
        (Stack.displayName = "Stack"),
          (Stack.__docgenInfo = {
            description: "",
            displayName: "Stack",
            props: {
              gap: {
                defaultValue: { value: "2" },
                description: "",
                name: "gap",
                required: !1,
                type: { name: "number" },
              },
              direction: {
                defaultValue: { value: "row" },
                description: "",
                name: "direction",
                required: !1,
                type: {
                  name: "enum",
                  value: [{ value: '"row"' }, { value: '"column"' }],
                },
              },
              props: {
                defaultValue: null,
                description: "",
                name: "props",
                required: !1,
                type: { name: "any" },
              },
              intent: {
                defaultValue: null,
                description: "",
                name: "intent",
                required: !1,
                type: { name: '"row" | "column" | null' },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["components/Stack/index.tsx#Stack"] = {
              docgenInfo: Stack.__docgenInfo,
              name: "Stack",
              path: "components/Stack/index.tsx#Stack",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Text = __webpack_require__("./components/Text/index.tsx");
    },
  },
]);

"use strict";
(self.webpackChunkcomponent_library =
  self.webpackChunkcomponent_library || []).push([
  [874],
  {
    "./components/Text/Text.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Copy: () => Copy,
          Heading1: () => Heading1,
          Heading2: () => Heading2,
          Heading3: () => Heading3,
          Heading4: () => Heading4,
          Heading5: () => Heading5,
          Heading6: () => Heading6,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      const __WEBPACK_DEFAULT_EXPORT__ = {
        component: __webpack_require__("./components/Text/index.tsx").x,
        argTypes: {
          intent: { table: { disable: !0 } },
          size: { table: { disable: !0 } },
        },
      };
      var Heading1 = { args: { textStyle: "h1", text: "Heading 1" } },
        Heading2 = { args: { textStyle: "h2", text: "Heading 2" } },
        Heading3 = { args: { textStyle: "h3", text: "Heading 3" } },
        Heading4 = { args: { textStyle: "h4", text: "Heading 4" } },
        Heading5 = { args: { textStyle: "h5", text: "Heading 5" } },
        Heading6 = { args: { textStyle: "h6", text: "Heading 6" } },
        Copy = {
          args: { textStyle: "copy", text: "Lorem ipsum lamat salmat, etc..." },
        };
      (Heading1.parameters = {
        ...Heading1.parameters,
        docs: {
          ...Heading1.parameters?.docs,
          source: {
            originalSource:
              "{\n  args: {\n    textStyle: 'h1',\n    text: 'Heading 1'\n  }\n}",
            ...Heading1.parameters?.docs?.source,
          },
        },
      }),
        (Heading2.parameters = {
          ...Heading2.parameters,
          docs: {
            ...Heading2.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    textStyle: 'h2',\n    text: 'Heading 2'\n  }\n}",
              ...Heading2.parameters?.docs?.source,
            },
          },
        }),
        (Heading3.parameters = {
          ...Heading3.parameters,
          docs: {
            ...Heading3.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    textStyle: 'h3',\n    text: 'Heading 3'\n  }\n}",
              ...Heading3.parameters?.docs?.source,
            },
          },
        }),
        (Heading4.parameters = {
          ...Heading4.parameters,
          docs: {
            ...Heading4.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    textStyle: 'h4',\n    text: 'Heading 4'\n  }\n}",
              ...Heading4.parameters?.docs?.source,
            },
          },
        }),
        (Heading5.parameters = {
          ...Heading5.parameters,
          docs: {
            ...Heading5.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    textStyle: 'h5',\n    text: 'Heading 5'\n  }\n}",
              ...Heading5.parameters?.docs?.source,
            },
          },
        }),
        (Heading6.parameters = {
          ...Heading6.parameters,
          docs: {
            ...Heading6.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    textStyle: 'h6',\n    text: 'Heading 6'\n  }\n}",
              ...Heading6.parameters?.docs?.source,
            },
          },
        }),
        (Copy.parameters = {
          ...Copy.parameters,
          docs: {
            ...Copy.parameters?.docs,
            source: {
              originalSource:
                "{\n  args: {\n    textStyle: 'copy',\n    text: 'Lorem ipsum lamat salmat, etc...'\n  }\n}",
              ...Copy.parameters?.docs?.source,
            },
          },
        });
      const __namedExportsOrder = [
        "Heading1",
        "Heading2",
        "Heading3",
        "Heading4",
        "Heading5",
        "Heading6",
        "Copy",
      ];
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
  },
]);

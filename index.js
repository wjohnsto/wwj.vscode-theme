import colors from "./colors";
import fs from "fs";

/**
 * @typedef {typeof colors.bg[0]} Color
 */

/**
 * @typedef {import("./themes/wwj-theme-color-theme.json")} Theme
 */

/**
 * @param {"light" | "dark"} variant
 */
function getPalette(variant) {
  return {
    bg0: colors.bg[0][variant],
    bg1: colors.bg[1][variant],
    bg2: colors.bg[2][variant],
    bg3: colors.bg[3][variant],
    bg4: colors.bg[4][variant],

    fg0: colors.fg[0][variant],
    fg1: colors.fg[1][variant],
    fg2: colors.fg[2][variant],
    fg3: colors.fg[3][variant],

    black: colors.black.default[variant],
    blackBright: colors.black.bright[variant],
    blackDim: colors.black.dim[variant],

    blue: colors.blue.default[variant],
    blueBright: colors.blue.bright[variant],
    blueDim: colors.blue.dim[variant],

    comment: colors.comment[variant],

    cyan: colors.cyan.default[variant],
    cyanBright: colors.cyan.bright[variant],
    cyanDim: colors.cyan.dim[variant],

    green: colors.green.default[variant],
    greenBright: colors.green.bright[variant],
    greenDim: colors.green.dim[variant],

    magenta: colors.magenta.default[variant],
    magentaBright: colors.magenta.bright[variant],
    magentaDim: colors.magenta.dim[variant],

    orange: colors.orange.default[variant],
    orangeBright: colors.orange.bright[variant],
    orangeDim: colors.orange.dim[variant],

    pink: colors.pink.default[variant],
    pinkBright: colors.pink.bright[variant],
    pinkDim: colors.pink.dim[variant],

    red: colors.red.default[variant],
    redBright: colors.red.bright[variant],
    redDim: colors.red.dim[variant],

    sel0: colors.sel[0][variant],
    sel1: colors.sel[1][variant],

    white: colors.white.default[variant],
    whiteBright: colors.white.bright[variant],
    whiteDim: colors.white.dim[variant],

    yellow: colors.yellow.default[variant],
    yellowBright: colors.yellow.bright[variant],
    yellowDim: colors.yellow.dim[variant],
  };
}

/**
 * @param {"light" | "dark"} variant
 * @returns {Theme}
 */
function generate(variant) {
  const {
    bg0,
    bg1,
    bg2,
    bg3,
    bg4,
    fg0,
    fg1,
    fg2,
    fg3,
    black,
    blackBright,
    blackDim,
    blue,
    blueBright,
    blueDim,
    comment,
    cyan,
    cyanBright,
    cyanDim,
    green,
    greenBright,
    greenDim,
    magenta,
    magentaBright,
    magentaDim,
    orange,
    orangeBright,
    orangeDim,
    pink,
    pinkBright,
    pinkDim,
    red,
    redBright,
    redDim,
    sel0,
    sel1,
    white,
    whiteBright,
    whiteDim,
    yellow,
    yellowBright,
    yellowDim,
  } = getPalette(variant);
  return {
    name: "wwj-theme",
    colors: {
      "editor.background": bg0,
      "editor.foreground": fg0,
      "activityBarBadge.background": bg2,
      "sideBarTitle.foreground": fg2,
    },
    tokenColors: [
      {
        name: "Comment",
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          fontStyle: "italic",
          foreground: green,
        },
      },
      {
        name: "Variables",
        scope: ["variable", "string constant.other.placeholder"],
        settings: {
          foreground: whiteDim,
        },
      },
      {
        name: "Colors",
        scope: ["constant.other.color"],
        settings: {
          foreground: white,
        },
      },
      {
        name: "Invalid",
        scope: ["invalid", "invalid.illegal"],
        settings: {
          foreground: redDim,
        },
      },
      {
        name: "Keyword, Storage",
        scope: ["keyword", "storage.type", "storage.modifier"],
        settings: {
          foreground: blueBright,
        },
      },
      {
        name: "Operator, Misc",
        scope: [
          "keyword.control",
          "constant.other.color",
          "punctuation",
          "meta.tag",
          "punctuation.definition.tag",
          "punctuation.separator.inheritance.php",
          "punctuation.definition.tag.html",
          "punctuation.definition.tag.begin.html",
          "punctuation.definition.tag.end.html",
          "punctuation.section.embedded",
          "keyword.other.template",
          "keyword.other.substitution",
        ],
        settings: {
          foreground: magenta,
        },
      },
      {
        name: "Tag",
        scope: [
          "entity.name.tag",
          "meta.tag.sgml",
          "markup.deleted.git_gutter",
        ],
        settings: {
          foreground: orange,
        },
      },
      {
        name: "Function, Special Method",
        scope: [
          "entity.name.function",
          "meta.function-call",
          "variable.function",
          "support.function",
          "keyword.other.special-method",
        ],
        settings: {
          foreground: yellow,
        },
      },
      {
        name: "Block Level Variables",
        scope: ["meta.block variable.other"],
        settings: {
          foreground: fg1,
        },
      },
      {
        name: "Other Variable, String Link",
        scope: ["support.other.variable", "string.other.link"],
        settings: {
          foreground: fg0,
        },
      },
      {
        name: "Number, Constant, Function Argument, Tag Attribute, Embedded",
        scope: [
          "constant.numeric",
          "constant.language",
          "support.constant",
          "constant.character",
          "constant.escape",
          "variable.parameter",
          "keyword.other.unit",
          "keyword.other",
        ],
        settings: {
          foreground: fg1,
        },
      },
      {
        name: "String, Symbols, Inherited Class, Markup Heading",
        scope: [
          "string",
          "constant.other.symbol",
          "constant.other.key",
          "entity.other.inherited-class",
          "markup.heading",
          "markup.inserted.git_gutter",
          "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
        ],
        settings: {
          foreground: greenBright,
        },
      },
      {
        name: "Class, Support",
        scope: [
          "entity.name",
          "support.type",
          "support.class",
          "support.other.namespace.use.php",
          "meta.use.php",
          "support.other.namespace.php",
          "markup.changed.git_gutter",
          "support.type.sys-types",
        ],
        settings: {
          foreground: yellowDim,
        },
      },
      {
        name: "Entity Types",
        scope: ["support.type"],
        settings: {
          foreground: blue,
        },
      },
      {
        name: "CSS Class and Support",
        scope: [
          "source.css support.type.property-name",
          "source.sass support.type.property-name",
          "source.scss support.type.property-name",
          "source.less support.type.property-name",
          "source.stylus support.type.property-name",
          "source.postcss support.type.property-name",
        ],
        settings: {
          foreground: cyanBright,
        },
      },
      {
        name: "Sub-methods",
        scope: [
          "entity.name.module.js",
          "variable.import.parameter.js",
          "variable.other.class.js",
        ],
        settings: {
          foreground: yellowDim,
        },
      },
      {
        name: "Language methods",
        scope: ["variable.language"],
        settings: {
          fontStyle: "italic",
          foreground: greenDim,
        },
      },
      {
        name: "entity.name.method.js",
        scope: ["entity.name.method.js"],
        settings: {
          fontStyle: "italic",
          foreground: blue,
        },
      },
      {
        name: "meta.method.js",
        scope: [
          "meta.class-method.js entity.name.function.js",
          "variable.function.constructor",
        ],
        settings: {
          foreground: blue,
        },
      },
      {
        name: "Attributes",
        scope: ["entity.other.attribute-name"],
        settings: {
          foreground: fg2,
        },
      },
      {
        name: "HTML Attributes",
        scope: [
          "text.html.basic entity.other.attribute-name.html",
          "text.html.basic entity.other.attribute-name",
        ],
        settings: {
          fontStyle: "italic",
          foreground: fg1,
        },
      },
      {
        name: "CSS Classes",
        scope: ["entity.other.attribute-name.class"],
        settings: {
          foreground: fg1,
        },
      },
      {
        name: "CSS ID's",
        scope: ["source.sass keyword.control"],
        settings: {
          foreground: blue,
        },
      },
      {
        name: "Inserted",
        scope: ["markup.inserted"],
        settings: {
          foreground: greenDim,
        },
      },
      {
        name: "Deleted",
        scope: ["markup.deleted"],
        settings: {
          foreground: redDim,
        },
      },
      {
        name: "Changed",
        scope: ["markup.changed"],
        settings: {
          foreground: magenta,
        },
      },
      {
        name: "Regular Expressions",
        scope: ["string.regexp"],
        settings: {
          foreground: greenBright,
        },
      },
      {
        name: "Escape Characters",
        scope: ["constant.character.escape"],
        settings: {
          foreground: greenBright,
        },
      },
      {
        name: "URL",
        scope: ["*url*", "*link*", "*uri*"],
        settings: {
          fontStyle: "underline",
        },
      },
      {
        name: "Decorators",
        scope: [
          "tag.decorator.js entity.name.tag.js",
          "tag.decorator.js punctuation.definition.tag.js",
        ],
        settings: {
          fontStyle: "italic",
          foreground: blue,
        },
      },
      {
        name: "ES7 Bind Operator",
        scope: [
          "source.js constant.other.object.key.js string.unquoted.label.js",
        ],
        settings: {
          fontStyle: "italic",
          foreground: redDim,
        },
      },
      {
        name: "JSON Key - Level 0",
        scope: [
          "source.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: magenta,
        },
      },
      {
        name: "JSON Key - Level 1",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: fg1,
        },
      },
      {
        name: "JSON Key - Level 2",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: fg2,
        },
      },
      {
        name: "JSON Key - Level 3",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: redDim,
        },
      },
      {
        name: "JSON Key - Level 4",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: fg2,
        },
      },
      {
        name: "JSON Key - Level 5",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: blue,
        },
      },
      {
        name: "JSON Key - Level 6",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: fg2,
        },
      },
      {
        name: "JSON Key - Level 7",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: magenta,
        },
      },
      {
        name: "JSON Key - Level 8",
        scope: [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: greenDim,
        },
      },
      {
        name: "Markdown - Plain",
        scope: [
          "text.html.markdown",
          "punctuation.definition.list_item.markdown",
        ],
        settings: {
          foreground: white,
        },
      },
      {
        name: "Markdown - Markup Raw Inline",
        scope: ["text.html.markdown markup.inline.raw.markdown"],
        settings: {
          foreground: magenta,
        },
      },
      {
        name: "Markdown - Markup Raw Inline Punctuation",
        scope: [
          "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown",
        ],
        settings: {
          foreground: fg0,
        },
      },
      {
        name: "Markdown - Heading",
        scope: [
          "markdown.heading",
          "markup.heading | markup.heading entity.name",
          "markup.heading.markdown punctuation.definition.heading.markdown",
        ],
        settings: {
          foreground: greenDim,
        },
      },
      {
        name: "Markup - Italic",
        scope: ["markup.italic"],
        settings: {
          fontStyle: "italic",
          foreground: fg2,
        },
      },
      {
        name: "Markup - Bold",
        scope: ["markup.bold", "markup.bold string"],
        settings: {
          fontStyle: "bold",
          foreground: fg2,
        },
      },
      {
        name: "Markup - Bold-Italic",
        scope: [
          "markup.bold markup.italic",
          "markup.italic markup.bold",
          "markup.quote markup.bold",
          "markup.bold markup.italic string",
          "markup.italic markup.bold string",
          "markup.quote markup.bold string",
        ],
        settings: {
          fontStyle: "bold",
          foreground: fg2,
        },
      },
      {
        name: "Markup - Underline",
        scope: ["markup.underline"],
        settings: {
          fontStyle: "underline",
          foreground: fg2,
        },
      },
      {
        name: "Markdown - Blockquote",
        scope: ["markup.quote punctuation.definition.blockquote.markdown"],
        settings: {
          foreground: fg0,
        },
      },
      {
        name: "Markup - Quote",
        scope: ["markup.quote"],
        settings: {
          fontStyle: "italic",
        },
      },
      {
        name: "Markdown - Link",
        scope: ["string.other.link.title.markdown"],
        settings: {
          foreground: blue,
        },
      },
      {
        name: "Markdown - Link Description",
        scope: ["string.other.link.description.title.markdown"],
        settings: {
          foreground: magenta,
        },
      },
      {
        name: "Markdown - Link Anchor",
        scope: ["constant.other.reference.link.markdown"],
        settings: {
          foreground: fg1,
        },
      },
      {
        name: "Markup - Raw Block",
        scope: ["markup.raw.block"],
        settings: {
          foreground: magenta,
        },
      },
      {
        name: "Markdown - Raw Block Fenced",
        scope: ["markup.raw.block.fenced.markdown"],
        settings: {
          foreground: black + "50",
        },
      },
      {
        name: "Markdown - Fenced Bode Block",
        scope: ["punctuation.definition.fenced.markdown"],
        settings: {
          foreground: black + "50",
        },
      },
      {
        name: "Markdown - Fenced Bode Block Variable",
        scope: [
          "markup.raw.block.fenced.markdown",
          "variable.language.fenced.markdown",
          "punctuation.section.class.end",
        ],
        settings: {
          foreground: white,
        },
      },
      {
        name: "Markdown - Fenced Language",
        scope: ["variable.language.fenced.markdown"],
        settings: {
          foreground: fg0,
        },
      },
      {
        name: "Markdown - Separator",
        scope: ["meta.separator"],
        settings: {
          fontStyle: "bold",
          foreground: fg0,
        },
      },
      {
        name: "Markup - Table",
        scope: ["markup.table"],
        settings: {
          foreground: white,
        },
      },
    ],
  };
}

const dark = generate("dark");
fs.writeFileSync("./themes/wwj-theme-color-theme.json", JSON.stringify(dark, null, 2));

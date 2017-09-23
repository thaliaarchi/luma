// Summary of the different standards
// http://webcolors.readthedocs.io/en/1.5/colors.html

// The only difference between these two sites seems to be in the inclusion of rebeccapurple
// https://www.w3.org/TR/2011/WD-html5-20110525/common-microsyntaxes.html#rules-for-parsing-a-legacy-color-value
// https://html.spec.whatwg.org/multipage/infrastructure.html#rules-for-parsing-a-legacy-colour-value

interface SimpleColor {
  r, g, b: number;
}
interface AlphaColor extends SimpleColor {
  a: number;
}

function serializeSimpleColor(input: SimpleColor): string {
  return '#' // 1, 3
    + ('0' + input.r.toString(16)).slice(-2) // 2
    + ('0' + input.g.toString(16)).slice(-2)
    + ('0' + input.b.toString(16)).slice(-2);
}


// FIXME: has percentages, but should fix that
// FIXME: incomplete
// NOTE: doesn't handle capitalization of rgb, hsl, etc. keywords
namespace matchers {
  let cssInteger = `[-\\+]?\\d+`; // http://www.w3.org/TR/css3-values/#integers
  let cssNumber = `[-\\+]?\\d*\\.\\d+(?:[eE]${cssInteger})?`; // http://www.w3.org/TR/css3-values/#number-value
  let cssUnit = `(?:${cssInteger})|(?:${cssNumber})%?`;
  let group3 = `\\(\\s*(${cssUnit})\\s*,\\s*(${cssUnit})\\s*,\\s*(${cssUnit})\\s*\\)`;
  let group4 = `\\(\\s*(${cssUnit})\\s*,\\s*(${cssUnit})\\s*,\\s*(${cssUnit})\\s*\\,\\s*(${cssUnit})\\s*\\)`;
  export var hex3 = /^#([\dA-F])([\dA-F])([\dA-F])$/i;
  export var hex6 = /^#([\dA-F]{2})([\dA-F]{2})([\dA-F]{2})$/i;
  export var rgb = new RegExp('rgb' + group3);
  export var rgba = new RegExp('rgba' + group4);
  export var hsl = new RegExp('hsl' + group3);
  export var hsla = new RegExp('hsla' + group4);
}

namespace colorKeywords {
  export var svg = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    gold: '#ffd700',
    goldenrod: '#daa520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavender: '#e6e6fa',
    lavenderblush: '#fff0f5',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32'
  };
  
  export var html4 = {
    aqua:    '#00ffff',
    black:   '#000000',
    blue:    '#0000ff',
    fuchsia: '#ff00ff',
    gray:    '#808080',
    green:   '#008000',
    lime:    '#00ff00',
    maroon:  '#800000',
    navy:    '#000080',
    olive:   '#808000',
    purple:  '#800080',
    red:     '#ff0000',
    silver:  '#c0c0c0',
    teal:    '#008080',
    white:   '#ffffff',
    yellow:  '#ffff00'
  };
  
  export var css1 = [
    'aqua', 'black', 'blue', 'fuchsia',
    'gray', 'green', 'lime', 'maroon',
    'navy', 'olive', 'purple', 'red',
    'silver', 'teal', 'white', 'yellow'
  ];
  
  export var css2 = {
    aqua:    '#00ffff',
    black:   '#000000',
    blue:    '#0000ff',
    fuchsia: '#ff00ff',
    gray:    '#808080',
    green:   '#008000',
    lime:    '#00ff00',
    maroon:  '#800000',
    navy:    '#000080',
    olive:   '#808000',
    purple:  '#800080',
    red:     '#ff0000',
    silver:  '#c0c0c0',
    teal:    '#008080',
    white:   '#ffffff',
    yellow:  '#ffff00'
  };
  
  export var system = [
    'ActiveBorder',
    'ActiveCaption',
    'AppWorkspace',
    'Background',
    'ButtonFace',
    'ButtonHighlight',
    'ButtonShadow',
    'ButtonText',
    'CaptionText',
    'GrayText',
    'Highlight',
    'HighlightText',
    'InactiveBorder',
    'InactiveCaption',
    'InactiveCaptionText',
    'InfoBackground',
    'InfoText',
    'Menu',
    'MenuText',
    'Scrollbar',
    'ThreeDDarkShadow',
    'ThreeDFace',
    'ThreeDHighlight',
    'ThreeDLightShadow',
    'ThreeDShadow',
    'Window',
    'WindowFrame',
    'WindowText'
  ];
}

namespace parsers {
  export function legacy(input: string): SimpleColor { // 1
    if (input === '') { // 2
      return null; // error
    }
    input = input.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g, ''); // 3
    let lower = input.toLowerCase();
    if (lower === 'transparent') { // 4
      return null; // error
    }
    if (colorKeywords.svg.hasOwnProperty(lower)) { // 5
      return hex6(colorKeywords.svg[lower]);
    }
    let hex = hex3(input); // 6
    if (hex !== null) {
      return hex;
    }
    input = input.replace(/[^\x00-\uFFFF]/g, '00'); // 7
    input = input.slice(0, 128); // 8
    if (input.charAt(0) === '#') { // 9
      input = input.slice(1);
    }
    input = input.replace(/[^\dA-F]/gi, '0'); // 10
    while (input.length === 0 || input.length % 3 !== 0) { // 11
      input += '0';
    }
    let length = input.length / 3; // 12
    let components = input.match(new RegExp('.{' + length + '}', 'g'));
    if (length > 8) { // 13
      components = components.map(c => c.slice(-8));
      length = 8;
    }
    while (length > 2 && components.every(c => c.charAt(0) === '0')) { // 14
      components = components.map(c => c.slice(1));
      length--;
    }
    if (length > 2) { // 15
      components = components.map(c => c.slice(0, 2));
    }
    // NOTE: if this is modified to output a hexadecimal string, leading
    // zeros need to be prepended when components have only one character.
    return { // 16
      r: parseInt(components[0], 16), // 17
      g: parseInt(components[1], 16), // 18
      b: parseInt(components[2], 16) // 19
    }; // 20
  }
  
  
  // Simple color
  export function hex6(input: string): SimpleColor { // 1
    let matches = matchers.hex6.exec(input);
    if (!matches) { // 2, 3, 4
      return null; // error
    }
    return { // 5
      r: parseInt(matches[1], 16), // 6
      g: parseInt(matches[2], 16), // 7
      b: parseInt(matches[3], 16) // 8
    }; // 9
  }
  
  export function hex3(input: string): SimpleColor {
    let matches = matchers.hex3.exec(input);
    if (!matches) {
      return null;
    }
    return {
      r: 17 * parseInt(matches[1], 16),
      g: 17 * parseInt(matches[2], 16),
      b: 17 * parseInt(matches[3], 16)
    };
  }
  
  export function rgb(input: string): SimpleColor {
    let matches = matchers.rgb.exec(input);
    if (!matches) {
      return null;
    } 
    return {
      r: Math.floor(_cssNumber(matches[1], 0, 255)),
      g: Math.floor(_cssNumber(matches[2], 0, 255)),
      b: Math.floor(_cssNumber(matches[3], 0, 255))
    }
  }

  export function rgba(input: string): AlphaColor {
    let matches = matchers.rgba.exec(input);
    if (!matches) {
      return null;
    } 
    return {
      r: Math.floor(_cssNumber(matches[1], 0, 255)),
      g: Math.floor(_cssNumber(matches[2], 0, 255)),
      b: Math.floor(_cssNumber(matches[3], 0, 255)),
      a: _cssNumber(matches[4], 0, 1)
    }
  }
}

// Handles percentages, exponents, and clamps number to range
function _cssNumber(input: string, min: number, max: number): number {
  if (input.slice(-1) === '%') {
    input = input.slice(0, -1);
    return Math.min(Math.max((max - min) * parseFloat(input) / 100, min), max);
  }
  return Math.min(Math.max(parseFloat(input), min), max);
}


function _parseSRgbMethods(input: string): SimpleColor {
  let hex6 = parsers.hex6(input);
  if (hex6 !== null) {
    return hex6;
  }
  let hex3 = parsers.hex3(input);
  if (hex3 !== null) {
    return hex3;
  }
  let rgb = parsers.rgb(input);
  if (rgb !== null) {
    return rgb
  }
  return null;
}

// HTML4
// https://www.w3.org/TR/html401/types.html#h-6.5
function html4(input: string): SimpleColor {
  var lower = input.toLowerCase();
  if (colorKeywords.html4.hasOwnProperty(lower)) {
    input = colorKeywords.html4[lower];
  }
  return parsers.hex6(input);
}

// CSS 1
function parseCSS1Color(input: string): SimpleColor {
  if (colorKeywords.css1.indexOf(input.toLowerCase()) !== -1) {
    return null; // Named colors do not have specified RGB values (probably platform dependent)
  }
  return _parseSRgbMethods(input);
}

// CSS 2
function parseCSS2Color(input: string): SimpleColor {
  let lower = input.toLowerCase();
  if (colorKeywords.css2.hasOwnProperty(lower)) {
    return parsers.hex6(colorKeywords.css2[lower]);
  }
  if (colorKeywords.system.indexOf(lower) !== -1) {
    return null; // System colors are platform dependent and do not have specified RGB values
  }
  return _parseSRgbMethods(input);
}

// CSS 2.1
function parseCSS2_1Color(input: string): SimpleColor {
  if (input.toLowerCase() === 'orange') {
    return parsers.hex6('#ffa500');
  }
  return parseCSS2Color(input);
}

// CSS 3
function parseCSS3Color(input: string): SimpleColor {
  return;
}


namespace test {
  let legacyTests = [
    [null, ''], // 2
    ['#abc123', '  #abc123   '], // 3
    ['#ffffff', ' \t\n\f\r#ffffff'], // 3
    [null, 'transparent'], // 4
    [null, 'TrAnSpArEnT'], // 4
    ['#6495ed', 'cornflowerblue'], // 5
    ['#daa520', 'GoldenRod'], // 5
    ['#663399', 'rebeccapurple'], // 5
    ['#aabbcc', '#Abc'], // 6
    ['#119999', '#199'], // 6
    ['#a00b00', '#a\u{1F603}b\u{1f609}'], // 7
    ['#abc00d', '#abc\uD83D\uDE00d'], // 7
    ['#674523', '123456789ABCDEF'.repeat(10)], // 8
    ['#000110', '0001002'.repeat(20)], // 8
    ['#123456', '#123456'], // 9
    ['#123456', '123456'], // 9
    ['#ba0a0a', '#BANANA'], // 10
    ['#c00000', 'Chuck Norris'], // 10
    ['#000000', '#'], // 11
    ['#010203', '123'], // 11
    ['#123450', '#12345'], // 11
    ['#124570', '#1234567'], // 11
    ['#232323', '#123456789123456789123456789'], // 13
    ['#121212', '#A01234567A01234567A01234567'], // 13
    ['#123456', '#012034056'], // 14
    ['#012300', '#000100230000'], // 14
    ['#12ab45', '#123abc456'], // 15
    ['#014589', '#0123456789ab'], // 15
  ];
  
  function testCompare(input, expected) {
    let parsed = parsers.legacy(input);
    let hex = null;
    let rgb = null;
    if (parsed !== null) {
      hex = serializeSimpleColor(parsed);
      rgb = 'rgb(' + parsed.r + ', ' + parsed.g + ', ' + parsed.b + ')';
    }
  
    document.body.setAttribute('bgcolor', input);
    let bgcolor = getComputedStyle(document.body, null).backgroundColor;
  
    if (hex !== expected) {
      console.error(input, ': Expected', expected, 'but got', hex);
    }
    if (rgb !== bgcolor) {
      console.error(input, ': Browser rendered', bgcolor, 'but got', rgb);
    }
  }
  
  console.log('\n\nTests:');
  for (let test of legacyTests) {
    testCompare(test[1], test[0]);
  }
}

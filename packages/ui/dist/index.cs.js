'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var Svg = require('react-native-svg');
var Svg__default = _interopDefault(Svg);
var styled = _interopDefault(require('styled-components/native'));

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  justify-content: center;\n  border-radius: 20px;\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var ButtonContainer = styled.TouchableOpacity(_templateObject());
var Button = function Button(_ref) {
  var children = _ref.children,
      style = _ref.style;
  return React.createElement(ButtonContainer, {
    style: style
  }, React.createElement(Svg__default, {
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  }, React.createElement(Svg.Defs, null, React.createElement(Svg.LinearGradient, {
    x1: "5.67655342%",
    y1: "50.8049907%",
    x2: "103.849473%",
    y2: "48.6205593%",
    id: "grad"
  }, React.createElement(Svg.Stop, {
    stopColor: "#FF8C2B",
    offset: "0%"
  }), React.createElement(Svg.Stop, {
    stopColor: "#FF6322",
    offset: "100%"
  }))), React.createElement(Svg.Rect, {
    width: "100%",
    height: "100%",
    fill: "url(#grad)"
  })), children);
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n  background-color: transparent;\n  padding: ", "\n  margin: ", "\n  text-transform: ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Label = styled.Text(_templateObject$1(), function (_ref) {
  var font = _ref.font;
  return font ? font : 'Montserrat';
}, function (_ref2) {
  var size = _ref2.size;
  return size ? size : 16;
}, function (_ref3) {
  var color = _ref3.color;
  return color ? color : 'black';
}, function (_ref4) {
  var padding = _ref4.padding;
  return padding ? padding : '0';
}, function (_ref5) {
  var margin = _ref5.margin;
  return margin ? margin : '0';
}, function (_ref6) {
  var transform = _ref6.transform;
  return transform ? transform : 'none';
});

exports.Button = Button;
exports.Label = Label;

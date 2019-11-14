'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var Svg = require('react-native-svg');
var Svg__default = _interopDefault(Svg);
var styled = _interopDefault(require('styled-components/native'));
var Icon = _interopDefault(require('react-native-vector-icons/Ionicons'));
var reactNative = require('react-native');

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
      style = _ref.style,
      onPress = _ref.onPress;
  return React.createElement(ButtonContainer, {
    style: style,
    onPress: onPress
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
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n  background-color: transparent;\n  padding: ", "\n  margin: ", "\n  text-align: ", "\n  text-transform: ", ";\n"]);

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
  var align = _ref6.align;
  return align ? align : 'left';
}, function (_ref7) {
  var transform = _ref7.transform;
  return transform ? transform : 'none';
});

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: ", ";\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Row = styled.View(_templateObject$2(), function (_ref) {
  var m = _ref.m;
  return m ? m : '0';
});
var LabelIcon = function LabelIcon(_ref2) {
  var icon = _ref2.icon,
      color = _ref2.color,
      font = _ref2.font,
      size = _ref2.size,
      margin = _ref2.margin,
      iconSize = _ref2.iconSize,
      transform = _ref2.transform,
      children = _ref2.children;
  return React.createElement(Row, {
    m: margin
  }, React.createElement(Icon, {
    size: iconSize || size,
    name: icon,
    color: color
  }), React.createElement(Label, {
    color: color,
    font: font,
    size: size,
    transform: transform,
    margin: "0 0 0 8px"
  }, children));
};

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\npadding: 14px;\nfont-family: Montserrat\nfont-size: 16px;\ncolor: #979797;\nborder: solid 1px #E0E0E0;\nborder-radius: 3px;\nbackground-color: white;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var TextField = styled.TextInput(_templateObject$3());

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 20px 20px 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: row;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  border-radius: 4px;\n  overflow: hidden;\n  width: 100%;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper = styled.TouchableOpacity(_templateObject$4());
var Row$1 = styled.View(_templateObject2());
var InfoWrapper = styled.View(_templateObject3());
var RecipeCard = function RecipeCard(_ref) {
  var image = _ref.image,
      title = _ref.title,
      category = _ref.category,
      infos = _ref.infos,
      onPress = _ref.onPress,
      style = _ref.style;
  return React.createElement(Wrapper, {
    onPress: onPress,
    style: style
  }, React.createElement(reactNative.Image, {
    source: {
      uri: image
    },
    style: {
      width: '100%',
      height: 128
    },
    resizeMode: "cover"
  }), React.createElement(InfoWrapper, null, React.createElement(Label, {
    color: "#9E9E9E",
    font: "Montserrat",
    size: 13,
    transform: "uppercase",
    margin: "10px 0 6px 0"
  }, category), React.createElement(Label, {
    color: "#333333",
    font: "Montserrat-Medium",
    size: 20,
    transform: "uppercase",
    margin: "0 0 12px 0"
  }, title), React.createElement(Row$1, null, infos.map(function (info) {
    return React.createElement(LabelIcon, {
      key: info.icon,
      icon: info.icon,
      font: "Montserrat-Light",
      size: 14,
      iconSize: 15,
      color: "#979797",
      transform: "capitalize",
      margin: "0 18px 0 0"
    }, info.label);
  }))));
};

var Logo = function Logo(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'white' : _ref$color;
  return React.createElement(Svg__default, {
    width: "141px",
    height: "29px",
    viewBox: "0 0 141 29"
  }, React.createElement(Svg.G, {
    id: "Page-1",
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  }, React.createElement(Svg.G, {
    id: "Log-In-&-Sign-Up",
    transform: "translate(-117.000000, -166.000000)",
    fill: color
  }, React.createElement(Svg.Path, {
    d: "M117.53,166.96 L138.49,166.96 L138.45,172.8 L124.85,172.8 L124.85,179.04 L137.41,179.04 L137.41,184.88 L124.85,184.88 L124.85,195 L117.53,195 L117.53,166.96 Z M144.31,166.96 L151.63,166.96 L151.63,188.76 L163.51,188.76 L163.51,195 L144.31,195 L144.31,166.96 Z M190.05,195 L188.13,190.04 L176.01,190.04 L174.05,195 L166.53,195 L178.57,166.96 L186.09,166.96 L197.85,195 L190.05,195 Z M178.21,184.44 L185.97,184.44 L182.13,174.44 L178.21,184.44 Z M197.87,166.96 L205.75,166.96 L212.75,187.24 L219.79,166.96 L227.31,166.96 L216.35,195 L208.75,195 L197.87,166.96 Z M249.29,195 L245.21,187.24 L239.77,187.24 L239.77,195 L232.45,195 L232.45,166.96 L245.05,166.96 C248.756685,166.96 251.62999,167.819991 253.67,169.54 C255.71001,171.260009 256.73,173.679984 256.73,176.8 C256.73,178.906677 256.303338,180.726659 255.45,182.26 C254.596662,183.793341 253.356675,184.986662 251.73,185.84 L257.57,195 L249.29,195 Z M239.77,181.4 L245.09,181.4 C246.583341,181.4 247.736663,181.02667 248.55,180.28 C249.363337,179.53333 249.77,178.45334 249.77,177.04 C249.77,175.679993 249.363337,174.633337 248.55,173.9 C247.736663,173.166663 246.583341,172.8 245.09,172.8 L239.77,172.8 L239.77,181.4 Z",
    id: "Flavr_logo"
  }))));
};

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  padding: ", ";\n  margin: ", ";\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var Row$2 = styled.View(_templateObject$5(), function (_ref) {
  var flex = _ref.flex;
  return flex ? flex : 'none';
}, function (_ref2) {
  var justifyContent = _ref2.justifyContent;
  return justifyContent ? justifyContent : 'flex-start';
}, function (_ref3) {
  var alignItems = _ref3.alignItems;
  return alignItems ? alignItems : 'flex-start';
}, function (_ref4) {
  var pad = _ref4.pad;
  return pad ? pad : '0';
}, function (_ref5) {
  var marg = _ref5.marg;
  return marg ? marg : '0';
});

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  padding: ", ";\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var Column = styled.View(_templateObject$6(), function (_ref) {
  var flex = _ref.flex;
  return flex ? flex : 'none';
}, function (_ref2) {
  var justifyContent = _ref2.justifyContent;
  return justifyContent ? justifyContent : 'flex-start';
}, function (_ref3) {
  var alignItems = _ref3.alignItems;
  return alignItems ? alignItems : 'flex-start';
}, function (_ref4) {
  var pad = _ref4.pad;
  return pad ? pad : '0';
});

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  padding: ", ";\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled.View(_templateObject$7(), function (_ref) {
  var gutter = _ref.gutter;
  return "0 ".concat(gutter, "px");
});

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  min-width: 10px;\n  min-height: 10px;\n  background-color: #ff8c2b;\n  border-radius: 20px;\n  margin-right: 14px;\n  align-items: center;\n  justify-content: center;\n  padding: ", ";\n  margin-top: ", ";\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var Bullet = styled.View(_templateObject$8(), function (_ref) {
  var index = _ref.index;
  return index ? '2px' : 0;
}, function (_ref2) {
  var index = _ref2.index;
  return index ? 0 : '5px';
});
var ListItem = function ListItem(_ref3) {
  var children = _ref3.children,
      index = _ref3.index,
      color = _ref3.color,
      margin = _ref3.margin;
  return React.createElement(Row$2, {
    marg: margin
  }, React.createElement(Bullet, {
    index: index
  }, index !== undefined && React.createElement(Label, {
    size: 11,
    align: "center",
    style: {
      width: 13,
      height: 13,
      lineHeight: 13
    },
    color: "white",
    font: "Montserrat-Medium"
  }, index)), React.createElement(Label, {
    size: 16,
    color: color || 'black',
    style: {
      flex: 1
    }
  }, children));
};

var RecipeDetailHeader = function RecipeDetailHeader(_ref) {
  var image = _ref.image,
      title = _ref.title,
      category = _ref.category,
      infos = _ref.infos,
      children = _ref.children,
      onPress = _ref.onPress;
  return React.createElement(Column, {
    alignItems: "center"
  }, React.createElement(reactNative.ImageBackground, {
    source: {
      uri: image
    },
    style: {
      width: '100%',
      height: 192
    }
  }, React.createElement(reactNative.TouchableWithoutFeedback, {
    onPress: onPress
  }, children)), React.createElement(Label, {
    color: "#9E9E9E",
    font: "Montserrat",
    size: 13,
    transform: "uppercase",
    margin: "10px 0 6px 0"
  }, category), React.createElement(Label, {
    color: "#333333",
    font: "Montserrat-Medium",
    size: 24,
    transform: "uppercase",
    margin: "0 0 18px 0"
  }, title), React.createElement(Row$2, {
    justifyContent: "space-between",
    pad: "0 20px",
    style: {
      width: '100%'
    }
  }, infos.map(function (info) {
    return React.createElement(LabelIcon, {
      key: info.icon,
      icon: info.icon,
      font: "Montserrat-Light",
      size: 16,
      iconSize: 18,
      color: "#979797",
      transform: "capitalize"
    }, info.label);
  })));
};

exports.Button = Button;
exports.Column = Column;
exports.Container = Container;
exports.Label = Label;
exports.LabelIcon = LabelIcon;
exports.ListItem = ListItem;
exports.Logo = Logo;
exports.RecipeCard = RecipeCard;
exports.RecipeDetailHeader = RecipeDetailHeader;
exports.Row = Row$2;
exports.TextField = TextField;

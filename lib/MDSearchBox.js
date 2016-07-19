'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MDSearchBox = require('./MDSearchBox.css');

var _MDSearchBox2 = _interopRequireDefault(_MDSearchBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MDSearchBox = function (_Component) {
  _inherits(MDSearchBox, _Component);

  function MDSearchBox(props) {
    _classCallCheck(this, MDSearchBox);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MDSearchBox).call(this, props));

    _this.state = { text: _this.props.text };
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(MDSearchBox, [{
    key: 'onChange',
    value: function onChange(e) {
      e.preventDefault();
      var text = this.refs.searchbox.value;
      this.setState({ text: text });
      this.props.onChange(text);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var width = _props.width;
      var height = _props.height;

      var inputOptionalProps = !!this.props.text ? { value: this.props.text } : {};
      var style = { width: width, height: height };
      return _react2.default.createElement(
        'div',
        { className: _MDSearchBox2.default.container, style: style },
        _react2.default.createElement(
          'div',
          { className: _MDSearchBox2.default.searchbox },
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('i', { className: 'fa fa-search' })
          ),
          _react2.default.createElement('input', _extends({
            type: 'searchbox',
            id: 'searchbox',
            ref: 'searchbox',
            placeholder: '搜索',
            onChange: this.onChange,
            className: _MDSearchBox2.default.input
          }, inputOptionalProps))
        )
      );
    }
  }]);

  return MDSearchBox;
}(_react.Component);

MDSearchBox.propTypes = {
  text: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  width: _react.PropTypes.number,
  height: _react.PropTypes.number
};

MDSearchBox.defaultProps = {
  text: ''
};

exports.default = MDSearchBox;
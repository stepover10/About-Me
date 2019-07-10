(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/pages/home/Home.js":
/*!********************************!*\
  !*** ./src/pages/home/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home(props, context) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props, context));
    _this.state = _this.context.data || window.__INITIAL_STATE__ || {
      items: []
    };
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchList();
    }
  }, {
    key: "fetchList",
    value: function fetchList() {
      var _this2 = this;

      fetch('http://jsonplaceholder.typicode.com/users').then(function (res) {
        return res.json();
      }).then(function (data) {
        _this2.setState({
          items: data
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.state.items.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: item.id
        }, item.name);
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS9Ib21lLmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImNvbnRleHQiLCJzdGF0ZSIsImRhdGEiLCJ3aW5kb3ciLCJfX0lOSVRJQUxfU1RBVEVfXyIsIml0ZW1zIiwiZmV0Y2hMaXN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInNldFN0YXRlIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaXRlbSIsImlkIiwibmFtZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFcUJBLEk7Ozs7O0FBQ25CLGdCQUFZQyxLQUFaLEVBQW1CQyxPQUFuQixFQUE0QjtBQUFBOztBQUFBOztBQUMxQiw4RUFBTUQsS0FBTixFQUFhQyxPQUFiO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLE1BQUtELE9BQUwsQ0FBYUUsSUFBYixJQUFxQkMsTUFBTSxDQUFDQyxpQkFBNUIsSUFBaUQ7QUFDNURDLFdBQUssRUFBRTtBQURxRCxLQUE5RDtBQUYwQjtBQUszQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0MsU0FBTDtBQUNEOzs7Z0NBRVc7QUFBQTs7QUFDVkMsV0FBSyxDQUFDLDJDQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUFDLEdBQUcsRUFBSTtBQUNYLGVBQU9BLEdBQUcsQ0FBQ0MsSUFBSixFQUFQO0FBQ0QsT0FISCxFQUlHRixJQUpILENBSVEsVUFBQU4sSUFBSSxFQUFJO0FBQ1osY0FBSSxDQUFDUyxRQUFMLENBQWM7QUFDWk4sZUFBSyxFQUFFSDtBQURLLFNBQWQ7QUFHRCxPQVJILEVBU0dVLEtBVEgsQ0FTUyxVQUFBQyxHQUFHLEVBQUk7QUFDWkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxPQVhIO0FBWUQ7Ozs2QkFFUTtBQUNQLGFBQ0UsdUVBQ0csS0FBS1osS0FBTCxDQUFXSSxLQUFYLENBQWlCVyxHQUFqQixDQUFxQixVQUFBQyxJQUFJLEVBQUk7QUFDNUIsZUFBTztBQUFJLGFBQUcsRUFBRUEsSUFBSSxDQUFDQztBQUFkLFdBQW1CRCxJQUFJLENBQUNFLElBQXhCLENBQVA7QUFDRCxPQUZBLENBREgsQ0FERjtBQU9EOzs7O0VBbkMrQkMsK0MiLCJmaWxlIjoiMS8xLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5jb250ZXh0LmRhdGEgfHwgd2luZG93Ll9fSU5JVElBTF9TVEFURV9fIHx8IHsgXG4gICAgICBpdGVtczogW10gXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hMaXN0KCk7XG4gIH1cblxuICBmZXRjaExpc3QoKSB7XG4gICAgZmV0Y2goJ2h0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpdGVtczogZGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dWw+XG4gICAgICAgIHt0aGlzLnN0YXRlLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gPGxpIGtleT17aXRlbS5pZH0+e2l0ZW0ubmFtZX08L2xpPjtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9
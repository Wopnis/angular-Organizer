(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto&display=swap\");\n/* You can add global styles to this file, and also import other style files */\n:root {\n  --primary-color: #dc3545;\n  --dark-color: #333333;\n  --light-color: #f4f4f4;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1rem;\n  line-height: 1.6;\n  background-image: url(\"https://cdn4.vectorstock.com/i/1000x1000/89/98/spring-and-summer-watercolor-ocean-background-vector-19998998.jpg\");\n  background-size: cover;\n  color: #333;\n}\na {\n  color: var(--primary-color);\n  text-decoration: none;\n}\na:hover {\n  color: #666;\n}\nul {\n  list-style: none;\n}\ninput {\n  display: block;\n  width: 100%;\n  padding: 0.4rem;\n  font-size: 1.2rem;\n  border: 1px solid #ccc;\n  outline: none;\n  margin-bottom: 0.5rem;\n}\n.container {\n  max-width: 1100px;\n  margin: auto;\n  overflow: hidden;\n  padding: 0 2rem;\n}\ntable th {\n  background: var(--light-color);\n}\n.btn {\n  display: inline-block;\n  background: var(--light-color);\n  color: #333;\n  padding: 0.4rem 1.3rem;\n  font-size: 1rem;\n  border: none;\n  cursor: pointer;\n  margin-right: 0.5rem;\n  -webkit-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n  outline: none;\n}\n.btn:disabled {\n  background: var(--dark-color);\n  color: #fff;\n  cursor: not-allowed;\n}\n.btn:hover:not(:disabled) {\n  opacity: 0.8;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-primary {\n  background: var(--primary-color);\n  color: #fff;\n}\n.text-center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9FOlxcV0VCV09SS1xcVFJBSU5FRVNISVBcXENPREVGT0xERVJcXEFOR1VMQVJcXG9yZ2FuaXplclxcb3JnYW5pemVyL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVRLDBFQUFBO0FBRlIsOEVBQUE7QUFJQTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ0RGO0FESUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDREY7QURJQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEseUlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNGRjtBRE1BO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtBQ0hGO0FES0U7RUFDRSxXQUFBO0FDSEo7QURPQTtFQUNFLGdCQUFBO0FDSkY7QURRQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUNMRjtBRFFBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDTEY7QURRQTtFQUNFLDhCQUFBO0FDTEY7QURRQTtFQUNFLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7RUFDQSxhQUFBO0FDTEY7QURPRTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDTEo7QURRRTtFQUNFLFlBQUE7QUNOSjtBRFVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUNQRjtBRFVBO0VBQ0UsZ0NBQUE7RUFDQSxXQUFBO0FDUEY7QURVQTtFQUNFLGtCQUFBO0FDUEYiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XHJcblxyXG46cm9vdCB7XHJcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZGMzNTQ1O1xyXG4gIC0tZGFyay1jb2xvcjogIzMzMzMzMztcclxuICAtLWxpZ2h0LWNvbG9yOiAjZjRmNGY0O1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgLy9iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vY2RuNC52ZWN0b3JzdG9jay5jb20vaS8xMDAweDEwMDAvODkvOTgvc3ByaW5nLWFuZC1zdW1tZXItd2F0ZXJjb2xvci1vY2Vhbi1iYWNrZ3JvdW5kLXZlY3Rvci0xOTk5ODk5OC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBjb2xvcjogIzMzMztcclxuXHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuXHJcbmlucHV0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAuNHJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTEwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDAgMnJlbTtcclxufVxyXG5cclxudGFibGUgdGgge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWNvbG9yKTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWNvbG9yKTtcclxuICBjb2xvcjogIzMzMztcclxuICBwYWRkaW5nOiAuNHJlbSAxLjNyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcclxuICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstY29sb3IpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxuXHJcbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICBvcGFjaXR5OiAuODtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tYmxvY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXCIpO1xuOnJvb3Qge1xuICAtLXByaW1hcnktY29sb3I6ICNkYzM1NDU7XG4gIC0tZGFyay1jb2xvcjogIzMzMzMzMztcbiAgLS1saWdodC1jb2xvcjogI2Y0ZjRmNDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vY2RuNC52ZWN0b3JzdG9jay5jb20vaS8xMDAweDEwMDAvODkvOTgvc3ByaW5nLWFuZC1zdW1tZXItd2F0ZXJjb2xvci1vY2Vhbi1iYWNrZ3JvdW5kLXZlY3Rvci0xOTk5ODk5OC5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG5hIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTEwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDAgMnJlbTtcbn1cblxudGFibGUgdGgge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgY29sb3I6ICMzMzM7XG4gIHBhZGRpbmc6IDAuNHJlbSAxLjNyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uYnRuOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1jb2xvcik7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLmJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmJ0bi1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\WEBWORK\TRAINEESHIP\CODEFOLDER\ANGULAR\organizer\organizer\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map
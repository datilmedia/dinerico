(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

'use strict';
module.exports = React.createClass({displayName: 'exports',
  getDefaultProps: function () {
    return {
      summary: "Resumen"
    };
  },
  getInitialState: function () {
    return {
      message : 'Always a pleasure scaffolding your apps.'
    };
  },
  reverse: function (event) {
    this.setState({
      message : this.state.message.split('').reverse().join('')
    });
  },
  render: function () {
    return (
      /* jshint ignore:start */
      React.DOM.div({className: "row"}, 
        React.DOM.div({className: "col-md-4 left-menu"}, 
          React.DOM.h2({className: "welcome"}, "¡Bienvenido!"), 
          React.DOM.hr(null), 
          React.DOM.p(null, "¿Qué ", React.DOM.span({className: "accent"}, "transacción"), " desea realizar?"), 
          React.DOM.div({className: "transactions"}, 
            React.DOM.a({href: "#deposito", className: "btn btn-default btn-lg btn-block"}, "Depósito"), 
            React.DOM.a({href: "#", className: "btn btn-default btn-lg btn-block"}, "Retiro"), 
            React.DOM.a({className: "btn btn-default btn-lg btn-block"}, "Envío")
          )
        ), 
        React.DOM.div({className: "col-md-8 main-content"}, 
          React.DOM.div({className: "summary"}, 
            React.DOM.h3({className: "title"}, this.props.summary), 
            React.DOM.div({className: "well"}, 
              React.DOM.div({className: "amount"}, "$12,000.55")
            ), 
            React.DOM.div({id: "logo-bce"}
            )
          )
        )
      )
      /* jshint ignore:end */
    );
  }
});


},{}],2:[function(require,module,exports){
/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

'use strict';

module.exports = React.createClass({displayName: 'exports',
  getDefaultProps: function () {
    return {
    };
  },
  render: function () {
    return (
      /*jshint ignore:start */
      React.DOM.div({className: "row"}, 
        React.DOM.form({className: "col-md-6 col-md-offset-3"}, 
          React.DOM.p({className: "instructions"}, 
            "Escriba los datos del ", React.DOM.strong(null, "destinatario")
          ), 
          React.DOM.hr(null), 
          React.DOM.div({className: "form-group"}, 
            React.DOM.label({htmlFor: "beneficiary"}, "Número de teléfono celular"), 
            React.DOM.input({type: "tel", className: "form-control", name: "recipient", id: "beneficiary"})
          ), 
          React.DOM.div({className: "form-group"}, 
            React.DOM.label({htmlFor: ""}, "Cédula"), 
            React.DOM.input({type: "text", name: "id", className: "form-control"})
          ), 
          React.DOM.div({className: "form-group"}, 
            React.DOM.label({htmlFor: ""}, "Valor"), 
            React.DOM.input({type: "text", name: "amount", className: "form-control"})
          ), 
          React.DOM.div({className: "form-buttons centered"}, 
            React.DOM.a({href: "#confirmar-deposito", className: "btn btn-primary btn-lg"}, "Depositar")
          )
        )
      )
      /*jshint ignore:end */
    );
  }
});


},{}],3:[function(require,module,exports){
/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

'use strict';

module.exports = React.createClass({displayName: 'exports',
  getDefaultProps: function () {
    return {
    };
  },
  render: function () {
    return (
      /*jshint ignore:start */
      React.DOM.div({className: "row nested"}, 
        React.DOM.div({className: "col-md-6 col-md-offset-3"}, 
            React.DOM.p({className: "instructions"}, "Confirme los datos del depósito"), 
            React.DOM.hr(null), 
            React.DOM.div({className: "form-group"}, 
              React.DOM.label({htmlFor: "beneficiary"}, "Destinatario:"), 
              React.DOM.p(null, "Joseph León Cando")
            ), 
            React.DOM.div({className: "form-group"}, 
              React.DOM.label({htmlFor: ""}, "Número de teléfono celular:"), 
              React.DOM.p(null, "0939125217")
            ), 
            React.DOM.div({className: "form-group"}, 
              React.DOM.label({htmlFor: ""}, "Número de cédula:"), 
              React.DOM.p(null, "0929128423")
            ), 
            React.DOM.div({className: "form-group"}, 
              React.DOM.label({htmlFor: ""}, "VALOR:"), 
              React.DOM.p(null, "$350.00")
            ), 
            React.DOM.hr(null), 
            React.DOM.div({className: "form-group", id: "label-pin"}, 
              React.DOM.label({htmlFor: "pin"}, "Introduzca el PIN:")
            ), 
            React.DOM.div({className: "row"}, 
              React.DOM.div({className: "col-md-7 col-sm-12"}, 
                React.DOM.div({className: "form-group"}, 
                  React.DOM.input({type: "text", className: "form-control input-lg", id: "pin"})
                )
              ), 
              React.DOM.div({className: "col-md-5 col-sm-12"}, 
                React.DOM.a({href: "#resultado", className: "btn btn-primary btn-lg btn-block", id: "confirm"}, "Confirmar")
              )
            ), 
            React.DOM.br(null)
        )
      )
      /*jshint ignore:end */
    );
  }
});


},{}],4:[function(require,module,exports){
/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */
'use strict';

dinerico.Views = dinerico.Views || {};

var app = require('./app.jsx');
var deposit = require('./deposit.jsx');
var appnav = require('./nav.jsx');
var result = require('./result.jsx');
var message = require('./message.jsx');
var doDeposit = require('./doDeposit.jsx');

// dinerico.Views.deposit = deposit;

dinerico.Views.nav = function() {
  return React.renderComponent(
    /* jshint ignore:start */
    appnav(null),
    document.getElementById('app-nav')
    /* jshint ignore:end */
  );
}

dinerico.Views.app = function() {
  React.renderComponent(
    /* jshint ignore:start */
    app(null),
    document.getElementById('app')
    /* jshint ignore:end */
  );
}

dinerico.Views.deposit = function() {
  React.renderComponent(
    /* jshint ignore:start */
    deposit(null),
    document.getElementById('app')
    /* jshint ignore:end */
  );
}

dinerico.Views.result = function() {
  return React.renderComponent(
    /* jshint ignore:start */
    result(null),
    document.getElementById('app')
    /* jshint ignore:end */
  );
}

dinerico.Views.message = function(domNode) {
  return React.renderComponent(
    /* jshint ignore:start */
    message(null),
    domNode
    /* jshint ignore:end */
  );
}

dinerico.Views.doDeposit = function() {
  React.renderComponent(
    /* jshint ignore:start */
    doDeposit(null),
    document.getElementById('app')
    /* jshint ignore:end */
  );
}
},{"./app.jsx":1,"./deposit.jsx":2,"./doDeposit.jsx":3,"./message.jsx":5,"./nav.jsx":6,"./result.jsx":7}],5:[function(require,module,exports){
/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

'use strict';
module.exports = React.createClass({displayName: 'exports',
  getDefaultProps: function() {
    return {
      title: "Correo enviado",
      icon: "icon-email-sent",
      message: "¡Que tenga un buen día!"
    }
  },
  render: function () {
    return (
      /*jshint ignore:start */
      React.DOM.div({className: "row app-msg"}, 
        React.DOM.div({className: "col-md-8 col-md-offset-2"}, 
          React.DOM.div({className: "message"}, 
            React.DOM.hr(null), 
            React.DOM.div({className: this.props.icon}, " "), 
            React.DOM.h1({className: "title"}, this.props.title), 
            React.DOM.hr(null), 
            React.DOM.p({className: "submessage"}, 
              this.props.message
            )
          ), 
          React.DOM.div({className: "buttons", style: {textAlign: "center"}}, 
            React.DOM.a({href: "#", className: "btn btn-default btn-lg"}, "Inicio")
          )
        )
      )
      /*jshint ignore:end */
    );
  }
});


},{}],6:[function(require,module,exports){
/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

'use strict';
module.exports = React.createClass({displayName: 'exports',
  getDefaultProps: function () {
    return {
      hidden: true
    };
  },
  back: function (e) {
    e.preventDefault();
    window.history.back();
  },
  render: function () {
    var cx = React.addons.classSet;
    var classes = cx({
      'btn': true,
      'btn-default': true,
      'hidden': this.props.hidden
    });
    return (
      /*jshint ignore:start */
      React.DOM.a({href: "", className: classes, onClick: this.back}, 
        React.DOM.span({className: "glyphicon glyphicon-arrow-left"})
      )
      /*jshint ignore:end */
    );
  }
});


},{}],7:[function(require,module,exports){
/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */

'use strict';
module.exports = React.createClass({displayName: 'exports',
  getDefaultProps: function() {
    return {
      title: "¡Transacción exitosa!",
      resultIcon: "icon-success",
      prompt: "¿Desea generar un comprobante de depósito?"
    }
  },
  send: function(e) {
    e.preventDefault();
    var $btn = $(this.refs.sendBtn.getDOMNode());
    $btn.button("loading");
    setTimeout(function() {
      $btn.button("reset");
      window.location = $btn.attr("href");
    }, 2000);
  },
  render: function () {
    return (
      /*jshint ignore:start */
      React.DOM.div({className: "row app-msg"}, 
        React.DOM.div({className: "col-md-8 col-md-offset-2"}, 
          React.DOM.div({className: "message"}, 
            React.DOM.hr(null), 
            React.DOM.div({className: this.props.resultIcon}, " "), 
            React.DOM.h1({className: "title"}, this.props.title), 
            React.DOM.hr(null), 
            React.DOM.p({className: "prompt"}, 
              this.props.prompt
            )
          ), 
          React.DOM.div({className: "row nested"}, 
            React.DOM.div({className: "col-md-6"}, 
              React.DOM.div({className: "form-group"}, 
                React.DOM.label(null, "Correo electrónico"), 
                React.DOM.input({className: "form-control input-lg", type: "email"})
              )
            ), 
            React.DOM.div({className: "col-md-3 buttons"}, 
              React.DOM.a({href: "#recibo-enviado", 
                 ref: "sendBtn", 
                 className: "btn btn-primary btn-lg btn-block", 
                 'data-loading-text': "Enviando", 
                 onClick: this.send}, 
                "Enviar"
              ), "   "
            ), 
            React.DOM.div({className: "col-md-3 buttons"}, 
              React.DOM.a({href: "", className: "btn btn-default btn-lg btn-block"}, "¡No gracias!")
            )
          )
        )
      )
      /*jshint ignore:end */
    );
  }
});


},{}]},{},[4]);

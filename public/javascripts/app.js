(function(/*! Brunch !*/) {
  if (!this.require) {
    var modules = {}, cache = {}, require = function(name, root) {
      var module = cache[name], path = expand(root, name), fn;
      if (module) {
        return module;
      } else if (fn = modules[path] || modules[path = expand(path, './index')]) {
        module = {id: name, exports: {}};
        try {
          cache[name] = module.exports;
          fn(module.exports, function(name) {
            return require(name, dirname(path));
          }, module);
          return cache[name] = module.exports;
        } catch (err) {
          delete cache[name];
          throw err;
        }
      } else {
        throw 'module \'' + name + '\' not found';
      }
    }, expand = function(root, name) {
      var results = [], parts, part;
      if (/^\.\.?(\/|$)/.test(name)) {
        parts = [root, name].join('/').split('/');
      } else {
        parts = name.split('/');
      }
      for (var i = 0, length = parts.length; i < length; i++) {
        part = parts[i];
        if (part == '..') {
          results.pop();
        } else if (part != '.' && part != '') {
          results.push(part);
        }
      }
      return results.join('/');
    }, dirname = function(path) {
      return path.split('/').slice(0, -1).join('/');
    };
    this.require = function(name) {
      return require(name, '');
    };
    this.require.brunch = true;
    this.require.define = function(bundle) {
      for (var key in bundle)
        modules[key] = bundle[key];
    };
  }
}).call(this);(this.require.define({
  "helpers": function(exports, require, module) {
    (function() {

  exports.BrunchApplication = (function() {

    function BrunchApplication() {
      var _this = this;
      jQuery(function() {
        _this.initialize(_this);
        return Backbone.history.start();
      });
    }

    BrunchApplication.prototype.initialize = function() {
      return null;
    };

    return BrunchApplication;

  })();

}).call(this);

  }
}));
(this.require.define({
  "initialize": function(exports, require, module) {
    (function() {
  var BrunchApplication, HomeView, MainRouter,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  BrunchApplication = require('helpers').BrunchApplication;

  MainRouter = require('routers/main_router').MainRouter;

  HomeView = require('views/home_view').HomeView;

  exports.Application = (function(_super) {

    __extends(Application, _super);

    function Application() {
      Application.__super__.constructor.apply(this, arguments);
    }

    Application.prototype.initialize = function() {
      this.router = new MainRouter;
      this.homeView = new HomeView().render();
      return this;
    };

    return Application;

  })(BrunchApplication);

  window.app = new exports.Application;

}).call(this);

  }
}));
(this.require.define({
  "models/formular": function(exports, require, module) {
    (function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  exports.Formular = (function(_super) {

    __extends(Formular, _super);

    function Formular() {
      Formular.__super__.constructor.apply(this, arguments);
    }

    Formular.prototype.initialize = function() {
      return this.mathMember = '(' + Object.getOwnPropertyNames(Math).join(')|(') + ')';
    };

    Formular.prototype.defaults = {
      formular: 'sin(x)'
    };

    Formular.prototype.setFormular = function(formular) {
      return this.set({
        formular: this.computeFormular(formular)
      });
    };

    Formular.prototype.computeFormular = function(formular) {
      return formular.replace(new RegExp(this.mathMember, 'g'), function(match) {
        return 'Math.' + match;
      });
    };

    return Formular;

  })(Backbone.Model);

}).call(this);

  }
}));
(this.require.define({
  "routers/main_router": function(exports, require, module) {
    (function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  exports.MainRouter = (function(_super) {

    __extends(MainRouter, _super);

    function MainRouter() {
      MainRouter.__super__.constructor.apply(this, arguments);
    }

    MainRouter.prototype.routes = {
      '': 'home'
    };

    MainRouter.prototype.home = function() {};

    return MainRouter;

  })(Backbone.Router);

}).call(this);

  }
}));
(this.require.define({
  "views/home_view": function(exports, require, module) {
    (function() {
  var FormularFactory,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  FormularFactory = require('views/factories/formular_factory').FormularFactory;

  exports.HomeView = (function(_super) {

    __extends(HomeView, _super);

    function HomeView() {
      this.render = __bind(this.render, this);
      HomeView.__super__.constructor.apply(this, arguments);
    }

    HomeView.prototype.tagName = 'div';

    HomeView.prototype.initialize = function() {
      this.factory = new FormularFactory;
      this.el = $('#inputs').on('click', 'button', this.render);
      return this;
    };

    HomeView.prototype.render = function() {
      this.factory.create(this.el.find('ul'));
      return this;
    };

    return HomeView;

  })(Backbone.View);

}).call(this);

  }
}));
(this.require.define({
  "views/factories/container": function(exports, require, module) {
    (function() {
  var Formular, FormularRenderer, InputView,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  InputView = require('views/inputs/input').InputView;

  FormularRenderer = require('views/renderer/formular').FormularRenderer;

  Formular = require('models/formular').Formular;

  exports.Container = (function(_super) {

    __extends(Container, _super);

    function Container() {
      Container.__super__.constructor.apply(this, arguments);
    }

    Container.prototype.initialize = function(options) {
      this.el = $(this.el).html(this.template);
      this.inputs = this.el.find('div');
      this.paper = options.paper;
      this.slider = options.slider;
      options.parent.append(this.el);
      return this.create();
    };

    Container.prototype.tagName = 'li';

    Container.prototype.template = '<div/>';

    Container.prototype.create = function() {
      var input, model, output;
      model = new Formular();
      output = new FormularRenderer(model, this.paper);
      return input = new InputView({
        model: model,
        parent: this.inputs,
        slider: this.slider
      });
    };

    return Container;

  })(Backbone.View);

}).call(this);

  }
}));
(this.require.define({
  "views/factories/formular_factory": function(exports, require, module) {
    (function() {
  var Container, Slider;

  Slider = require('views/widgets/slider').Slider;

  Container = require('views/factories/container').Container;

  exports.FormularFactory = (function() {

    function FormularFactory() {
      this.paper = Raphael('stage', 500, 500);
      this.slider = new Slider();
      this;
    }

    FormularFactory.prototype.create = function(parent) {
      new Container({
        slider: this.slider,
        parent: parent,
        paper: this.paper
      });
      return this;
    };

    return FormularFactory;

  })();

}).call(this);

  }
}));
(this.require.define({
  "views/inputs/input": function(exports, require, module) {
    (function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  exports.InputView = (function(_super) {

    __extends(InputView, _super);

    function InputView() {
      this.sliderCallback = __bind(this.sliderCallback, this);
      this.changeFormular = __bind(this.changeFormular, this);
      InputView.__super__.constructor.apply(this, arguments);
    }

    InputView.prototype.initialize = function(options) {
      $(options.parent).append(this.el);
      this.slider = options.slider;
      this.el = $(this.el);
      this.el.html(this.template);
      this.formularField = this.el.find('input');
      return this;
    };

    InputView.prototype.tagName = 'li';

    InputView.prototype.template = '<input> <button class="btn btn-small"><i class=" icon-remove\
"/></button>';

    InputView.prototype.events = {
      'keyup': 'changeFormular',
      'mouseup': 'changeFormular'
    };

    InputView.prototype.changeFormular = function(event) {
      this.model.setFormular(this.formularField.val());
      this.slider.show(this.formularField, this.sliderCallback);
      return this;
    };

    InputView.prototype.sliderCallback = function(value) {
      this.model.setFormular(value);
      return this.formularField.val(value);
    };

    return InputView;

  })(Backbone.View);

}).call(this);

  }
}));
(this.require.define({
  "views/renderer/formular": function(exports, require, module) {
    (function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  exports.FormularRenderer = (function() {

    function FormularRenderer(model, paper) {
      this.model = model;
      this.paper = paper;
      this.render = __bind(this.render, this);
      this.model.bind('change', this.render);
      this.set = this.paper.set();
      this;
    }

    FormularRenderer.prototype.render = function() {
      var path, point, x, _ref;
      if (this.path) this.path.remove();
      path = '';
      for (x = 0, _ref = this.paper.width; x <= _ref; x += 1) {
        point = this.createPoint(x);
        path += point;
      }
      this.path = this.paper.path(path);
      return this;
    };

    FormularRenderer.prototype.createPoint = function(x) {
      var y;
      y = this.calculateY(x);
      if (typeof y === 'number') {
        return "" + (x ? 'L' : 'M') + " " + x + " " + y;
      } else {
        return '';
      }
    };

    FormularRenderer.prototype.calculateY = function(x) {
      try {
        return eval(this.model.get('formular').replace('x', x));
      } catch (e) {
        return null;
      }
    };

    return FormularRenderer;

  })();

}).call(this);

  }
}));
(this.require.define({
  "views/widgets/slider": function(exports, require, module) {
    (function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  exports.Slider = (function(_super) {

    __extends(Slider, _super);

    function Slider() {
      this.calc = __bind(this.calc, this);
      Slider.__super__.constructor.apply(this, arguments);
    }

    Slider.prototype.events = {
      'change': 'calc'
    };

    Slider.prototype.className = 'tooltip top fade in';

    Slider.prototype.initialize = function() {
      this.el = $(this.el).html('<div class="tooltip-arrow"></div><div class="tooltip-inner"><input type="range"/></div>');
      this.helper = $('<div>').css({
        top: '-10000px',
        position: 'absolute'
      });
      $('body').append(this.el);
      $('body').append(this.helper);
      this.height = this.el.height();
      this.width = this.el.width();
      this.el.hide();
      return this.slider = $('input', this.el);
    };

    Slider.prototype.show = function(input, callback) {
      var value, width;
      this.callback = callback;
      value = this.initValues(input);
      input = $(input);
      if ($.isNumeric(value)) {
        width = this.helper.html(this.sub1).width() + input.position().left - this.width / 2 + 5;
        this.el.css({
          'top': input.position().top - this.height,
          'left': width
        }).show();
        return this.slider.val(value);
      } else {
        return this.el.hide();
      }
    };

    Slider.prototype.initValues = function(input) {
      var firstDigit, secondDigit, split, value,
        _this = this;
      value = input.val();
      firstDigit = secondDigit = '';
      split = input.get(0).selectionStart;
      this.sub1 = value.substring(0, split).replace(/\d*$/, function(match) {
        firstDigit = match;
        return '';
      });
      this.sub2 = value.substring(split).replace(/^\d*/, function(match) {
        secondDigit = match;
        return '';
      });
      return firstDigit + secondDigit;
    };

    Slider.prototype.hide = function() {
      return $(this.el).hide;
    };

    Slider.prototype.calc = function() {
      return this.callback(this.sub1 + this.slider.val() + this.sub2);
    };

    return Slider;

  })(Backbone.View);

}).call(this);

  }
}));

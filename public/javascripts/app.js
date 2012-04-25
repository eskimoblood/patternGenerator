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
  "views/inputs/color": function(exports, require, module) {
    (function() {
  var AbstractInput,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  AbstractInput = require('views/inputs/abstractInput').AbstractInput;

  exports.ColorView = (function(_super) {

    __extends(ColorView, _super);

    function ColorView() {
      ColorView.__super__.constructor.apply(this, arguments);
    }

    ColorView.prototype.initialize = function(options) {
      ColorView.__super__.initialize.call(this, options);
      return this.colorPicker = new jscolor.color(this.input.get(0), {});
    };

    ColorView.prototype.template = '<div class="input-prepend"><span class="add-on"><i/></span><input\
        /></div>';

    ColorView.prototype.events = {
      'change': 'change'
    };

    return ColorView;

  })(AbstractInput);

}).call(this);

  }
}));
(this.require.define({
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
      formular: 'sin(x)',
      stepSize: 1
    };

    Formular.prototype.setFormular = function(key, formular) {
      var set;
      set = {};
      set[key] = this.computeFormular(formular);
      this.set(set);
      return this.save();
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
      this.add = __bind(this.add, this);
      HomeView.__super__.constructor.apply(this, arguments);
    }

    HomeView.prototype.tagName = 'div';

    HomeView.prototype.initialize = function() {
      this.factory = new FormularFactory;
      return this.el = $('#inputs').on('click', '.icon-plus', this.add);
    };

    HomeView.prototype.add = function() {
      return this.factory.create(this.el.find('ul'));
    };

    return HomeView;

  })(Backbone.View);

}).call(this);

  }
}));
(this.require.define({
  "views/factories/container": function(exports, require, module) {
    (function() {
  var Composition, Formular, FormularLineRenderer, FormularRectRenderer, InputFactory,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  FormularLineRenderer = require('views/renderer/formular_line').FormularLineRenderer;

  FormularRectRenderer = require('views/renderer/formular_rect').FormularRectRenderer;

  InputFactory = require('views/factories/input_factory').InputFactory;

  Formular = require('models/formular').Formular;

  Composition = require('collections/composition').Composition;

  exports.Container = (function(_super) {

    __extends(Container, _super);

    function Container() {
      Container.__super__.constructor.apply(this, arguments);
    }

    Container.prototype.initialize = function(options) {
      var _this = this;
      this.el = $(this.el).html(this.template);
      this.inputs = this.el.find('div');
      this.paper = options.paper;
      this.inputFactory = new InputFactory;
      this.collection = new Composition;
      this.collection.fetch({
        success: function(coll) {
          return coll.each(function(model) {
            console.log(model);
            return _this.create(model);
          });
        }
      });
      return options.parent.append(this.el);
    };

    Container.prototype.tagName = 'li';

    Container.prototype.template = '<div/>';

    Container.prototype.create = function(model) {
      var output,
        _this = this;
      if (!model) {
        model = new Formular();
        this.collection.create(model);
      }
      output = new FormularRectRenderer(model, this.paper);
      return output.inputs.forEach(function(input) {
        return _this.inputFactory.create(input, {
          model: model,
          parent: _this.inputs
        });
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
  var Container, Save, Slider;

  Slider = require('views/widgets/slider').Slider;

  Container = require('views/factories/container').Container;

  Save = require('views/widgets/save').Save;

  exports.FormularFactory = (function() {

    function FormularFactory() {
      var save;
      this.paper = Raphael('stage', 500, 500);
      save = new Save(this.paper);
      this;
    }

    FormularFactory.prototype.create = function(parent) {
      new Container({
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
  "views/factories/input_factory": function(exports, require, module) {
    (function() {
  var ColorView, InputView, Range, Slider;

  InputView = require('views/inputs/input').InputView;

  ColorView = require('views/inputs/color').ColorView;

  Range = require('views/inputs/range').Range;

  Slider = require('views/widgets/slider').Slider;

  exports.InputFactory = (function() {

    function InputFactory() {
      console.log(this.inputs);
      this.slider = new Slider();
    }

    InputFactory.prototype.create = function(input, options) {
      options.slider = this.slider;
      options.label = input.label;
      options.key = input.key;
      options.size = input.size;
      return input = new this.inputs[input.type](options);
    };

    InputFactory.prototype.inputs = {
      'Input': InputView,
      'Range': Range,
      'Color': ColorView
    };

    return InputFactory;

  })();

}).call(this);

  }
}));
(this.require.define({
  "views/inputs/abstractInput": function(exports, require, module) {
    (function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  exports.AbstractInput = (function(_super) {

    __extends(AbstractInput, _super);

    function AbstractInput() {
      this.change = __bind(this.change, this);
      AbstractInput.__super__.constructor.apply(this, arguments);
    }

    AbstractInput.prototype.initialize = function(options) {
      this.el = $(this.el).html(this.template);
      this.input = this.el.find('input').addClass(options.size);
      this.input.val(options.model.get(options.key));
      $(options.parent).append(this.el);
      this.setLabel(options);
      this.setIcon(options);
      return this.key = options.key;
    };

    AbstractInput.prototype.template = '';

    AbstractInput.prototype.className = 'left';

    AbstractInput.prototype.events = {
      'keyup': 'change',
      'mouseup': 'change'
    };

    AbstractInput.prototype.change = function(event) {
      return this.model.setFormular(this.key, this.input.val());
    };

    AbstractInput.prototype.setLabel = function(options) {
      var cid, label;
      label = this.el.find('label');
      if (label) {
        cid = _.uniqueId('x');
        label.attr('for', cid);
        label.html(options.label);
        return this.input.attr('id', cid);
      }
    };

    AbstractInput.prototype.setIcon = function(options) {
      var icon;
      icon = this.el.find('i');
      if (icon) return icon.addClass(options.label);
    };

    return AbstractInput;

  })(Backbone.View);

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
      this.homeView = new HomeView().add();
      return this;
    };

    return Application;

  })(BrunchApplication);

  window.app = new exports.Application;

}).call(this);

  }
}));
(this.require.define({
  "views/inputs/input": function(exports, require, module) {
    (function() {
  var AbstractInput,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  AbstractInput = require('views/inputs/abstractInput').AbstractInput;

  exports.InputView = (function(_super) {

    __extends(InputView, _super);

    function InputView() {
      this.sliderCallback = __bind(this.sliderCallback, this);
      this.change = __bind(this.change, this);
      InputView.__super__.constructor.apply(this, arguments);
    }

    InputView.prototype.initialize = function(options) {
      InputView.__super__.initialize.call(this, options);
      this.slider = options.slider;
      return this;
    };

    InputView.prototype.template = '<div class="input-prepend"><span class="add-on"><i/></span><input/></div>';

    InputView.prototype.change = function(event) {
      InputView.__super__.change.call(this);
      return this.slider.show(this.input, this.sliderCallback);
    };

    InputView.prototype.sliderCallback = function(value) {
      this.model.setFormular(this.key, value);
      return this.input.val(value);
    };

    return InputView;

  })(AbstractInput);

}).call(this);

  }
}));
(this.require.define({
  "views/inputs/range": function(exports, require, module) {
    (function() {
  var AbstractInput,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  AbstractInput = require('views/inputs/abstractInput').AbstractInput;

  exports.Range = (function(_super) {

    __extends(Range, _super);

    function Range() {
      this.change = __bind(this.change, this);
      Range.__super__.constructor.apply(this, arguments);
    }

    Range.prototype.template = '<label class="control-label"/><div class="controls"><input type="range" max="100" min="1"></div>';

    Range.prototype.change = function(event) {
      var setting;
      setting = {};
      setting[this.key] = this.input.val();
      return this.model.set(setting);
    };

    return Range;

  })(AbstractInput);

}).call(this);

  }
}));
(this.require.define({
  "views/renderer/abstract_formular": function(exports, require, module) {
    (function() {

  exports.AbstractFormularRenderer = (function() {

    function AbstractFormularRenderer(model, paper) {
      this.model = model;
      this.paper = paper;
      this.model.bind('change', this.render);
      this.set = this.paper.set();
      this.render();
    }

    AbstractFormularRenderer.prototype.render = function() {};

    AbstractFormularRenderer.prototype.calculate = function(key, x) {
      try {
        return eval(this.model.get(key).replace('x', x));
      } catch (e) {
        return null;
      }
    };

    return AbstractFormularRenderer;

  })();

}).call(this);

  }
}));
(this.require.define({
  "views/renderer/formular_line": function(exports, require, module) {
    (function() {
  var AbstractFormularRenderer,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  AbstractFormularRenderer = require('views/renderer/abstract_formular').AbstractFormularRenderer;

  exports.FormularLineRenderer = (function(_super) {

    __extends(FormularLineRenderer, _super);

    function FormularLineRenderer() {
      this.render = __bind(this.render, this);
      FormularLineRenderer.__super__.constructor.apply(this, arguments);
    }

    FormularLineRenderer.prototype.render = function() {
      var path, point, stepsize, x, _ref;
      if (this.path) this.path.remove();
      path = '';
      stepsize = this.model.get('stepSize');
      for (x = 0, _ref = this.paper.width; x <= _ref; x += 1) {
        point = this.createPoint(x);
        path += point;
      }
      this.path = this.paper.path(path);
      return this;
    };

    FormularLineRenderer.prototype.createPoint = function(x) {
      var y;
      y = this.calculateY(x);
      if (typeof y === 'number') {
        return "" + (x ? 'L' : 'M') + " " + x + " " + y;
      } else {
        return '';
      }
    };

    return FormularLineRenderer;

  })(AbstractFormularRenderer);

}).call(this);

  }
}));
(this.require.define({
  "views/renderer/formular_rect": function(exports, require, module) {
    (function() {
  var AbstractFormularRenderer,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  AbstractFormularRenderer = require('views/renderer/abstract_formular').AbstractFormularRenderer;

  exports.FormularRectRenderer = (function(_super) {

    __extends(FormularRectRenderer, _super);

    function FormularRectRenderer() {
      this.render = __bind(this.render, this);
      FormularRectRenderer.__super__.constructor.apply(this, arguments);
    }

    FormularRectRenderer.prototype.render = function() {
      var stepsize, x, _ref, _results;
      this.set.forEach(function(el) {
        return el.remove();
      });
      stepsize = this.model.get('stepSize') * 1;
      if (stepsize) {
        _results = [];
        for (x = 0, _ref = this.paper.width; 0 <= _ref ? x <= _ref : x >= _ref; x += stepsize) {
          _results.push(this.drawRect(x));
        }
        return _results;
      }
    };

    FormularRectRenderer.prototype.drawRect = function(t) {
      var height, rect, rotation, stroke, width, x, y;
      x = this.calculate('positionX', t);
      y = this.calculate('positionY', t);
      rotation = this.calculate('rotation', t);
      width = this.calculate('width', t);
      height = this.calculate('height', t);
      stroke = {
        'stroke': '#' + this.model.get('color')
      };
      if (typeof y === 'number' && typeof x === 'number') {
        rect = this.paper.rect(x, y, width, height);
        rect.rotate(rotation, x + width / 2, y + height / 2);
        rect.attr(stroke);
        return this.set.push(rect);
      }
    };

    FormularRectRenderer.prototype.inputs = [
      {
        label: 'icon-repeat',
        type: 'Input',
        key: 'rotation',
        size: 'span2'
      }, {
        label: 'icon-resize-horizontal',
        type: 'Input',
        key: 'width',
        size: 'span2'
      }, {
        label: 'icon-resize-vertical',
        type: 'Input',
        key: 'height',
        size: 'span2'
      }, {
        label: 'icon-map-marker',
        type: 'Input',
        key: 'positionY',
        size: 'span2'
      }, {
        label: 'icon-map-marker',
        type: 'Input',
        key: 'positionX',
        size: 'span2'
      }, {
        label: 'icon-arrow-right',
        type: 'Input',
        key: 'stepSize',
        size: 'span1'
      }, {
        label: 'icon-tint',
        type: 'Color',
        key: 'color',
        size: 'span1'
      }
    ];

    return FormularRectRenderer;

  })(AbstractFormularRenderer);

}).call(this);

  }
}));
(this.require.define({
  "views/widgets/save": function(exports, require, module) {
    (function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  exports.Save = (function() {

    function Save(paper) {
      this.paper = paper;
      this.save = __bind(this.save, this);
      $('#save').click(this.save);
    }

    Save.prototype.save = function() {
      var a, bb, blob, svgString;
      svgString = this.paper.toSVG();
      a = document.createElement('a');
      a.download = 'mySvg.svg';
      a.type = 'image/svg+xml';
      bb = new (window.BlobBuilder || WebKitBlobBuilder);
      bb.append(svgString);
      blob = bb.getBlob('image/svg+xml');
      a.href = (window.URL || webkitURL).createObjectURL(blob);
      return a.click();
    };

    return Save;

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
      'change': 'calc',
      'mouseup': 'hide'
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
      value = parseFloat(this.initValues(input));
      input = $(input);
      if ($.isNumeric(value)) {
        this.slider.attr('max', value + value).attr('min', 0);
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
      return $(this.el).hide();
    };

    Slider.prototype.calc = function() {
      return this.callback(this.sub1 + this.slider.val() + this.sub2);
    };

    return Slider;

  })(Backbone.View);

}).call(this);

  }
}));
(this.require.define({
  "collections/composition": function(exports, require, module) {
    (function() {
  var Formular,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Formular = require('models/formular').Formular;

  exports.Composition = (function(_super) {

    __extends(Composition, _super);

    function Composition() {
      Composition.__super__.constructor.apply(this, arguments);
    }

    Composition.prototype.model = Formular;

    Composition.prototype.localStorage = new Store('composition');

    return Composition;

  })(Backbone.Collection);

}).call(this);

  }
}));

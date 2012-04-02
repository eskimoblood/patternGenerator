{Formular} = require 'models/formular'
{OutputView} = require 'views/output'
{InputView} = require 'views/input'
{Slider} = require 'views/slider'

class exports.FormularFactory

    constructor: ->
        @paper = Raphael('stage', 500, 500)
        @slider= new Slider()
        @

    create: (parent) ->
        model = new Formular
        output = new OutputView(model, @paper)
        input = new InputView {model: model, parent: parent, slider: @slider}
        @
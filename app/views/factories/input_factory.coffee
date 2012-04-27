{InputView} = require 'views/inputs/input'
{ColorView} = require 'views/inputs/color'
{Range} = require 'views/inputs/range'
{Slider} = require 'views/widgets/slider'

class exports.InputFactory

    constructor: ->
        @slider= new Slider()

    create: (input, options) ->
        options.slider = @slider
        options.label = input.label
        options.key = input.key
        options.size = input.size
        input = new @inputs[input.type](options)

    inputs: 
        'Input': InputView
        'Range': Range
        'Color': ColorView



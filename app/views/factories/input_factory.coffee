{InputView} = require 'views/inputs/input'
{Range} = require 'views/inputs/range'
{Slider} = require 'views/widgets/slider'


class exports.InputFactory 
    constructor: ->
        @slider= new Slider()

    create: (input, options) ->
        options.slider = @slider
        options.label = input.label
        options.key = input.key
        input = new @inputs[input.type](options)

    inputs: 
        'Input': InputView
        'Range': Range



{InputView} = require 'views/inputs/input'
{Range} = require 'views/inputs/range'
{Slider} = require 'views/widgets/slider'


class exports.InputFactory 
    constructor: ->
        @slider= new Slider()

    create: (input, options) ->
        options.slider = @slider
        input = new @inputs[input.type](options)
        console.log input

    inputs: 
        'Input': InputView
        'Range': Range



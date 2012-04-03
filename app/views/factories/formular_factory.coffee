{Slider} = require 'views/widgets/slider'
{Container} = require 'views/factories/container'
class exports.FormularFactory

    constructor: ->
        @paper = Raphael('stage', 500, 500)
        @slider= new Slider()

        @

    create: (parent) ->
        new Container(
            slider: @slider
            parent: parent
            paper: @paper
        )
        @
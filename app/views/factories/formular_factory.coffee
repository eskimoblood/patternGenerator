{Slider} = require 'views/widgets/slider'
{Container} = require 'views/factories/container'
class exports.FormularFactory

    constructor: ->
        @paper = Raphael('stage', 500, 500)
        @

    create: (parent) ->
        new Container(
            parent: parent
            paper: @paper
        )
        @
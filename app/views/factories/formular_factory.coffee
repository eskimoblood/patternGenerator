{Slider} = require 'views/widgets/slider'
{Container} = require 'views/factories/container'
{Save} = require 'views/widgets/save'
class exports.FormularFactory

    constructor: ->
        @paper = Raphael('stage', 500, 500)
        save = new Save(@paper)
        @

    create: (parent) ->
        new Container(
            parent: parent
            paper: @paper
        )
        @
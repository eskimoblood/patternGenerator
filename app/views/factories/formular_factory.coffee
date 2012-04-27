{Slider} = require 'views/widgets/slider'
{Container} = require 'views/factories/container'
{Save} = require 'views/widgets/save'
{Composition} = require 'collections/composition'

class exports.FormularFactory

    constructor: (@parent)->
        @paper = Raphael('stage', 500, 500)
        save = new Save(@paper)

        @collection = new Composition
        @collection.fetch(
            success: (coll)=>
                coll.each (model)=>
                    @create (model)
        )

    create: (model) ->
        console.log model, @parent
        new Container(
            parent: @parent
            paper: @paper
        ).create model
        @
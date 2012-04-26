{FormularLineRenderer} =  require 'views/renderer/formular_line'
{FormularRectRenderer} =  require 'views/renderer/formular_rect'
{InputFactory} =  require 'views/factories/input_factory'
{Formular} = require 'models/formular'
{Composition} = require 'collections/composition'


class exports.Container extends Backbone.View

    initialize: (options)->
        @el = $(@el).html(@template)
        @inputs = @el.find('div')
        @paper = options.paper
        @inputFactory = new InputFactory
        @collection = new Composition
        @collection.fetch(
            success: (coll)=>
                coll.each (model)=>
                    @create (model)
        )

        options.parent.append @el



    tagName: 'li'

    template: '<div/>'

    create: (model)-> 
        if !model
            model =  @collection.create(new Formular())
        output = new FormularRectRenderer(model, @paper)
        output.inputs.forEach((input) => 
            @inputFactory.create(input, {model: model, parent: @inputs})
        )


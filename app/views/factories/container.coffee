{FormularLineRenderer} =  require 'views/renderer/formular_line'
{FormularRectRenderer} =  require 'views/renderer/formular_rect'
{InputFactory} =  require 'views/factories/input_factory'
{Formular} = require 'models/formular'

class exports.Container extends Backbone.View

    initialize: (options)->
        @el = $(@el).html(@template)
        @inputs = @el.find('div')
        @paper = options.paper
        @inputFactory = new InputFactory
        $(options.parent).append @el

    tagName: 'li'

    template: '<div><button><i class="icon-remove"/></button></div>'

    create: (model)-> 
        if !model
            model =  @collection.create(new Formular())
        output = new FormularRectRenderer(model, @paper)
        output.inputs.forEach((input) => 
            @inputFactory.create(input, {model: model, parent: @inputs})
        )


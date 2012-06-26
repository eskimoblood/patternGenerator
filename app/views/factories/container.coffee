{FormularLineRenderer} =  require 'views/renderer/formular_line'
{FormularRectRenderer} =  require 'views/renderer/formular_rect'
{InputFactory} =  require 'views/factories/input_factory'

class exports.Container extends Backbone.View

    initialize: (options)->
        @el = $(@el).html(@template)
        @inputs = @el.find('div')
        @paper = options.paper
        @inputFactory = new InputFactory
        $(options.parent).append @el
        @el.on('click', 'button.remove', @remove)

    tagName: 'li'

    template: '<div><button class="remove"><i class="icon-remove"/></button></div>'

    create: (@model)->
        @renderer = new FormularLineRenderer(model, @paper)
        @renderer.inputs.forEach((input) =>
            @inputFactory.create(input, {model: model, parent: @inputs})
        )

    remove: =>
        @model.destroy()
        @el.remove()
        @renderer.remove()
        @renderer = null

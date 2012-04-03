{InputView} =  require 'views/inputs/input'
{FormularRenderer} =  require 'views/renderer/formular'
{Formular} = require 'models/formular'


class exports.Container extends Backbone.View

    initialize: (options)->
        @el = $(@el).html(@template)
        @inputs = @el.find('div')
        @paper = Raphael('stage', 500, 500)
        @slider =options.slider
        options.parent.append @el
        @create()

    tagName: 'li'

    template: '<select><option>select type</option></select><div>'

    create: -> 
        model = new Formular()
        output = new FormularRenderer(model, @paper)
        input = new InputView {model: model, parent: @inputs, slider: @slider}

{FormularFactory} = require 'views/factories/formular_factory'

console.log 'FormularFactory: ', FormularFactory
class exports.HomeView extends Backbone.View

    tagName: 'div'

    initialize: ->
        @factory = new FormularFactory
        @el = $('#inputs').on('click', 'button', @render)

    render: =>
        @factory.create @el.find('ul')
        
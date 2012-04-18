{FormularFactory} = require 'views/factories/formular_factory'

class exports.HomeView extends Backbone.View

    tagName: 'div'

    initialize: ->
        @factory = new FormularFactory
        @el = $('#inputs').on('click', 'icon-plus', @add)

    add: =>
        @factory.create @el.find('ul')
        
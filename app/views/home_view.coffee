{FormularFactory} = require 'views/factories/formular_factory'

class exports.HomeView extends Backbone.View


    initialize: ->
        @factory = new FormularFactory
        @el = $('#inputs').on('click', 'button', @render)
        @

    render: =>
        @factory.create @el
        @
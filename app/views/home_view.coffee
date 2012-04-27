{FormularFactory} = require 'views/factories/formular_factory'

class exports.HomeView extends Backbone.View

    initialize: ->
        @el = $('#inputs')
        @factory = new FormularFactory @el.find('ul')
        @el = @el.on('click', '.icon-plus', @add)

    add: =>
        @factory.create
        
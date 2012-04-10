class exports.AbstractInput extends Backbone.View

    initialize: (options)->
        @el = $(@el).html(@template)
        @input =  @el.find('input')
        $(options.parent).append(@el)

    template: ''

    events: 
        'keyup': 'change'
        'mouseup': 'change'

    change: (event) =>
        @model.setFormular @input.val()
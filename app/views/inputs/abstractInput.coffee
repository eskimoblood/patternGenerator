class exports.AbstractInput extends Backbone.View

    initialize: (options)->
        @el = $(@el).html(@template)
        @input =  @el.find('input')     
        $(options.parent).append(@el)
        @setLabel options
        @key = options.key

    template: ''

    events: 
        'keyup': 'change'
        'mouseup': 'change'

    change: (event) =>
        @model.setFormular @key, @input.val() 

    setLabel: (options) ->
        label =  @el.find('label')
        if label
            cid = _.uniqueId('x')
            label.attr('for', cid)
            @input.attr('id', cid)
            label.html options.label
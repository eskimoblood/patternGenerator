class exports.AbstractInput extends Backbone.View

    initialize: (options)->
        @el = $(@el).html(@template)
        @input =  @el.find('input').addClass(options.size)
        formular = options.model.get(options.key)
        if formular and typeof formular is 'string'
          @input.val(formular.replace('Math\.', ''))
        $(options.parent).append(@el)
        @setLabel options
        @setIcon options
        @key = options.key

    template: ''

    className: 'left'

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
            label.html options.label    
            @input.attr('id', cid)

    setIcon: (options) ->
        icon =  @el.find('i')
        if icon
            icon.addClass options.label
class exports.AbstractFormularRenderer

    constructor: (@model, @paper)->
        @model.bind 'change', @render
        @set = @paper.set()
        @

    render: ->


    calculateY: (x)->
        try
            eval(@model.get('formular').replace('x', x))
        catch e            
            null
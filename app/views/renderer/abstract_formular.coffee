class exports.AbstractFormularRenderer

    constructor: (@model, @paper)->
        @model.bind 'change', @render
        @set = @paper.set()
        @

    render: ->


    calculateY: (key, x)->
        try
            eval(@model.get(key).replace('x', x))
        catch e            
            null
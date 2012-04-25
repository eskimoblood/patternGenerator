class exports.AbstractFormularRenderer

    constructor: (@model, @paper)->
        @model.bind 'change', @render
        @set = @paper.set()
        @render()


    render: ->


    calculate: (key, x)->
        try
            eval(@model.get(key).replace('x', x))
        catch e 
            null
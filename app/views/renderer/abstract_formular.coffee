class exports.AbstractFormularRenderer

    constructor: (@model, @paper)->
        @model.bind 'change', @render
        @set = @paper.set()
        @render()


    render: ->

    calculate: (key, t, i)->
        try
            eval(@model.get(key).replace('\bt\b', t).replace('\bi\b', i))
        catch e 
            null

    remove: ->
        @set.forEach (el)-> el.remove()
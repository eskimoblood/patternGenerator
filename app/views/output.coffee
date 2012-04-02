class exports.OutputView

	constructor: (@model, @paper)->
        @model.bind 'change', @render
        @

    render: => 
       if @path
            @path.remove()
        path = ''
        for x in [0..@paper.width] by 1
            point = @createPoint(x)
            path += point        

        @path = @paper.path(path)
        @

    createPoint: (x) ->
        y = @calculateY(x)
        if typeof y is 'number'
            "#{ if x then 'L' else 'M'} #{x} #{y}"
        else
            ''

    calculateY: (x)->
        try
            eval(@model.get('formular').replace('x', x))
        catch e            
            null

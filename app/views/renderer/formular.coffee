class exports.FormularRenderer

    constructor: (@model, @paper)->
        @model.bind 'change', @render
        @set = @paper.set()
        @

    render: => 

        @set.forEach (el)->
            el.remove()

        path = ''
        for x in [0..@paper.width] by 10
            y = @calculateY x
            if $.isNumeric y
                @set.push @paper.circle(x, y, 5)
        #     point = @createPoint(x)
        #     path += point        

        # @path = @paper.path(path)
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

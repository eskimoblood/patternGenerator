{AbstractFormularRenderer} = require 'views/renderer/abstract_formular'

class exports.FormularLineRenderer extends AbstractFormularRenderer

    render: => 
        if @path
            @path.remove()

        path = ''
        stepsize = @model.get('stepSize')
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
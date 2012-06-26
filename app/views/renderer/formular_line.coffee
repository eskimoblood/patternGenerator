{AbstractFormularRenderer} = require 'views/renderer/abstract_formular'

class exports.FormularLineRenderer extends AbstractFormularRenderer

    render: => 
        @set.forEach((el) -> el.remove())

        try
            stepsize = eval(@model.get('stepSize'))
        catch e
            null

        stroke = {'stroke':  '#' + @model.get('color')}
        if stepsize
             for i in [0.. @model.get('repeat') || 1] by 1
                 pathString = ''
                 for x in [0..@paper.width] by 1
                    point = @createPoint(x * stepsize, i+1)
                    pathString += point
                 path = @paper.path(pathString)
                 path.attr(stroke)
                 @set.push  path

    createPoint: (t, i) ->
        x = @calculate('positionX', t, i)
        y = @calculate('positionY', t, i)
        if typeof y is 'number'
            "#{ if t then 'L' else 'M'} #{x} #{y}"
        else
            ''

    inputs: [

            label: 'icon-repeat'
            type: 'Input'
            key: 'repeat'
            size:'span2'
        ,
            label: 'icon-map-marker'
            type: 'Input'
            key: 'positionY'
            size:'span2'
        ,
            label: 'icon-map-marker'
            type: 'Input'
            key: 'positionX'
            size:'span2'
        ,
            label: 'icon-arrow-right'
            type: 'Input'
            key: 'stepSize'
            size:'span1'
        ,
            label: 'icon-tint'
            type: 'Color'
            key: 'color'
            size:'span1'
        ]
{AbstractFormularRenderer} = require 'views/renderer/abstract_formular'

class exports.FormularRectRenderer extends AbstractFormularRenderer

    constructor: (model, paper)->
        super model, paper

    render: => 
        @set.forEach((el) -> el.remove())

        stepsize = @model.get('stepSize') * 1
        if stepsize
            for x in [0..@paper.width] by stepsize
                @drawRect(x)

    drawRect: (x) ->
        y = @calculateY('position', x)
        rotation = @calculateY('rotation', x)
        width = @calculateY('width', x)
        height = @calculateY('height', x)
        stroke = {'stroke':  '#' + @model.get('color')}
        if typeof y is 'number'
            rect = @paper.rect x,y, width, height
            rect.rotate rotation, x + width / 2 , y + height / 2
            rect.attr(stroke)
            @set.push rect

    inputs: [
        
        label: 'Rotation'
        type: 'Input'
        key: 'rotation'
    ,
        label: 'StepSize'
        type: 'Input'
        key: 'stepSize'    
    ,
        label: 'Width'
        type: 'Input'
        key: 'width'
    ,
        label: 'Height'
        type: 'Input'
        key: 'height'
    ,
        label: 'Position'
        type: 'Input'
        key: 'position'
    ,
        label: 'Color'
        type: 'Color'
        key: 'color'
        
    ]
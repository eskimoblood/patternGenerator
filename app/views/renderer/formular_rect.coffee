{AbstractFormularRenderer} = require 'views/renderer/abstract_formular'

class exports.FormularRectRenderer extends AbstractFormularRenderer

    render: => 
        @set.forEach((el) -> el.remove())

        stepsize = @model.get('stepSize') * 1
        if stepsize

            for i in [0.. @model.get('repeat') || 1] by 1
              for x in [0..@paper.width] by stepsize
                  @drawRect(x, i)

    drawRect: (t, i) ->
        x = @calculate('positionX', t, i)
        y = @calculate('positionY', t, i)
        rotation = @calculate('rotation', t, i)
        width = @calculate('width', t, i)
        height = @calculate('height', t, i)
        stroke = {'stroke':  '#' + @model.get('color')}
        if typeof y is 'number' and typeof x is 'number'
            rect = @paper.rect x, y, width, height
            rect.rotate rotation, x + width / 2 , y + height / 2
            rect.attr(stroke)
            @set.push rect

    inputs: [
        
        label: 'icon-repeat'
        type: 'Input'
        key: 'rotation'
        size:'span2'
    ,
        label: 'icon-repeat'
        type: 'Input'
        key: 'repeat'
        size:'span2'
    ,
        label: 'icon-resize-horizontal'
        type: 'Input'
        key: 'width'
        size:'span2'
    ,
        label: 'icon-resize-vertical'
        type: 'Input'
        key: 'height'
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
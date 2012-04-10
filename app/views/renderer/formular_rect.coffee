{AbstractFormularRenderer} = require 'views/renderer/abstract_formular'

class exports.FormularRectRenderer extends AbstractFormularRenderer

    constructor: (model, paper)->
        super model, paper

    render: => 
        @set.forEach((el) -> el.remove())

        stepsize = @model.get('stepSize') * 1
        for x in [0..@paper.width] by stepsize
            console.log x
            @drawRect(x)

    drawRect: (x) ->
        y = @calculateY(x)
        if typeof y is 'number'
            rect = @paper.rect x,y, 10, 10
            rect.rotate 45, x + 5 , y + 5
            @set.push rect

    inputs: [
        
        label: 'Rotation'
        type: 'Range'
        key: 'rotation'
    ,
        
        label: 'Formular'
        type: 'Input'
        key: 'formular'
        
    ]
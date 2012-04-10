{AbstractInput} = require 'views/inputs/abstractInput'

class exports.Range extends AbstractInput

    template: '<input type="range" max="10" min="1">'

    change: (event)=>
        @model.set({stepSize: @input.val()})
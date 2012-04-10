{AbstractInput} = require 'views/inputs/abstractInput'

class exports.InputView extends AbstractInput
    initialize: (options) -> 
        super(options)
        console.log @model
        @slider = options.slider
        @

    template: '<input/>'

    change: (event)=>
        super()
        @slider.show(@input, @sliderCallback)

    sliderCallback: (value)=>
        @model.setFormular value
        @input.val(value)
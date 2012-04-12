{AbstractInput} = require 'views/inputs/abstractInput'

class exports.InputView extends AbstractInput
    initialize: (options) -> 
        super(options)
        console.log @model
        @slider = options.slider
        @

    template: '<div class="control-group"><label class="control-label"/><div class="controls"><input/></div></div>'

    change: (event)=>
        super()
        @slider.show(@input, @sliderCallback)

    sliderCallback: (value)=>
        @model.setFormular @key, value
        @input.val(value)
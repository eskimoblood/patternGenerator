{AbstractInput} = require 'views/inputs/abstractInput'

class exports.InputView extends AbstractInput
    initialize: (options) -> 
        super(options)
        @slider = options.slider
        @

    template: '<div class="input-prepend"><span class="add-on"><i/></span><input/></div>'

    change: (event)=>
        super()
        @slider.show(@input, @sliderCallback)

    sliderCallback: (value)=>
        @model.setFormular @key, value
        @input.val(value)
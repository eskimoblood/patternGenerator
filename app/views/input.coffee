class exports.InputView extends Backbone.View
    initialize: (options) -> 
        $(options.parent).append(@el)
        @slider = options.slider
        @

    tagName: 'input'

    events: 
        'keyup': 'changeFormular'
        'mouseup': 'changeFormular'

    changeFormular: (event)=>
        @model.setFormular $(@el).val()
        @slider.show(@el, @sliderCallback)
        @ 

    sliderCallback: (value)=>
        @model.setFormular value
        $(@el).val(value)
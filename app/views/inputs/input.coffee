class exports.InputView extends Backbone.View
    initialize: (options) -> 
        $(options.parent).append(@el)
        @slider = options.slider
        @el = $ @el
        @el.html(@template)
        @formularField =  @el.find('input')
        @

    tagName: 'li'

    template: '<input> <button class="btn btn-small"><i class=" icon-remove
"/></button>'

    events: 
        'keyup': 'changeFormular'
        'mouseup': 'changeFormular'

    changeFormular: (event)=>
        @model.setFormular @formularField.val()
        @slider.show(@formularField, @sliderCallback)
        @ 

    sliderCallback: (value)=>
        @model.setFormular value
        @formularField.val(value)
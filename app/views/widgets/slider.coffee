class exports.Slider extends Backbone.View     

    events: 
        'change': 'calc'
        'mouseup': 'hide'

    className: 'tooltip top fade in'

    initialize: ->

        @el = $(@el) .html('<div class="tooltip-arrow"></div><div class="tooltip-inner"><input type="range"/></div>')
        @helper = $('<div>').css({top: '-10000px', position: 'absolute' })
        $('body').append(@el)
        $('body').append(@helper)
        @height = @el.height()
        @width = @el.width()
        @el.hide()
        @slider = $('input', @el);

    show: (input, @callback) ->
        value = parseFloat @initValues input
        input = $ input

        if $.isNumeric value
            @slider.attr('max', value + value ).attr('min', 0 )
            width = @helper.html(@sub1).width() + input.position().left - @width / 2 + 5
            @el.css({
                'top': input.position().top - @height
                'left': width 
            }).show()
            @slider.val value
        else 
            @el.hide()

    initValues: (input) ->
        value = input.val()
        firstDigit = secondDigit = ''

        split =  input.get(0).selectionStart

        @sub1 = value.substring(0, split).replace /\d*$/, (match) =>
            firstDigit = match
            ''
        @sub2 = value.substring(split).replace /^\d*/, (match) =>
            secondDigit = match
            ''
        (firstDigit + secondDigit)

    hide: ->
        $(@el).hide()

    calc: =>
        @callback(@sub1 + @slider.val() + @sub2)
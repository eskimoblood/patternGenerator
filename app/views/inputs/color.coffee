{AbstractInput} = require 'views/inputs/abstractInput'

class exports.ColorView extends AbstractInput
    initialize: (options)->
        super(options)
        @colorPicker = new jscolor.color(@input.get(0), {})

    template: '<div class="control-group"><label class="control-label"/><div class="controls"><input/></div></div>'

    events: 
        'change': 'change'
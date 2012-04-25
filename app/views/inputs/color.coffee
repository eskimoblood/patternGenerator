{AbstractInput} = require 'views/inputs/abstractInput'

class exports.ColorView extends AbstractInput
    initialize: (options)->
        super(options)
        @colorPicker = new jscolor.color(@input.get(0), {})

    template: '<div class="input-prepend"><span class="add-on"><i/></span><input
        /></div>'

    events: 
        'change': 'change'
{AbstractInput} = require 'views/inputs/abstractInput'

class exports.Range extends AbstractInput

    template: '<label class="control-label"/><div class="controls"><input type="range" max="100" min="1"></div>'

    change: (event)=>
        setting = {}
        setting[@key] = @input.val()
        console.log setting
        @model.set(setting)
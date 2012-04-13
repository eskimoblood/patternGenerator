class exports.Formular extends Backbone.Model
    initialize: ->
        @mathMember = '(' + Object.getOwnPropertyNames(Math).join(')|(') + ')'
	
    defaults:
        formular: 'sin(x)'
        stepSize: 1

    setFormular: (key, formular) ->
        set = {}
        set[key] = @computeFormular formular
        this.set set

    computeFormular: (formular)->
        formular.replace new RegExp(@mathMember, 'g'),  (match)->
            'Math.' + match
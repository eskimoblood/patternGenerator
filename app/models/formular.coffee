class exports.Formular extends Backbone.Model
    initialize: ->
        @mathMember = '(' + Object.getOwnPropertyNames(Math).join(')|(') + ')'
	
    defaults:
        formular: 'sin(x)'

    setFormular: (formular)->
        this.set({formular: @computeFormular(formular)})

    computeFormular: (formular)->
        formular.replace new RegExp(@mathMember, 'g'),  (match)->
            'Math.' + match
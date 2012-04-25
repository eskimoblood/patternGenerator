{Formular} = require('models/formular')

class exports.Composition extends Backbone.Collection
    model: Formular
    localStorage: new Store('composition')
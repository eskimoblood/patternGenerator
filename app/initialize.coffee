{BrunchApplication} = require 'helpers'
{MainRouter} = require 'routers/main_router'
{HomeView} = require 'views/home_view'


class exports.Application extends BrunchApplication

    initialize: ->
        @router = new MainRouter
        @homeView = new HomeView().add()
        @

window.app = new exports.Application

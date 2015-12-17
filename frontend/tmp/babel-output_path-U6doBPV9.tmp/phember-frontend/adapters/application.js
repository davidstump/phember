define("phember-frontend/adapters/application", ["exports", "ember-data"], function (exports, _emberData) {
    exports["default"] = _emberData["default"].RESTAdapter.extend({
        host: "http://localhost:4000"
    });
});
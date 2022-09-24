module.exports = app => {
    const controller = require("../controllers/controller.js");
    
    let router = require("express").Router();

    // Routes
    router.get("/episode/:number", controller.episode);
    router.get("/episodeNumber", controller.episodeNumber);

    app.use("/api", router);
}
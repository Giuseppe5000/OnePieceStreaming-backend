module.exports = app => {
    const controller = require("../controllers/controller.js");
    
    let router = require("express").router;

    // Routes
    router.get("/episode:number", controller.episode);

    app.use("/api", router);
} 
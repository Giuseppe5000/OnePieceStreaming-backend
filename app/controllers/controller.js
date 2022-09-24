const Episode = require("../models/episode.js");

exports.episode = (req, res) => {
    Episode.searchEpisode(req.params.number, (err, data) => {
        if (err) {
            res.status(404).send({
                message: err.message || "Search error"
            });
        }
        else res.send(data);
    });
}
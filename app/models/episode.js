const conn = require("../config/db.config.js");

class Episode {

    static searchEpisode(number, result) {
        conn.query("SELECT * FROM Episode WHERE IdEpisode = ?", [number], (err, rows) => {
            if (err) {
                result(err, null);
            }
            else if (rows[0]){
                result(null, { "link": rows[0].Link });
            }
            else {
                result(null, null);
            }
        })
    }

    static number(result) {
        conn.query("SELECT count(IdEpisode) AS epNum FROM Episode", (err, rows) => {
            if (err) {
                result(err, null);
            }
            else if (rows[0]){
                result(null, { "epNum": rows[0].epNum });
            }
            else {
                result(null, null);
            }
        })
    }

}

module.exports = Episode;
let db = require('./db.js');

module.exports = {
  getPlanes(req, res, next) {
    if(req.query.count) {
      db.get_planes([req.query.count], (err, planes) => {
        res.send(planes);
      });
    } else if (req.query.planetype) {
      db.get_planes_by_type([req.query.planetype], (err, planes) => {
        res.send(planes);
      });
    }
  },
  makePlane(req, res, next) {
    let newPlane = req.body;
    db.make_plane([newPlane.planetype, newPlane.passengercount], (err, response) => {
      res.send(response);
    })
  }
};

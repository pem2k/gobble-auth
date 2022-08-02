const Trip = require("./Trip");
const Traveller = require("./Traveller");
const Location = require("./Location");

Location.hasMany(Trip,{
    onDelete:"CASCADE"
});
Trip.belongsTo(Location);

Traveller.hasMany(Trip,{
    onDelete:"CASCADE"
});
Trip.belongsTo(Traveller);

module.exports={
    Location,
    Traveller,
    Trip
}

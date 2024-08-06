const reservasService = require("../services/reservasService.js");

const getReservasPorID = async (req, res) => {
    const reservasHeroe = await reservasService.getReservasPorID(req.params.id);

    if(!reservasHeroe)
        return res.status(404).send({message: 'No se conoce un héroe con tal ID'});
        
    res.status(200).send(reservasHeroe.reservas);
};

module.exports = {getReservasPorID};
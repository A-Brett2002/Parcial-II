const Habitaciones =[
    {id:1, Nohabitacion:": 1", Capacidad: "2", Precio: "100"},
    {id:2, Nohabitacion:": 2", Capacidad: "2", Precio: "100"},
    {id:3, Nohabitacion:": 3", Capacidad: "2", Precio: "100"},
]
const index =(req,res)=>{
    res.render("index", {Habitaciones74:Habitaciones});
}
const show = (req,res)=>{
    const {id} = req.params;
    const habitacion = Habitaciones.find(habitacion => habitacion.id == id);
    res.render("show", {habitacion});
}
module.exports = {
    index,show
}
const Habitaciones74 =[
    {
        id: 1,
        NoHabitacion: 101,
        Capacidad: 1,
        Precio: 500
    },
    {
        id: 2,
        NoHabitacion: 202,
        Capacidad: 2,
        Precio: 1000
    },
    {
        id: 3,
        NoHabitacion: 303,
        Capacidad: 3,
        Precio: 1500
    }
]
const index = (req,res)=>{
    res.render("index", {habitaciones74:Habitaciones74});
}
const show = (req,res)=>{
    const {id} = req.params;
    const habitacion = Habitaciones74.find(habitacion => habitacion.id === parseInt (id));
    if(!habitacion){
        res.status(404).send("Habitacion no encontrada");
    }else{
        res.render("show", {habitacion});
    }
}

module.exports = {
    index,
    show
}
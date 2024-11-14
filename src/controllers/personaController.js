import { crearPersonaInsert, obtenerTodasLasPersonas } from "../models/personaModel.js";

export const crearPersona = async (req,res)=>{
    try {
        const {dni, nombre, apellido,direccion,fecha_nacimiento,email,imagen_documento} = req.body
        const todo = await crearPersonaInsert(dni, nombre, apellido,direccion,fecha_nacimiento,email,imagen_documento)
    } catch (error) {
        console.error("Error crearPersona", error)
    }
    res.redirect('/')
}

export const mostrarPersonas = async (req,res)=>{
    try {
        const personas = await obtenerTodasLasPersonas(req,res)
        console.log("HOLAADSLADSLAKDPEROOSNAIFDSAFDSAFD")
        res.render("medico",{personas})
    } catch (error) {
        console.error("Error al mostrarPersonas", error)
    }
}
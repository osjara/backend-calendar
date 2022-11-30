const { response } = require("express");
const Adopcion = require("../models/Adopcion");
const CentroAdopcion = require("../models/CentroAdopcion");
const Comentario = require("../models/Comentario");
const Mascota = require("../models/Mascota");
const MeGusta = require("../models/MeGusta");
const Perfil = require("../models/Perfil");
const Publicacion = require("../models/Publicacion");
const Seguidores = require("../models/Seguidores");




const crearCentro = async(req, res = response) => {

    const centroAdopcion = new CentroAdopcion(req.body);

    try {
        centroAdopcion.fechaCreacion = Date.now();

        const centroCreado = await centroAdopcion.save();

        res.json({
            ok: true,
            centroAdopcion: centroCreado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        });
    }

}

const crearPerfil = async(req, res = response) => {

    const { usuario, centroAdopcion } = req.body;
    let perfilUsuario = await Perfil.findOne({ usuario });
    let perfilCentro = await Perfil.findOne({ centroAdopcion });

    const nuevoPerfil = {...req.body}

    if (usuario !== undefined && perfilUsuario) {
        const perfilActualizado = await Perfil.findByIdAndUpdate(perfilUsuario._id, nuevoPerfil);
        res.json({
            ok: true,
            perfil: perfilActualizado
        })
    } else if( centroAdopcion !== undefined && perfilCentro){
        const perfilActualizado = await Perfil.findByIdAndUpdate(perfilCentro._id, nuevoPerfil);
        res.json({
            ok: true,
            perfil: perfilActualizado
        })

    }else {
        
        try {
            
            const perfil = new Perfil(req.body);
            const perfilCreado = await perfil.save();
    
            res.json({
                ok: true,
                perfil: perfilCreado
            })
    
        } catch (error) {
            console.log(error)
            res.status(500).json({
                ok: false,
                msg: 'Hable con el admin'
            });
        }
    }
}

const crearMascota = async(req, res = response) => {

    const mascota = new Mascota(req.body);

    try {

        const mascotaCreada = await mascota.save();

        res.json({
            ok: true,
            mascota: mascotaCreada
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'No fue Posible Crear Mascota'
        });
    }
}

const crearPublicacion = async(req, res = response) => {

    const publicacion = new Publicacion(req.body);

    try {

        publicacion.fechaPublicacion = Date.now();
        const publicacionCreada = await publicacion.save();

        res.json({
            ok: true,
            publicacion: publicacionCreada
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'La publicacion no pudo ser creada'
        });
    }
}

const crearComentario = async(req, res = response) => {

    const comentario = new Comentario(req.body);

    try {

        const comentarioCreado = await comentario.save();

        res.json({
            ok: true,
            comementario: comentarioCreado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'el comentario no pudo ser creado'
        });
    }

}

const meGusta = async(req, res = response) => {

    const {autor, publicacion} = req.body;

    let meGustaPublicacion = await MeGusta.findOne({ autor });
    let meGustaAutor = await MeGusta.findOne({ publicacion });

    if (meGustaPublicacion && meGustaAutor) {

        await MeGusta.findByIdAndDelete( meGustaAutor._id );
        res.json({ ok: true, msg: "Me Gusta Eliminado" });

    }else {
        const megusta = new MeGusta(req.body);
        try {
    
            await megusta.save();
    
            res.json({
                ok: true
            })
    
        } catch (error) {
            console.log(error)
            res.status(500).json({
                ok: false,
                msg: 'el comentario no pudo ser creado'
            });
        }
    }

}

const crearSeguidor = async(req, res = response) => {

    const {perfilseguido, seguidor} = req.body;

    let seguidores = await Seguidores.findOne({ seguidor });
    let seguidos = await Seguidores.findOne({ perfilseguido });

    if (seguidores && seguidos) {

        await Seguidores.findByIdAndDelete( seguidores._id );
        res.json({ ok: true, msg: "dejo de seguir" });

    }else {
        const seguidores = new Seguidores(req.body);
        try {
    
            await seguidores.save();
    
            res.json({
                ok: true
            })
    
        } catch (error) {
            console.log(error)
            res.status(500).json({
                ok: false,
                msg: 'no se pudo guardar el Cambio'
            });
        }
    }
}

const crearAdopcion = async(req, res = response) => {

    const adopcion = new Adopcion(req.body);

    try {

        adopcion.fechaAdopcion = Date.now();
        const adopcionCreada = await adopcion.save();

        res.json({
            ok: true,
            adopcion: adopcionCreada
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'La publicacion no pudo ser creada'
        });
    }
}


module.exports = {
    crearCentro,
    crearPerfil,
    crearMascota,
    crearPublicacion,
    crearComentario,
    meGusta,
    crearSeguidor,
    crearAdopcion
}
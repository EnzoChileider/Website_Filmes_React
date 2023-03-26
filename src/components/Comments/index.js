const commentarios = [{
    "usuario": "João",
    "comentario": "Muito bom, gostei demais!",
    "filme": "Tempos Modernos"
},
{
    "usuario": "Pedro",
    "comentario": "Muito bom, gostei muito!",
    "filme": "E.t o Extraterrestre"
},
{
    "usuario": "Gustavo",
    "comentario": "Muito bom, gostei!",
    "filme": "Irmão Urso"
}
]

export default function Comments({ filme }) {
    const comentariosFilme = commentarios.filter(filmec =>
        filmec.filme === 'vingadores'
    );
    return (
        <div className="container text-center">
            <div className="row">
                {comentariosFilme.map((comment, i) => (
                    <div className="col" key={i.toString()}>
                        <div className="card" id="comentario">
                            {comment.comentario}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
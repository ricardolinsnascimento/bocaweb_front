export const Lista = ({nome, usuario, descricao}) =>{
    return (
        <div className="lista_componente">                   
            <h1>nome: {nome}</h1>
            <p> usuario: {usuario} </p>
            <p> descricao: {descricao}  </p>
        </div>        
    )
}
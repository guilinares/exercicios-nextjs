import Titulo from '../../components/Titulo';

export default function usandoTitulo() {
    return (
        <div>
            <Titulo principal="Página de cadastro"
                    secundario="Incluir, alterar, excluir"/>
            <Titulo principal="Página de login"
                    secundario="Informe seu login e senha"
                    pequeno={true}></Titulo>
        </div>
    )
}
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime"

function gerarLista(final = 10) {
    let lista = []
    for (let i = 1; i <= final; i++) {
        lista.push(<span>{i},</span>)
    }
    return lista
}

export default function lista1() {
    return (
        <div>
            <div>
                {gerarLista(30)}
            </div>
            <div>
                {gerarLista(3)}
            </div>
        </div>
    )
}
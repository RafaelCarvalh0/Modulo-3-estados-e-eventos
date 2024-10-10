import { Quiz as Type } from "@/types/Quiz";

export const Quiz: Type[] = [
    {
        Id: 1,
        Question: '1. Qual ingrediente não pode faltar?',
        TrueResponse: 0,
        Response: [
            'Farinha',
            'Corante',
            'Água',
            'Açucar'
        ]
    },
    {
        Id: 2,
        Question: '2. Qual ingrediente não é usado para fazer escondidindo?',
        TrueResponse: 3,
        Response: [
            'Carne seca',
            'Creme de leite',
            'Mandioca',
            'Leite condensado'
        ]
    },
    {
        Id: 3,
        Question: '3. Qual receita fica pronta mais rápido?',
        TrueResponse: 2,
        Response: [
            'Bolo',
            'Pudim',
            'Ovo frito',
            'Batata frita'
        ]
    },
    {
        Id: 4,
        Question: '4. Qual ingrediente pode ser usado para fazer maionese?',
        TrueResponse: 1,
        Response: [
            'Limão',
            'Óleo',
            'Açucar',
            'Vinagre'
        ]
    }
]
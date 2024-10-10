import { ReactNode } from "react"

export interface Quiz {
    Id: number
    Question: string
    TrueResponse: number
    Response: ReactNode[]
}

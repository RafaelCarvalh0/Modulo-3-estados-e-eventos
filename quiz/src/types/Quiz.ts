import { ReactNode } from "react"

export interface Quiz {
    Id: number
    Question: string
    TrueResponse: string
    Response: ReactNode[]
}

import { LoaderCircle } from "lucide-react"

export const Loading = () => {
    return (
    <div className="flex flex-col z-100 gap-2 bg-black items-center justify-center min-h-screen">
      <p className="text-white uppercase font-semibold">Carregando...</p>
      <LoaderCircle className="h-8 w-8 animate-spin text-white" />
    </div>
  )
}


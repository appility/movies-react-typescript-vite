import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react"

interface GlobalContextType {
  selectedMovie: string | null
  onMovieSelected: (id: string) => void
}

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
)

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null)

  const onMovieSelected = (id: string) => {
    setSelectedMovie(id)
  }

  const value = useMemo(
    () => ({ selectedMovie, onMovieSelected }),
    [selectedMovie]
  )

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  const context = useContext(GlobalContext)
  if (context === undefined) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContext.Provider"
    )
  }
  return context as GlobalContextType
}

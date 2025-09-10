import { Header } from '@ui/header/header.component'

export const Layout: React.FC <React.PropsWithChildren>= ({children}) => {
  return (
    <>
    <Header/>
    {children}
    </>

  )
}
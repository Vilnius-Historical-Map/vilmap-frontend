import { Header } from '@ui/header/header.component'
import {Footer} from '@ui/footer/footer.component'
export const Layout: React.FC <React.PropsWithChildren>= ({children}) => {
  return (
    <>
    <Header/>
      {children}
    <Footer/>
    </>

  )
}
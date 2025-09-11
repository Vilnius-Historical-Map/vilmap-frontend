import { Layout } from "@ui/layout/layout"
import { AppRoutes } from "@router/routes"

function App() {
  return (
    <Layout>
       <main id="skip-to-content">
        <section className="content">
          <AppRoutes/>
        </section>
      </main>
      </Layout>
  )
}

export default App

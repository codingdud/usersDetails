import { Outlet,useNavigation } from 'react-router-dom'
import ResponsiveAppBar from '../components/NavBar'

function NavPage() {
    const navigation=useNavigation()
  return (<>
    <ResponsiveAppBar/>
    <main>
     {navigation.state==='loading'&&<p>loading...</p>}
     <Outlet/>
    </main>
   </>)
}

export default NavPage
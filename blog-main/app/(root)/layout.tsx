import { ChildProps } from '@/types'

import Navbar from './_components/navbar'
import { AppSidebar } from './_components/app-saidbar'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

function Layout({ children }: ChildProps) {
	return (
	<main >
     <Navbar />
	<AppSidebar  />
    <div className="container ml-48">{children}</div>
   </main>
	)
}

export default Layout	

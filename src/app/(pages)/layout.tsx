
import React from 'react'


import Sidebar from '@/components/sidebar/side-bar'
import HeaderBar from '@/components/header/header'

import Footer from '@/components/footer/footer'


export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="lg:pl-72">
        <HeaderBar/>
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>


      <Sidebar/>
      <Footer/>
    </>
  )
}
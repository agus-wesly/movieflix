'use client'

import ToggleTheme from './toggle-theme'
import { Button } from './ui/button'
import { useState } from 'react'
import { Icons } from './icons'
import TooltipComponent from './tooltip'
import SidebarMobile from './sidebar-mobile'

function NavHome() {
  const [isMobileActive, setIsMobileActive] = useState(false)
  return (
    <>
      <div className="container flex justify-between items-center my-5">
        <div className="flex gap-4 items-center">
          <div className="md:hidden">
            <TooltipComponent
              trigger={
                isMobileActive ? (
                  <Icons.panelClose
                    className=" w-5 h-5"
                    onClick={() => setIsMobileActive(false)}
                  />
                ) : (
                  <Icons.panelOpen
                    className=" w-5 h-5"
                    onClick={() => setIsMobileActive(true)}
                  />
                )
              }
            />
          </div>

          <p className="font-bold text-lg mr-4">Movie</p>
        </div>

        <div className="space-x-4 flex items-center">
          <ToggleTheme />
          <Button variant={'default'}>Login</Button>
        </div>
      </div>

      {isMobileActive ? (
        <div className="md:hidden">
          <SidebarMobile />
        </div>
      ) : null}
    </>
  )
}

export default NavHome

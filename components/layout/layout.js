import React from 'react'
import styles from './layout.module.css'
import cn from 'classnames'
import Sidebar from '../col/col-sidebar'
import useWindowSize from '../../hooks/useWindowSize'
import { SIZES } from '../../constants/index'
import Search from '../col/col-search'

function Layout({ children }) {
  const size = useWindowSize()
  return (
    <div className={cn(styles.layout)}>
      <Sidebar flat={size.width < SIZES.TABLET_SIZE}>Sidebar</Sidebar>
      <div className={styles.search_main_and_extra}>
        <Search></Search>
        <div className={styles.main_and_extra}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout

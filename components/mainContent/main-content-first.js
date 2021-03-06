import React from 'react'
import { PROFILE } from '../../constants/index'
import ProfileBox from '../profileBox/profileBox'
import styles from './main-content-first.module.css'
import Button from '../button/button'
import * as Icon from '../icons'
import TextTitle from '../textTitle/text-title'

function MainContentFirst() {
  return (
    <div className={styles.mainBox}>
      <div className={styles.mainContentHeadBox}>
        <TextTitle bold>Session</TextTitle>
        <Button className={styles.exportButton}>
          <Icon.Fill2 />
          <span>Export</span>
        </Button>
      </div>

      <div className={styles.bigProfileBox}>
        {PROFILE.map((profile) => (
          <ProfileBox
            name={profile.name}
            mail={profile.mail}
            role={profile.role}
            photoUrl="https://picsum.photos/58/58"
          />
        ))}
      </div>
    </div>
  )
}

export default MainContentFirst

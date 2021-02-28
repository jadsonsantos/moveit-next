import styles from '../styles/components/Profile.module.scss'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/jadsonsantos.png" alt="Jadson"/>
      <div>
        <strong>Jadson Santos</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}
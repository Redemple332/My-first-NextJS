import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}><span>Redemple</span>YT</h1>
    <p className={headerStyles.description}>
        Keep Learning for your Goal! Just Focus on It.
    </p>
    </div>
  )
}

export default Header
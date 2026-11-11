import { Link } from 'react-router'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="logo" to="/">mini<span>board.</span></Link>
        <span className="header-label">React practice</span>
      </div>
    </header>
  )
}

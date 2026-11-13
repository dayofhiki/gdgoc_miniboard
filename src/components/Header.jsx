import { Link } from 'react-router'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="logo" to="/">MiniBoard</Link>
      </div>
    </header>
  )
}

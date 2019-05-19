import { withRouter } from 'next/router'

// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

const ActiveLink = ({ children, router, href }) => {
  const _class =  router.pathname === href ? 'nav-active flex-items' : 'flex-items'

  const handleClick = e => {
    e.preventDefault()
    router.push(href).then(() => window.scrollTo(0, 0))
  }

  return (
    <a href={href} onClick={handleClick} className={_class}>
      {children}
    </a>
  )
}

export default withRouter(ActiveLink)
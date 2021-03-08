const routeHandler = (to, from, next) => {
  const token = JSON.parse(localStorage.getItem('token'))
  const guardRoutes = ['cartScreen', 'profileScreen']
  if (guardRoutes.indexOf(to.name) !== -1) {
    if (!token) {
      next({ name: 'loginScreen', query: { redirect: to.path.replace('/', '') } })
    } else {
      next()
    }
  }
  else {
    next()
  }

}

export { routeHandler }
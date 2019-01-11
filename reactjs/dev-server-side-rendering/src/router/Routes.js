import loadable from 'loadable-components'

const Home = loadable(() => import('../pages/home/Home'))
const About = loadable(() => import('../pages/about/About'))

export {Home, About}

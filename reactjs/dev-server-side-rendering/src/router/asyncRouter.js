import asyncComponent from './asyncComponent';

const Home = asyncComponent(() => {
    return import('../pages/home/Home');
});

const About = asyncComponent(() => {
    return import('../pages/about/About');
});

export { Home, About }


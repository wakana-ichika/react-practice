import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>{ props.title }</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"></link>
            </Head>
            <Header header={ props.header } />
            <div className="container">
                <h3 className="my-3 text-primary text-center">
                    { props.title }
                </h3>
                { props.children }
            </div>
            <Footer footer="copylight SYODA-Tuyano." />
        </div>
    )
}
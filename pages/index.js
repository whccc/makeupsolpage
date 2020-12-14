import Link from 'next/link'
import { Fragment } from 'react'
import {Layout} from '../components/AppLayout'
import {CarouselBanner} from '../components/CarouselBanner'
import {CarouselProducts} from '../components/CarouselProducts'
const Index=()=>{
    return(
        <Fragment>
        <Layout>   
            <CarouselBanner/>

            <section>
                <h1>Productos</h1>
                <CarouselProducts/>
            </section>
        </Layout>
        <style jsx>{
            `
            section{
                text-align:center;
                padding:10px;
                max-width:2000px;
                margin:auto;
            }
            h1{
                padding:20px;
                font-size:30px;
            }
            `
        }
        </style>
        </Fragment>
    );
}

export default  Index;
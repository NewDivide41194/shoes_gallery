import React from 'react'
import MenItemCards from '../components/menCards'
import Footer from '../../../../app/footer'

const MenGallery=()=>{
    return(
        <div className='pt-5' id="page-wrap">
            <div className='container'>
            <MenItemCards/>

            </div>
            <Footer/>
        </div>
    )
}

export default MenGallery
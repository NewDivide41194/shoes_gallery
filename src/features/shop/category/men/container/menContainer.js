import React from 'react'
import MenItemCards from '../components/menCards'
import Footer from '../../../../app/footer'

const MenGallery=()=>{
    return(
        <div className='py-5' id="page-wrap">
            <MenItemCards/>
            <Footer/>
        </div>
    )
}

export default MenGallery
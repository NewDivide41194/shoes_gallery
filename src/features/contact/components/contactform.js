import React from 'react'
import withMedia from 'react-media-query-hoc/dist/with-media'

import * as Colors from '../../../config/colorConfig'

const ContactForm = props => {
    const {media} = props
    return (
        <div className='' >
            <form className='py-3'>
                <div className='d-flex flex-row flex-wrap justify-content-between py-2'>
                    <div className='flex-fill  p-1'>
                        <input id={'name'} placeHolder={'Name'} style={{fontColor:'#5A6367'}}/>  
                        
                    </div>
                    <div className='flex-fill  p-1'>
                        <input id={'email'} placeHolder={'Email'} style={{fontColor:'#5A6367'}}/>
                    </div>
                </div>
                
               
                <div className='p-1 py-2'>
                    <input className='' id={'subject'} placeHolder={'Subject'} style={{fontColor:'#5A6367'}}/>  
                </div>
                <div className='p-1 py-2'>
                    <textarea id='message' placeholder='Your Message' style={{fontSize:12,fontColor:'#5A6367',maxHeight:'8rem',width:'100%',padding:20}} onFocus={(e)=> document.getElementById('message').style.border=`2px solid ${Colors.textBlack}`}/>  
                </div>
                <div className=' p-1 py-2'>
                    {/* <button text={'Send'} width={media.desktop?'50%':'100%'}/>  */}
                </div>
            </form>

        </div>
    )
}
export default withMedia(ContactForm)
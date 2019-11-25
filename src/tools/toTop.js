import React, { useState } from 'react'

const ToTop = () => {

    window.onscroll = () => { scrollFunction() }

    const [scroll, setScroll] = useState(false)

    const scrollFunction = () => {
        if (document.documentElement.scrollTop > 400 || document.body.scrollTo > 400) { setScroll(true) }
        else { setScroll(false) }
    }

    const _handleTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    return (
        <div className='row justify-content-end text-light bg-dark'>
            <div className='position-fixed' id='myBtn' style={{ zIndex: 50, paddingRight: 30, marginTop: '50rem', cursor: 'pointer', display: scroll ? 'block' : 'none' }} onClick={_handleTop}>
                <i className="fa fa-arrow-circle-up fa-4x" style={{ textShadow: '2px 2px 5px gray' }} />
            </div>

        </div>
    )
}

export default ToTop
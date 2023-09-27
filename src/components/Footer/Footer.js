import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div class="footer">
    <div class="footer-column">
        <p className='innertext'>FAQ</p>
        <p className='innertext'>Account</p>
        <p className='innertext'>Investor Relations</p>
        <p className='innertext'>Ways to watch</p>
    </div>
    <div class="footer-column">
        <p className='innertext'>Privacy</p>
        <p className='innertext'>Only on Netflix</p>
        <p className='innertext'>Help Centre</p>
        <p className='innertext'>Media Centre</p>
    </div>
    <div class="footer-column">
       <p className='innertext'>Jobs</p>
       <p className='innertext'>Speed Test</p>
       <p className='innertext'>Corporate information</p>
       <p className='innertext'>Terms of Use</p>
    </div>
    <div class="footer-column">
       <p className='innertext'>Cookie Preference</p>
       <p className='innertext'>Contact Us</p>
       <p className='innertext'>Legal Notices</p>
       <p className='innertext'>Netflix India</p>
    </div>
</div>
  )
}

export default Footer

import React from 'react'


function Footer() {
  return (
    <div className="h-[280px] bg-gradient-to-t from-blue-300 to-indigo-600 text-white">
      <div className="flex justify-around py-4">
        
        <div className="flex my-4 flex-col">
          <a href="https://manasvitech.in/" target="_blank" rel="noreferrer">
            <img src="https://manasviportfolio.online/static/media/manasvi_logo.b48774965ddf1f4d9635.png" alt="logo" className="h-20 rounded-full mb-2 bg-white"/>
          </a>
          <span className="font-semibold text-start text-lg text-white hover:text-black">"At Manasvi Technologies(OPC) Pvt. Ltd, <br /> we make phone apps that are just <br /> right for you. Tell us what you need!"</span>
        </div>

        <div className="flex flex-col my-4">
          <span className="font-extrabold text-start text-2xl text-white hover:text-black mb-3">PRODUCTS</span>
          <ul className='text-md font-bold text-white'>
            <li className='flex items-start    hover:text-black mb-2'>Software Development</li>
            <li className='flex items-start    hover:text-black mb-2'>App Development</li>
            <li className='flex items-start    hover:text-black mb-2'>IT Services</li>
            <li className='flex items-start    hover:text-black mb-2'>E-Commerce</li>
          </ul>
        </div>

        <div className="flex flex-col my-4">
          <span className='font-extrabold text-start text-2xl text-white hover:text-black mb-3'>SOCIAL MEDIA</span>
          <ul className="list-none">
            <li className='flex items-start justify-around text-md font-bold flex-row mb-2'>
              <img src="https://manasviportfolio.online/static/media/fb.49e67d43221b6bb1aa86.png" alt="Facebook" className="h-8 rounded-lg"/>
              <a href="https://www.facebook.com/people/Manasvi-Technologies-OPC-Pvt-Ltd/61555158365754/" target="_blank" rel="noreferrer" className="underline hover:text-black">Facebook</a>
            </li>
            <li className='flex items-start justify-around text-md font-bold flex-row mb-2'>
              <img src="https://manasviportfolio.online/static/media/x.1cbbff440b14459eeb67.png" alt="YouTube" className="h-8 rounded-lg"/>
              <a href="https://twitter.com/manasvitech01" target="_blank" rel="noreferrer" className="underline hover:text-black">Twitter</a>
            </li>
            <li className='flex items-start justify-around text-md font-bold flex-row mb-2'>
              <img src="https://manasviportfolio.online/static/media/insta.046af6041ae1fffdc4a7.png" alt="Instagram" className="h-8 rounded-lg "/>
              <a href="https://www.instagram.com/manasvi.technologies?igshid=NTc4MTIwNjQ2YQ%3D%3D" target="_blank" rel="noreferrer" className="underline hover:text-black  ">Instagram</a>
            </li>
            <li className='flex items-start justify-around text-md font-bold flex-row mb-2'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEwAd7UAd7UAd7UAd7UAd7UAd7UAd7UAd7UAd7X///8CcLIAaa5Nj8Hn8/lypMyawNw6hby81+j0+/0ZeLXT5fBnnchdlcOLtNWxzePrILPNAAAACnRSTlMAUn3/Gpo9+Wne3pzmuwAAAMZJREFUKJHNk9sWgiAQRcfQjIZrIOr//2gzRK6K8b3z4JG1UeYGAFz03EtPwNLqRCPAdMaUBmBDg0agV4ZYXAoCvTHMd5JHEaJn+Og/rTAy3GSojE9pPztTGczMELGGbvATRlJWmc3EbQ++7mq/dXTmipbDWhMH4OI3tBUulZEbAR6yKEBXbKiZSXClMi/knNovdJmWoRWsg/j/MB21TV0qWLz31BV6Fl5aeuHyDXVssXXyZe/GKoCxn4CmgSZ+lG7DrPQV4AnbbBfzU77xIAAAAABJRU5ErkJggg==" alt="LinkedIn" className="h-8 rounded-lg"/>
              <a href="#" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col my-4 text-white text-md space-y-2">
          <span className="font-extrabold text-start text-2xl text-white hover:text-black mb-3 ">CONTACT US</span>
          <span>
            <a href="tel:+919302447001" className="underline text-white text-start text-md font-bold hover:text-black text-start">Phone: +919302447001</a>
          </span>
          <span>
            <a href="mailto:manasvitech01@gmail" className="underline text-white text-md font-bold hover:text-black text-start">Email: manasvitech01@gmail</a>
          </span>
          <span className="text-start">Address : Corporate Office: 111B, 80 Feet Road<br /> Old Ashoka Garden, Bhopal (462023)</span>
        </div>
      </div>
    </div>
  );
}


export default Footer

import React from 'react'
import Sidebar from '../../components/Sidebar';

const Overview = () => {
  return (
    <div>
      <button className='border-2 bg-black text-white p-4'>Select a plan to get your first month for Ghc10</button>
      <div>
      <h1>Get ready to sell</h1>
      <p>Here is a guide to get started. As your business grows, you'll get fresh tips and insights here.</p>
      </div>
      <div>
        <p>Setup guide</p>
        <p>Use this personalized guide to get your store up and running.</p>
        <button className='border-2'>0/5 completed</button>
      </div>
      <div>
        <span>Bullet</span>
        <span>Add your first Product</span>
      </div>
      <div>
        <span>Bullet</span>
        <span>Customize your online store</span>
      </div>
      <div>
        <span>Bullet</span>
        <span>Add a custom domain</span>
      </div>
      <div>
        <span>Bullet</span>
        <span>Setup a payment provider</span>
      </div>
      <div>
        <span>Bullet</span>
        <span>Place a test</span>
      </div>
    </div>
  )
}

export default Overview;
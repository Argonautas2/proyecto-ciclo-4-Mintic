import type { NextPage } from 'next';
import React from 'react';
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div className='bg-pink-500'>
    <p> Pagina de Index</p>
    <Link href= '/admin/usuarios'>
    <p className='cursor-pointer'>Ir a admin usuarios</p>
    </Link>
    </div>
  )
}

export default Home


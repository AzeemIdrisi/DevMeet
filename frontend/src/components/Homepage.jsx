import React from 'react'
import NavBar from './NavBar/NavBarHome'

function Homepage() {
	return (
		<>
			<NavBar />
			<div className='flex flex-col items-center justify-center h-full pt-14 pb-48'>
				<img
					className='rounded-full'
					height={380}
					width={380}
					src='/img/logo.svg'
					alt='Logo'
				/>
				<h1 className='text-6xl md:text-9xl'>
					<span className='font-bold'>Dev</span>Meet
				</h1>
				<p className='font-thin text-2xl'>Tech Interviews Made Easy</p>
				<a
					href='/meet'
					className='text-lg m-8 flex p-3 items-center justify-center mx-2 font-thin rounded-md bg-neutral-200 dark:bg-neutral-800'
				>
					Start a Meeting Now
				</a>
				<footer className='absolute bottom-0 pb-2 font-thin text-sm text-gray-300'>
					For Developers by Developers.
				</footer>
			</div>
		</>
	)
}

export default Homepage

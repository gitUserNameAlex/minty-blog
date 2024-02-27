import React, { Suspense, useContext, useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { ThemeContext, Theme } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames'
import './styles/index.scss'


export const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
		<div className={classNames('app', {}, [theme])}>
			<Link to='/'>Main</Link>
			<Link to='/about'>About</Link>
      <button onClick={toggleTheme}>Switch Theme</button>
      <p>Check font here</p>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<MainPageAsync />} />
					<Route path='/about' element={<AboutPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	)
}

import React from 'react'
import SidenavTitle from './SideNavTitle'

const SideNav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="P" subTitle="rojects" />
      <ul className='cursor-pointer'>
        <a href='https://github.com/viddarepos/progreso' target='_blank'>
          <li className="sidenavLi">Progreso</li>
        </a>
        <a href='https://github.com/viddarepos/socialbook' target='_blank'>
          <li className="sidenavLi">Socialbook</li>
        </a>
        <a href='https://github.com/viddarepos/rushhour' target='_blank'>
          <li className="sidenavLi">Rushhour</li>
        </a>
        <a href='https://github.com/viddarepos/graphql' target='_blank'>
          <li className="sidenavLi">GraphQL Session</li>
        </a>
        <a href='https://github.com/viddarepos/github-app' target='_blank'>
          <li className="sidenavLi">Trendalyzer</li>
        </a>
        <a href='https://github.com/viddarepos/chatbot' target='_blank'>
          <li className="sidenavLi">Ai Chatbot</li>
        </a>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul className='cursor-pointer'>
        <li className="sidenavLi">+381 60 6007092</li>
        <li className="sidenavLi">viddadev@gmail.com</li>
      </ul>
    </div>
  )
}

export default SideNav
import React from 'react'
import { ReactComponent as LinkedinIcon } from './icons/linkedin.svg';
import { ReactComponent as YoutubeIcon } from './icons/youtube.svg';
import { ReactComponent as GithubIcon } from './icons/github.svg';
import './style/allStyle.css'

export default function SocialMedia() {
  return (
    <div className='icons'>
         <LinkedinIcon/>
         <YoutubeIcon/>
         <GithubIcon/>
    </div>
   
  )
}

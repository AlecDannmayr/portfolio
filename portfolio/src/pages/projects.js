/** @format */

import * as React from 'react'
import { useState, useEffect } from 'react'
import '../css/style.css'
import '../theme/svgs/css/responsive.css'
//import 'animate.css'
import Styled from "styled-components"
import ProjectImgTwo from '../project-images/image-two.png'
import ProjectImgSix from '../project-images/image-six.png'
import ProjectImgThree from '../project-images/image-three.png'
import ProjectImgFour from '../project-images/image-four.png'
import ProjectImgFive from '../project-images/image-five.png'
import ProjectImgSeven from '../project-images/image-seven.png'
import ProjectImgEight from '../project-images/image-eight.png'
import ProjectImgNine from '../project-images/image-nine.png'
import ProjectImgTen from '../project-images/image-ten.png'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'


const imageContainer = {
    height: '100vh',
    overflow: 'auto',
    marginLeft: '90px',
    marginTop: '0px',
}


const images = [
    {
        img: ProjectImgSix,
        title: 'Arch-Simplified',
        tag: 'Build',
    },
    {
        img: ProjectImgTwo,
        title: 'Cricket Scoreboard',
        tag: 'Build',
    },
    {
        img: ProjectImgThree,
        title: 'Betting Platform',
        tag: 'UX/UI',
    },
    {
        img: ProjectImgEight,
        title: 'SocialWorks',
        tag: 'UX/UI',
    },
    {
        img: ProjectImgNine,
        title: 'VisualSkies',
        tag: 'Build',
    },
    {
        img: ProjectImgFive,
        title: 'SalesImpact.io',
        tag: 'Build',
    },
    {
        img: ProjectImgFour,
        title: 'Honey',
        tag: 'UX/UI',
    },
    {
        img: ProjectImgTen,
        title: 'VisitBritian',
        tag: 'UX/UI',
    },
    {
        img: ProjectImgSeven,
        title: 'DecimalCricket',
        tag: 'UX/UI',
    },
    {
        img: ProjectImgEight,
        title: 'SocialWorks',
        tag: 'UX/UI',
    },
    {
        img: ProjectImgNine,
        title: 'VisualSkies',
        tag: 'Build',
    },
    {
        img: ProjectImgFive,
        title: 'SalesImpact.io',
        tag: 'Build',
    },
    {
        img: ProjectImgFour,
        title: 'Honey',
        tag: 'UX/UI',
    },
    {
        img: ProjectImgTen,
        title: 'VisitBritian',
        tag: 'UX/UI',
    },
    {
        img: ProjectImgSeven,
        title: 'DecimalCricket',
        tag: 'UX/UI',
    },
    {
        img: ProjectImgSix,
        title: 'Arch-Simplified',
        tag: 'Build',
    },
    {
        img: ProjectImgTwo,
        title: 'Cricket Scoreboard',
        tag: 'Build',
    },
    {
        img: ProjectImgThree,
        title: 'Betting Platform',
        tag: 'UX/UI',
    },
    {
        img: ProjectImgEight,
        title: 'SocialWorks',
        tag: 'UX/UI',
    },
    {
        img: ProjectImgNine,
        title: 'VisualSkies',
        tag: 'Build',
    },
    {
        img: ProjectImgFive,
        title: 'SalesImpact.io',
        tag: 'Build',
    },
    {
        img: ProjectImgFour,
        title: 'Honey',
        tag: 'UX/UI',
    },
    {
        img: ProjectImgTen,
        title: 'VisitBritian',
        tag: 'UX/UI',
    },
    {
        img: ProjectImgSeven,
        title: 'DecimalCricket',
        tag: 'UX/UI',
    },
    {
        img: ProjectImgEight,
        title: 'SocialWorks',
        tag: 'UX/UI',
    },
    {
        img: ProjectImgNine,
        title: 'VisualSkies',
        tag: 'Build',
    },
    {
        img: ProjectImgFive,
        title: 'SalesImpact.io',
        tag: 'Build',
    },
    {
        img: ProjectImgFour,
        title: 'Honey',
        tag: 'UX/UI',
    },
    {
        img: ProjectImgTen,
        title: 'VisitBritian',
        tag: 'UX/UI',
    },
    {
        img: ProjectImgSeven,
        title: 'DecimalCricket',
        tag: 'UX/UI',
    },
]

export default function StandardImageList() {
    const [tag, setTag] = useState('all')
    const [filteredImages, setFilteredImages] = useState([])

    useEffect(() => {
        tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter((images) => images.tag === tag))
    }, [tag])
    const TagButton = ({ name, handleSetTag }) => {
        return <button onClick={() => handleSetTag(name)}>{name.toUpperCase()}</button>
    }
    return (
        <div>
            {/*
         <div handleSetTag={setTag} className="tags">
            <TagButton name="all" handleSetTag={setTag} />
            <TagButton name="Build" handleSetTag={setTag} />
            <TagButton name="UX/UI" handleSetTag={setTag} />
         </div>*/}
            <div>
                <ImageList cols={3} className={imageContainer}>
                    {filteredImages.map((item) => (
                        <ImageListItem key={item.img}>
                            <a href={`/images/${item.img}`}></a>
                            <img id="imageContainer" src={`${item.img}?w=164&h=164&fit=crop&auto=format`} srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt={item.title} />
                            <p id="show">{item.title}</p>
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </div>
    )
}

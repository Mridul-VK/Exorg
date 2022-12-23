import React from 'react'
import OrgTypeCard from '../components/OrgTypeCard'
import createIcon from '../assets/createIcon.svg'
import addFriend from '../assets/addFriend.svg'

interface card {
    image: string,
    btn: string,
    name: string,
    color: string
}

const createCard = { image: createIcon, btn: "Create", name: "New Organization", color: "emerald-400" }
const downloadCard = { image: addFriend, btn: "Download", name: "Existing Organization", color: "white" }

const Home = () => {
    const orgTypes: card[] = [createCard, downloadCard]
    return (
        <div className='bg-gray-900 text-white h-screen min-w-full container text-center py-16 mx-auto'>
            <h1 className='text-6xl'>Welcome to <span className='font-bold text-emerald-400'>Exorg</span></h1>
            <div className="flex justify-around h-96 w-3/4 mx-auto pt-24 px-32">
                {
                    orgTypes.map((orgType, index) => {
                        return (<OrgTypeCard key={index} cardtype={orgType} />)
                    })
                }
            </div>
        </div>
    )
}

export default Home
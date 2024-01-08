import { UilMultiply } from '@iconscout/react-unicons'

const Info = ({ showInfo, setShowInfo }) => {
    return (
        <div className='min-h-screen w-full bg-black/50 backdrop-blur-2xl absolute top-0 overflow-hidden p-10'>
            <h1 className="font-black text-7xl">DevMeet</h1>
            <span className='font-thin text-xl m-1'>Coding Interview Platform</span>
            <button title='Close' className="absolute top-0 right-0 p-2 m-10" onClick={_ => setShowInfo(false)}><UilMultiply color='#fff' className='close-icon' /></button>
            <h2 className="font-bold text-3xl mt-10">How to use?</h2>
            <ol className='list-decimal font-thin text-lg m-2 ml-10'>
                <li>Enter your name</li>
                <li>Copy your Meet ID</li>
                <li>Share your Meet ID and ask them to paste your Meet ID and call you</li>
                <li>You will get an invitation to join the call</li>
                <li>Join the call</li>
                <li>Start Coding</li>
                <li>Voila 🎉</li>
            </ol>
        </div>
    )
}

export default Info
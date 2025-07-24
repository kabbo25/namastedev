import {useEffect, useRef, useState} from "react";


const App = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const [clockState, setClockState] = useState('stopped');
    const clockId = useRef(null);
   useEffect(()=>{
      if(clockState !== 'running') return;

      clockId.current = setInterval(()=>{
         setCurrentTime(prev=>prev+1000);
      },1000);
   },[clockState]) ;
    const handleStart = ()=>{
        setClockState('running');
    }
    const handlePause = ()=>{
        clearInterval(clockId.current);
        setClockState('stopped');
    }
    const formatTime = (seconds)=>{
       return `${Math.floor(seconds/(60*1000)).toString().padStart(2,'0')} : ${((seconds/1000)%60).toString().padStart(2,'0')}`
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-8">
                    {formatTime(currentTime)}
                </h1>
                <button
                    onClick={handleStart}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                    Start
                </button>
                <button
                    onClick={handlePause}
                    className="ml-3 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                   pause
                </button>
            </div>
        </div>
    )

}
export default App;

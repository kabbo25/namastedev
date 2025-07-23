import {useEffect, useRef, useState} from "react";


const App = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [clockState, setClockState] = useState('stopped');
    const startTime = useRef(new Date());
    const clockId = useRef(null);
   useEffect(()=>{
      if(clockState !== 'running') return;
      startTime.current = new Date();
      clockId.current = setInterval(()=>{
         setCurrentTime(new Date());
      },1000);
   },[clockState]) ;
    const handleStart = ()=>{
        setClockState('running');
    }
    const handlePause = ()=>{
        clearInterval(clockId.current);
        setClockState('stopped');
    }
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-8">
                    {(currentTime.getSeconds()-startTime.current.getSeconds()+60)%60}
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

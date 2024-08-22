import {voices} from '../../data/voices';
import { useState } from 'react';

function Content() {
  const [text, setText] = useState("")
  const [selectedVoice, setselectedVoice] = useState(Number);
  const [loading, setloading] = useState(false);
  const [audioSrc, setAudioSrc] = useState("");
  


  const mokeFucntion= () => {
    setloading(true)
    const selectedVoiceData = voices.find(voice => voice.id === selectedVoice)
    if(selectedVoiceData){
      setAudioSrc(selectedVoiceData.voice)
    }else{
      setAudioSrc("")
    }
    setTimeout(() => {
      setloading(false)
    }, 2000)
  }
    return (
      <div className="container-fluid content mx-auto mt-8 p-6 bg-neutral-800 text-white rounded shadow-lg shadow-gray-800">
        <h2 className="text-2xl font-bold mb-4">Text to Speech</h2>

        {/* input field */}
        <div className="mb-4">
          <label htmlFor="text-input" className="block text-lg font-medium mb-2">Enter Text: </label>
          <input className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="text-input" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Type here"/>
        </div>

         {/* Dropdown */}
         <div className="mb-4">
          <label htmlFor="voice-select" className="block text-lg font-medium mb-2">Select Voice: </label>
          <select id="voice-select" value={selectedVoice} onChange={(e)=> setselectedVoice(Number(e.target.value))} className=" px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="select-voice">Select voice</option>
            {voices.map((voice)=> (<option key={voice.id}value={voice.id}>{voice.name}</option>))}
            
          </select>
        </div>

        {/* Button */}
        <div className="mb-4">
          <button onClick = {mokeFucntion} disabled={loading || !text} className={`w-full py-2 rounded-md ${loading || !text ? "bg-neutral-400 cursor-not-allowed": "bg-green-700 hover:bg-green-900 text-white"}`}>{loading ? "Generating..." : "Genertate Voice"}</button>
          
        </div>

        {/* Audio */}
        {audioSrc && (
           <div className="mb-4">
           <audio controls src={audioSrc}></audio>
         </div>
        )}
       
      </div>
    );
  }
  
  export default Content;
  
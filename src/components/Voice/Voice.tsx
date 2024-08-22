import {voices} from '../../data/voices';
import { useState } from 'react';

function Voice() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredVoices = voices.filter((voice) => voice.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
      <div className="container-fluid voice mx-auto mt-8 p-6 bg-neutral-800 text-white rounded shadow-lg shadow-gray-800">
        <h2 className="text-2xl font-bold mb-4"> Available Voices </h2>
        {/* search */}
        <div className="mb-4">
          <label htmlFor="text-input" className="block text-lg font-medium mb-2">Enter Text: </label>
          <input type="text" className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"  id="text-input" value={searchTerm} placeholder="Search voices" onChange={(e)=> setSearchTerm(e.target.value)}/>
        </div>

        {/* grid */}
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredVoices.length > 0? (filteredVoices.map((voice)=>(<div className="p-4 border rounded-md flex flex-col items-center text-center bg-neutral-700 text-white">
            <img src={voice.thumbnail} alt={voice.name} className="rounded-full w-24 h-24 mb-4"/>
            <h3 className="text-lg font-medium">{voice.name}</h3>
          </div>))) : (<p>No voices</p>)}
          
        </div>
      </div>
    );
  }
  
  export default Voice;
  
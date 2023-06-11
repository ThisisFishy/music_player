import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

type Props = {
  onSearch: (items: any[]) => void;
};

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 1,
        key: 'AIzaSyAdjIQ2HYt5YOHxhtItyrrOG_-ZaVelO8g',
        type: 'video'
      }
    });

    onSearch(response.data.items);
    setTerm(''); // this line clears the input field after search
  };

  return (
    <div>
        <form onSubmit={onSubmit} className="mt-5">
            <input type="text" value={term} onChange={onInputChange} placeholder="Search..." className="py-2 px-4 border rounded text-black bg-gray-200 mr-2" />
            <button type="submit" className="py-2 px-4 bg-green-500 text-white rounded">Submit</button>
        </form>
    </div>
  );
};

export default SearchBar;
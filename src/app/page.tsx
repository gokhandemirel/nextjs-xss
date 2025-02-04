'use client';

import { useState } from 'react';
import DOMPurify from 'dompurify';

export default function Home() {
  const [content, setContent] = useState('');

  const onSubmit = () => {
    const filtered = DOMPurify.sanitize(content);
    alert(filtered);
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex flex-col items-end gap-2 w-[400px]"> 
        <label className="self-start">Nextjs Xss Filter</label>
        <textarea
          className="w-full h-[120px] p-3 border resize-none outline-none"
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="p-3 bg-gray-600 text-white cursor-pointer" onClick={() => onSubmit()}>
          Gönder
        </div>
      </div>
    </div>
  );
}

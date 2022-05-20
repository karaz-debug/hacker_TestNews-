import React from 'react'

function Card({ title, points, author, objectID }) {
  return (
    <div key={objectID} className="rounded-xl bg-[#161f34] p-4">
      <h2 className="mb-4 text-2xl font-bold text-white">{title}</h2>
      <ul className="flex items-center justify-between">
        <li className="font-bold text-slate-400">Points: {points}</li>
        <li>
          <a href="" className="underline text-slate-400 hover:text-white">
            Read More
          </a>
        </li>
      </ul>
      <p className="mt-4 mb-4 text-slate-400">Author: {author}</p>
    </div>
  )
}

export default Card

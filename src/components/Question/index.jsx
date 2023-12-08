import React, { useState } from 'react'
import cn from '../../libs/utils'

export default function Question({
    q,
    setIdSelected,
    idSelected,
    setScore,
    score,
}) {
    console.log(q)
    const [response, setResponse] = useState(null)

    return (
        <div className='flex h-[90%] w-[80%] flex-col gap-4 bg-slate-100 '>
            <div className='my-5'>{q.question}</div>
            <div className='flex flex-col items-center justify-center '>
                {q.options.map((opt) => (
                    <button
                        key={opt.id}
                        className={`my-5 flex w-[80%] items-center justify-center ${
                            response != null && opt.isCorrect
                                ? 'bg-lime-500'
                                : response != null &&
                                    !opt.isCorrect &&
                                    q.id === idSelected
                                  ? 'bg-red-700'
                                  : 'bg-white'
                        }`}
                        onClick={() => {
                            setResponse(opt.isCorrect)
                            setIdSelected(opt.id)
                            console.log(opt.isCorrect)
                            if (opt.isCorrect == 'true') {
                                setScore((score) => {
                                    score + 1
                                })
                            }
                        }}
                    >
                        <p>{opt.option}</p>
                    </button>
                ))}
            </div>
        </div>
    )
}

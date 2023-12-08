'use client'

import React, { useState } from 'react' // Import React if not already done
import { Stepper } from 'react-form-stepper'
import Question from '../components/Question'
import { tunisia } from '../test'
import { TiTick } from 'react-icons/ti'
import { MdOutlineClose } from 'react-icons/md'

const Page = ({ params }) => {
    const [stepperState, setStepperState] = useState(0)
    const [selected, setSelected] = useState(false)
    const [idSelected, setIdSelected] = useState(null)
    const [score, setScore] = useState(0)
    const [finish, setFinish] = useState(false)
    console.log(params)
    console.log(tunisia)
    console.log(
        tunisia.map((q) => {
            console.log(q.id === stepperState)
        })
    )

    return (
        <div className='flex h-full w-full flex-row items-center justify-center bg-lime-700'>
            <div className='justify-first flex h-full w-[40%] flex-col items-center bg-slate-900'>
                <div className='my-2 flex h-[5%] w-[80%] items-center justify-center bg-slate-600'>
                    <h1 className='text-3xl text-slate-300'>{params.slug}</h1>
                </div>
                {finish === true ? (
                    <>
                        <div className='flex h-[50%] w-[80%] items-center justify-center gap-3 bg-slate-200 '>
                            <h1 className='bold text-4xl font-bold text-gray-900'>
                                {score}/{tunisia.length}
                            </h1>
                            {score == tunisia.length ? (
                                <TiTick size={45} color={'#00aa00'} />
                            ) : (
                                <MdOutlineClose size={45} color={'#aa0000'} />
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <div className='  flex w-[80%] justify-center bg-white'>
                            <Stepper
                                className='  w-[80%]'
                                steps={tunisia.map((q, index) => {
                                    return { label: ` ` }
                                })}
                                activeStep={stepperState}
                            />
                        </div>
                        <Question
                            setFinish={setFinish}
                            score={score}
                            setScore={setScore}
                            setSelected={setSelected}
                            setIdSelected={setIdSelected}
                            idSelected={idSelected}
                            key={stepperState}
                            q={
                                tunisia.filter((q) => {
                                    return q.id == stepperState
                                })[0]
                            }
                        />
                        {stepperState + 1 < tunisia.length ? (
                            <button
                                className='mt-2 w-[80%] rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700'
                                onClick={() => {
                                    setStepperState(stepperState + 1)
                                }}
                            >
                                next
                            </button>
                        ) : (
                            <button
                                className=' mt-2 w-[80%] rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700'
                                onClick={() => {
                                    setFinish(true)
                                }}
                            >
                                finish
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default Page

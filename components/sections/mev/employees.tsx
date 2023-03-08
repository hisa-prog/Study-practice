import React, { useState, useEffect } from 'react'
import { employees } from '../../data/employeesData'

export default function Employees() {
    return (
            <div className={`mx-auto`}>
                {employees.map((item, index) => (
                    <div className='relative'>
                        <div className="absolute top-0 bg-cover bg-mainBgDark bg-center bg-blend-darken w-full h-screen z-0"></div>
                        <div key={index}
                            className={`lg:h-screen flex flex-col lg:flex-row relative ${index === 13 ? '' : ''} font-mono`}
                            >
                            <div className={`pt-10 my-auto lg:pl-10 w-full px-4 md:px-8`}>
                                <div className={`maw-w-[935px] lg:w-8/12`}>
                                    <h2 className={`text-3xl md:text-4xl-m lg:whitespace-pre lg:text-6xl-l font-bold mb-4 lg:mb-0`}>{item.title}</h2>
                                </div>
                                <div className={`lg:w-6/12 lg:mt-8`}>
                                    <p className={`text-sm md:text-lg lg:text-2xl-m-l whitespace-pre-wrap lg:whitespace-pre`}>{item.subtitle}</p>
                                </div>
                            </div>
                            <div className={`flex flex-col-reverse lg:items-end rounded-b-lg md:px-8 lg:px-0`}>
                                <img className={`hidden absolute bottom-0 right-0 lg:block lg:max-w-[500px] xl:max-w-[700px]`} src={item.img} alt='' />
                                <img className={`lg:hidden mt-4`} src={item.mobImg} alt='' />
                                <div className={`absolute bg-black backdrop-blur-12px mx-4 mb-4 md:mx-0 md:mb-0 mt-10 lg:mt-0 bg-opacity-60 rounded-l-lg rounded-r-lg lg:rounded-r-none lg:rounded-t-lg p-3 md:p-4 w-[92vw] lg:w-[511px] lg:h-[139px] lg:absolute lg:right-0 lg:bottom-0`}>
                                    <p className={`text-base lg:text-xl mb-2 md:mb-3 font-medium`}>{item.name}</p>
                                    <p className={`text-xs md:text-lg-xs-s whitespace-pre-wrap lg:whitespace-pre`}>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    )
}
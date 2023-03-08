import { useRouter } from "next/router"
import { useState } from "react"

interface ICareersVacancy {
    name: any
    link: any
    key: any
}

const CareersVacancy = ({name, link, key} : ICareersVacancy) => {
    const [isClear, setIsClear] = useState(false)
    const router = useRouter()

    return (
        <div key={key} className="col-span-full mt-2 md:mt-12 py-4 flex-col md:flex-row flex items-start md:items-center md:justify-between border-b border-lines-primary">
            <p className="font-lexendDeca text-2xl-l">{name}</p>
            <div className="flex-row-reverse md:flex-row flex items-center mt-5 md:mt-0">
                <p className={`${isClear ? 'opacity-100' : 'opacity-0'} transition-all duration-500
                font-lexendDeca text-xs text-blue-hover ml-5 md:ml-0 md:mr-6`}>Oops! Sorry, not today.</p>
                <div onClick={() => {
                    if(!link) {
                        setIsClear(true)
                    } else if(link) {
                        router.push(`${link}`)
                    }
                }} className={`${!isClear && "cursor-pointer hover:text-blue-hover active:text-blue-active"} flex items-center`}>
                    <p className="font-lexendDeca uppercase text-xs text-gray-text mr-1.5">View</p>
                    <img src='/images/careers/arrow-right.svg' alt='arrow-right' className="" />
                </div>
            </div>
        </div>
    )
}
export default CareersVacancy
import { useEffect, useState } from "react"

enum EBrakePoint {
    MOBILE = 768,
    TABLET = 1024,
    NETBOOK = 1280,
    LAPTOP = 1440,
    PC = 1920
}

const useResize = () => {
    const [res, setRes] = useState({ isMobile: false, isTablet: false, isNetbook: false, isLaptop: false, isPc: false })

    useEffect(() => {
        const a = () => {
            //@ts-ignore
            setRes(() =>
                (() => {
                    if (window.innerWidth <= EBrakePoint.MOBILE)
                        return { isMobile: true, isTablet: false, isNetbook: false, isLaptop: false, isPc: false }
                    if (EBrakePoint.MOBILE < window.innerWidth && window.innerWidth <= EBrakePoint.TABLET)
                        return { isMobile: false, isTablet: true, isNetbook: false, isLaptop: false, isPc: false }
                    if (EBrakePoint.TABLET < window.innerWidth && window.innerWidth <= EBrakePoint.NETBOOK)
                        return { isMobile: false, isTablet: false, isNetbook: true, isLaptop: false, isPc: false }
                    if (EBrakePoint.NETBOOK < window.innerWidth && window.innerWidth <= EBrakePoint.LAPTOP)
                        return { isMobile: false, isTablet: false, isNetbook: false, isLaptop: true, isPc: false }
                    if (EBrakePoint.LAPTOP < window.innerWidth)
                        return { isMobile: false, isTablet: false, isNetbook: false, isLaptop: false, isPc: true }
                })()
            )
        }
        a()
        window.addEventListener('resize', a)
        return () => { window.removeEventListener('resize', a) }
    }, [])
    return res
}
export default useResize
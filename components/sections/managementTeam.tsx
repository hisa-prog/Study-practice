import React from "react"
import { FormattedHTMLMessage } from "../atoms/FormattedMessage"
import Line from "../atoms/line"
import Container from "../wrappers/gridContainer"

const managementTeamList = [
    "0", '2', '4', '6', '1', '3', '5', '7',
]

const ManagementTeam = () => {
    return (
        <div>
            <Line />
            <Container className="gap-y-0 py-[80px] h-screen">
                <div className="col-span-4 md:col-span-8 lg:col-span-10 lg:col-start-2">
                    <div className={`text-[36px] leading-[40px] lg:text-[60px] lg:leading-[67px] 
                    md:text-center uppercase font-blinker mb-6 font-bold tracking-[0.03em] mr-6 md:mr-0`}>
                        {/* Management team */}
                        <FormattedHTMLMessage id='page.main.managementTeam.title' />
                    </div>
                    <div className={`text-base lg:text-[20px] lg:leading-[35px] md:text-center 
                    mb-10 lg:mb-0 font-lexendDeca tracking-[0.03em]`}>
                        {/* We have a top management team that is diverse in terms of its members' functional backgrounds, education and company tenure. */}
                        <FormattedHTMLMessage id='page.main.managementTeam.subtitle' />
                    </div>
                </div>
                <div className="w-full col-span-4 md:col-span-8 lg:col-span-10 lg:col-start-2 gap-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 mx-auto">
                    {
                        managementTeamList.map((item, index) => {
                            return (
                                <img className="mx-auto" key={`management_${index}`} src={`/images/management/${item}.png`} alt='' />
                            )
                        })
                    }
                </div>
            </Container>
            <Line />
        </div>
    )
}

export default ManagementTeam
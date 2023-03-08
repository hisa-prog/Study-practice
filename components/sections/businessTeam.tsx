import React from 'react'
import 'swiper/css/pagination'
import 'swiper/css'
import TeamBlock from './team/teabBlock'
import { FormattedHTMLMessage } from '../atoms/FormattedMessage'

const team: Array<{ img: string; name: string }> = [
    {img: 'ave', name: 'Nataly Ave'},
    {img: 'semerikova', name: 'Nataliya S.'},
    {img: 'burieva', name: 'Layli B.'},
    {img: 'dziatkovskii', name: 'Anton Dziatkovskii'},
    {img: 'forbes', name: 'John Forbes'},
    {img: 'erhan', name: 'Anzhelika Erhan'},
    {img: 'safronov', name: 'Anton S. '},
]

const BusinessTeam = () => {
    return (
        <TeamBlock team={team} teamName={'business'}
                //    title={<span>platinum business&nbsp;team</span>}
                title={<FormattedHTMLMessage id='page.main.teams.business' />}
                   />
    )
}

export default BusinessTeam

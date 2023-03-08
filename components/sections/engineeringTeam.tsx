import React from 'react'
import 'swiper/css/pagination'
import 'swiper/css'
import TeamBlock from './team/teabBlock'
import { FormattedHTMLMessage } from '../atoms/FormattedMessage'

const team: Array<{ img: string; name: string }> = [
    {img: 'magomed', name: 'Rasul Magomed'},
    {img: 'ezerskaja', name: 'Kate Es.'},
    {img: 'k', name: 'Federico К'},
    {img: 'po', name: 'Serge Po'},
    {img: 'deni', name: 'Basil Deni'},
    {img: 'stark', name: 'Tim Stark'},
    {img: 'adil', name: 'Alex Adil'},
    {img: 'rustamov', name: 'Khayrullo R.'},
    {img: 'olzhas', name: 'Olzhas'},
    {img: 'karyukin', name: 'Stanislav K.'},
    {img: 'karyukinD', name: 'Denis K.'},
]

const EngineeringTeam = () => {
    return (
        <TeamBlock team={team} teamName={'engineering'}
                //    title={<span>Engineering<br/>team</span>}
                title={<FormattedHTMLMessage id='page.main.teams.engineering' />}
                   />
    )
}
export default EngineeringTeam

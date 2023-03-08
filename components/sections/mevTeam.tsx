import React from 'react'
import 'swiper/css/pagination'
import 'swiper/css'
import TeamBlock from './team/teabBlock'
import { FormattedHTMLMessage } from '../atoms/FormattedMessage'

const team: Array<{ img: string; name: string }> = [
    {img: 'ovi', name: 'Kate Ovi'},
    {img: 'kant', name: 'Alena Kant'},
    {img: 'mamyth', name: 'Meko Mamyth'},
    {img: 'lee', name: 'Nataly Lee'},
    {img: 'drobyshevska', name: 'Xenia D.'},
    {img: 'thompson', name: 'Aiza Thompson'},
    {img: 'generator', name: 'Purr Generator'},
    {img: 'd', name: 'Nguyễn D'},
    {img: 'strange', name: 'Dr. Strange'},
    {img: 'lin', name: 'Eric Lin'},
    {img: 'huang', name: 'I-Chan Huang'},
    {img: 'ma', name: 'Michael Ma'},
    {img: 'peng', name: 'Jia Peng'},
    {img: 'tong', name: 'Michael Tong'},
    {img: 'shen', name: 'Stefan Shen'},
    {img: 'wang', name: 'Tomas Wang'},
]

const MevTeam = () => {
    return (
        <TeamBlock team={team} teamName={'mev'}
                //    title={'Mev team'}
                title={<FormattedHTMLMessage id='page.main.teams.mev' />}
                   />
    )
}

export default MevTeam
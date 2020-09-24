import React, { useState, lazy } from 'react'
import {
    CBadge,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import InputCard from './SelectionCard'
import { inputConstants } from '../../data/powerbuilder'

const Inputs = () => {
    const { input1, input2, input3, accessory1, accessory2, accessory3 } = inputConstants
    const [selections, setSelections] = useState({
        bench1rm: 25,
        squat1rm: 25,
        deadlift1rm: 25,
        accessory1: 'Dumbbell Row',
        accessory2: 'Military Press',
        accessory3: 'Weighted Pull Up'
    });
    return (
        <>
            <CRow>
                <InputCard color='gradient-info' header={`${selections.bench1rm} kg`} text={`${input1.exercise} 1RM`} className='no-pb-0' />
                <InputCard color='gradient-info' header={`${selections.squat1rm} kg`} text={`${input2.exercise} 1RM`} className='no-pb-0' />
                <InputCard color='gradient-info' header={`${selections.deadlift1rm} kg`} text={`${input3.exercise} 1RM`} className='no-pb-0' />
                <InputCard color='gradient-primary' header={selections.accessory1} text={accessory1.type} className='no-pb-0' />
                <InputCard color='gradient-primary' header={selections.accessory2} text={accessory2.type} className='no-pb-0' />
                <InputCard color='gradient-primary' header={selections.accessory3} text={accessory3.type} className='no-pb-0' />
            </CRow>
        </>
    )
}

export default Inputs

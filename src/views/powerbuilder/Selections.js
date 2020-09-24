import React, { useContext, useState, lazy } from 'react'
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
import { AuthContext } from "../../services/auth.service";

const Inputs = () => {
    const { currentUser } = useContext(AuthContext);
    const { bench1rm, squat1rm, deadlift1rm } = currentUser
    const { input1, input2, input3, accessory1, accessory2, accessory3 } = inputConstants
    const [selections, setSelections] = useState({
        accessory1: 'Dumbbell Row',
        accessory2: 'Military Press',
        accessory3: 'Weighted Pull Up'
    });
    return (
        <>
            <CRow>
                <InputCard color='gradient-info' header={`${bench1rm} kg`} text={`${input1.exercise} 1RM`} className='no-pb-0' />
                <InputCard color='gradient-info' header={`${squat1rm} kg`} text={`${input2.exercise} 1RM`} className='no-pb-0' />
                <InputCard color='gradient-info' header={`${deadlift1rm} kg`} text={`${input3.exercise} 1RM`} className='no-pb-0' />
            </CRow>
            <CRow>
                <InputCard color='gradient-primary' header={selections.accessory1} text={accessory1.type} className='no-pb-0' />
                <InputCard color='gradient-primary' header={selections.accessory2} text={accessory2.type} className='no-pb-0' />
                <InputCard color='gradient-primary' header={selections.accessory3} text={accessory3.type} className='no-pb-0' />
            </CRow>
        </>
    )
}

export default Inputs

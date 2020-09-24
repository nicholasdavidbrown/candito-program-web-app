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
    CDataTable,
    CRow,
    CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import ExerciseCard from './ExerciseCard'
import { inputConstants } from '../../data/powerbuilder'
import candito from '../../data/candito'

import { firebaseUser } from '../../utils/firebase'
import { AuthContext } from "../../services/auth.service";

import { convertDateToString, findCurrentWeek } from '../../utils/date'

const Workout = () => {
    const { currentUser } = useContext(AuthContext);
    // Find current date and work out what week/day of routine it is
    // Day 1 of routine = startDate
    console.log(currentUser)
    const { startDate } = currentUser
    const today = new Date()
    const week = findCurrentWeek(today, startDate)
    console.log(week)

    const { input1, input2, input3, accessory1, accessory2, accessory3 } = inputConstants

    const setData = [
        { id: 0, set: '1', reps: '2-4', weight: '80kg' },
        { id: 1, set: '1', reps: '2-4', weight: '80kg' },
        { id: 2, set: '1', reps: '2-4', weight: '80kg' },
        { id: 3, set: '1', reps: '2-4', weight: '80kg' }
    ]

    const data = {
        order: 1,
        exercise: 1,
        setData,
    }

    return (
        <>
            <CRow>
                <ExerciseCard data={data} color='gradient-info' header={`kg`} text={`1RM`} className='no-pb-0' />
            </CRow>
        </>
    )
}

export default Workout

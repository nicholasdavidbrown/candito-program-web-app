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

import ErrorCard from './ErrorCard'
import RestDayCard from './RestDayCard'
import ExerciseCard from './ExerciseCard'
import { inputConstants } from '../../data/powerbuilder'
import candito from '../../data/candito'

import { firebaseUser } from '../../utils/firebase'
import { AuthContext } from "../../services/auth.service";

import { convertDateToString, findCurrentWeek, dayNumToString } from '../../utils/date'
import { getExerciseFromId } from '../../utils/exerciseFunctions'

const Workout = () => {
    const { currentUser } = useContext(AuthContext);
    const { input1, input2, input3, accessory1, accessory2, accessory3 } = inputConstants
    const colours = ['gradient-info', 'gradient-primary', 'gradient-warning', 'gradient-danger']

    // Find current date and work out what week/day of routine it is
    console.log(currentUser)
    const { startDate } = currentUser
    const today = new Date('2020-09-25')

    let week = findCurrentWeek(today, startDate)
    const weekRef = `week${week}`

    if (weekRef in candito) {
        const currentRoutineWeek = candito[weekRef]
        const dayToday = today.getDay()
        const currentDayString = dayNumToString(dayToday)
        console.log(currentDayString)

        console.log(currentRoutineWeek)
        const currentRoutineDay = currentRoutineWeek[currentDayString]
        if (currentRoutineDay.length === 0) {
            return (
                <>
                    <CRow>
                        <RestDayCard />
                    </CRow>
                </>
            )
        }

        let exerciseCardArray = []
        let setData = []
        let info

        for (let index = 0; index < currentRoutineDay.length; index++) {
            const element = currentRoutineDay[index];
            const { exercise_id, sets, unique, setOrder } = element
            info = getExerciseFromId(exercise_id, currentUser)
            sets.forEach(element2 => {
                const { order, reps, weight } = element2
                const id = order
                const set = order + 1
                let weightNum
                if (weight === 0) {
                    weightNum = 'Max'
                } else {
                    weightNum = `${2.5 * Math.ceil((info.weight * weight) / 2.5)} kg`
                }
                const setObject = { id, set, reps, weight: weightNum }
                setData.push(setObject)
            });
            const exData = {
                exercise: info.name,
                order: setOrder,
                setData
            }
            // console.log(exData)
            exerciseCardArray.push(exData)
            setData = []
        }

        // console.log(exerciseCardArray)

        let items = []
        exerciseCardArray.forEach((element, index) => {
            items.push(
                <ExerciseCard data={element} color={colours[index]} className='no-pb-0' />
            )
        });

        return (
            <>
                <CRow>
                    {items}
                </CRow>
            </>
        )

    } else {
        return (
            <>
                <CRow>
                    <ErrorCard />
                </CRow>
            </>
        )
    }


}

export default Workout

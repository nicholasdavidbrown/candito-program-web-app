import React, { useEffect, useLayoutEffect, useContext, useState, lazy } from 'react'
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

import ExerciseCard from '../../components/ExerciseCard'

const { fetchAllExercises } = require('../../api/firebase/exercises')

const Workout = () => {
    const [loading, setLoading] = useState(true);
    const [exercisesList, setExercisesList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetchAllExercises()
                console.log('response', response);
                setExercisesList(response);
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <CRow>
                {(loading || exercisesList === []) ? (
                    null
                ) : (
                        exercisesList.map((element, index) => {
                            return <ExerciseCard text={element.name} key={index} />
                        })
                    )}
            </CRow>
        </>
    )
}

export default Workout

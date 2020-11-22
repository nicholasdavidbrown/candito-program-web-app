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

import { AuthContext } from "../../services/auth.service";

import ExerciseCard from '../../components/ExerciseCard'
import ExerciseSearchCard from '../../components/ExerciseSearchCard'

import Cards from '../base/cards/Cards'

const { fetchAllExercises } = require('../../api/firebase/exercises')
const { filterObjectByName } = require('../../utils/search')

const Workout = () => {
    const { currentUser } = useContext(AuthContext);
    const { exerciseLog } = currentUser
    const [loading, setLoading] = useState(true);
    const [exercisesList, setExercisesList] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetchAllExercises()
                console.log('response', response);
                setExercisesList(response);
                setLoading(false);
            } catch (err) {
                console.log('Error logging from fetchAllExercises')
                console.error(err);
            }
        };
        fetchData();
    }, []);

    const updateSearch = (value) => {
        setSearch(value)
    }

    const renderExercises = () => {
        if (search !== '') {
            const filteredList = filterObjectByName(exercisesList, search)
            return filteredList.map((element, index) => {
                return <ExerciseCard searchTerm={search} exercisesList={exercisesList} text={element.name} key={index} />
            })
        } else {
            return exercisesList.map((element, index) => {
                return <ExerciseCard searchTerm={search} exercisesList={exercisesList} text={element.name} key={index} />
            })
        }
    }

    return (
        <>
            <CRow>
                <ExerciseSearchCard searchValue={search} updateSearch={updateSearch} />
                {(loading || exercisesList === []) ? (
                    null
                ) : (
                        renderExercises()
                    )}
                {/* <Cards /> */}
            </CRow>
        </>
    )
}

export default Workout

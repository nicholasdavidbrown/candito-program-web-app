import React, { useEffect, useLayoutEffect, useContext, useState, lazy } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import usersData from './UsersData'

import { capitalize, urlize, unUrlize } from '../../utils/strings'

const { fetchAllExercises } = require('../../api/firebase/exercises')

const WeightLog = ({ match, location }) => {
    const [exercisesList, setExercisesList] = useState([]);
    const [loading, setLoading] = useState(true);

    // This is used because if the page is navigated to without props, it needs the exercise data
    useEffect(() => {
        if (!location.state) {
            const fetchData = async () => {
                console.log('Making API call')
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
        } else {
            console.log('Assigning via props')
            setExercisesList(location.state.exercisesList)
        }
    }, []);

    const exerciseItem = exercisesList.find(ex => urlize(ex.name.toString()) === match.params.id)
    const exerciseDetails = exerciseItem ? Object.entries(exerciseItem) :
        [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

    console.log(location.state)

    return (
        <CRow>
            <CCol lg={6}>
                <CCard>
                    <CCardHeader>
                        <h2>{unUrlize(match.params.id)}</h2>
                    </CCardHeader>
                    <CCardBody>
                        <table className="table table-striped table-hover">
                            <tbody>
                                {
                                    exerciseDetails.map(([key, value], index) => {
                                        return (
                                            <tr key={index.toString()}>
                                                <td>{`${key}:`}</td>
                                                <td><strong>{value}</strong></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default WeightLog

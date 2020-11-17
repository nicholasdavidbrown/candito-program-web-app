import React, { useContext, useState, lazy } from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import {
    CButton,
    CBadge,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CRow,
    CCollapse,
    CFade,
    CSwitch,
    CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { capitalize, urlize } from '../../utils/strings'

const StyledCard = styled.div`
    .nextto {
        display: inline-block;
    }
`

const ExerciseCard = (props) => {
    const history = useHistory()
    const [collapsed, setCollapsed] = React.useState(true)
    const [showCard, setShowCard] = React.useState(true)

    const navigateToExercise = () => {
        history.push({
            pathname: `/users/${urlize(props.text)}`,
            state: { exercisesList: props.exercisesList }
        })
    }

    return (
        <>
            <CCol xs="12" sm="6" md="4">
                <CFade in={showCard}>
                    <CCard>
                        <CCardHeader>
                            {capitalize(props.text)}
                            <div className="card-header-actions">
                                <CLink className="card-header-action">
                                    <CIcon name="cil-settings" />
                                </CLink>
                                <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                                    <CIcon name={collapsed ? 'cil-chevron-bottom' : 'cil-chevron-top'} />
                                </CLink>
                                <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                                    <CIcon name="cil-x-circle" />
                                </CLink>
                            </div>
                        </CCardHeader>
                        <CCollapse show={collapsed}>
                            <CCardBody>
                                <StyledCard>
                                    <p className='nextto'>Workout</p>
                                    <CButton className='nextto' block color="primary" onClick={() => navigateToExercise()}>View</CButton>
                                </StyledCard>
                            </CCardBody>
                        </CCollapse>
                    </CCard>
                </CFade>
            </CCol>
        </>
    )
}

// xs ?: columnProps;
// sm ?: columnProps;
// md ?: columnProps;
// lg ?: columnProps;
// xl ?: columnProps;

export default ExerciseCard

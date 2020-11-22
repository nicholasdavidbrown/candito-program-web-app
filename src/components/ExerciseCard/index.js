import React, { useContext, useState, lazy } from 'react'
import { useHistory } from "react-router-dom"
import styled from 'styled-components'
import Highlighter from "react-highlight-words"
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

import { capitalize, urlize, boldString } from '../../utils/strings'
import { AuthContext } from "../../services/auth.service";

const StyledCard = styled.div`
    .nextto {
        display: inline-block;
    }
`

const ExerciseCard = (props) => {
    const history = useHistory()
    const { currentUser } = useContext(AuthContext);
    const [collapsed, setCollapsed] = React.useState(false)
    const [showCard, setShowCard] = React.useState(true)

    let currentWeight = 'Default'
    if (currentUser.weightLog && currentUser.weightLog[urlize(props.text)]) currentWeight = '20'

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
                    <CCard color="info" className="text-white">
                        <CCardHeader>
                            {typeof props.searchTerm === 'string' ? <Highlighter
                                highlightClassName="searchHighlight"
                                searchWords={[props.searchTerm]}
                                autoEscape={true}
                                textToHighlight={capitalize(props.text)}
                            /> : capitalize(props.text)}
                            <div className="card-header-actions">
                                <CLink className="card-header-action">
                                    {/* <CIcon name="cil-settings" /> */}
                                    <p>{currentWeight}</p>
                                </CLink>
                                {/* <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                                    <CIcon className="text-white" name={collapsed ? 'cil-chevron-top' : 'cil-chevron-bottom'} />
                                </CLink> */}
                                {/* <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                                    <CIcon name="cil-x-circle" />
                                </CLink> */}
                            </div>
                        </CCardHeader>
                        {/* <CCollapse show={collapsed}>
                            <CCardBody>
                                <StyledCard>
                                    <p className='nextto'>Workout</p>
                                    <CButton className='nextto' block color="primary" onClick={() => navigateToExercise()}>View</CButton>
                                </StyledCard>
                            </CCardBody>
                        </CCollapse> */}
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

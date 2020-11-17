import React from 'react'
import {
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

import { capitalize } from '../../utils/strings'

const ExerciseCard = (props) => {
    const [collapsed, setCollapsed] = React.useState(true)
    const [showCard, setShowCard] = React.useState(true)

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
                                Workout
                            </CCardBody>
                        </CCollapse>
                    </CCard>
                </CFade>
            </CCol>
        </>
    )
}

export default ExerciseCard

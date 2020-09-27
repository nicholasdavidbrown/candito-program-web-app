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

import ComingSoonCard from './ComingSoonCard'

const Workout = () => {
    return (
        <>
            <CRow>
                <ComingSoonCard />
            </CRow>
        </>
    )
}

export default Workout

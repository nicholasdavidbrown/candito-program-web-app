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

const ErrorCard = (props) => {
    return (
        <>
            <CCol xs="12" sm="6" md="4">
                <CCard color="success" className="center text-white">
                    <CCardBody>
                        <h1>{props.text}</h1>
                        Get keen for updates
            </CCardBody>
                </CCard>
            </CCol>
        </>
    )
}

export default ErrorCard

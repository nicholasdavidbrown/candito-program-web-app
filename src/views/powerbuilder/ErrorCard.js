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

const ErrorCard = () => {
    return (
        <>
            <CCol xs="12" sm="6" md="4">
                <CCard color="danger" className="text-white">
                    <CCardHeader>
                        Whoops
            </CCardHeader>
                    <CCardBody>
                        An error occurred here
            </CCardBody>
                </CCard>
            </CCol>
        </>
    )
}

export default ErrorCard

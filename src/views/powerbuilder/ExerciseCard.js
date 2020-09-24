import React, { lazy } from 'react'
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
    CRow,
    CCallout,
    CDataTable,
    CWidgetDropdown,
    CDropdown,
    CDropdownMenu,
    CDropdownItem,
    CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}
const fields = ['set', 'reps', 'weight']

const InputCard = (props) => {
    const { order, exercise, setData } = props.data

    return (
        <>
            <CCol xs="12" sm="6" md="6" lg="6" xl="6">
                <CWidgetDropdown
                    color={props.color}
                    className={`${props.className}`}
                >
                    <div className='block'>
                        <p className='block'>{`Exercise ${order}`}</p>
                        <h1 className='alt-h1'>{exercise}</h1>
                    </div>
                    <div>
                        <CDataTable
                            items={setData}
                            fields={fields}
                        // itemsPerPage={4}
                        />
                    </div>
                </CWidgetDropdown>
            </CCol>
        </>
    )
}

export default InputCard
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
    CWidgetDropdown,
    CDropdown,
    CDropdownMenu,
    CDropdownItem,
    CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const InputCard = (props) => {
    return (
        <>
            <CCol sm="6" lg="3">
                <CWidgetDropdown
                    color={props.color}
                    header={`${props.header}`}
                    text={`${props.text}`}
                    className={props.className}
                >
                    <CDropdown>
                        <CDropdownToggle color="transparent">
                            <CIcon name="cil-settings" />
                        </CDropdownToggle>
                        <CDropdownMenu className="pt-0" placement="bottom-end">
                            <CDropdownItem>Update</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                </CWidgetDropdown>
            </CCol>
        </>
    )
}

export default InputCard
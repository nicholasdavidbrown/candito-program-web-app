import React, { useContext } from 'react'
import {
    Link
} from 'react-router-dom'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CCollapse,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFade,
    CForm,
    CFormGroup,
    CFormText,
    CValidFeedback,
    CInvalidFeedback,
    CTextarea,
    CInput,
    CInputFile,
    CInputCheckbox,
    CInputRadio,
    CInputGroup,
    CInputGroupAppend,
    CInputGroupPrepend,
    CDropdown,
    CInputGroupText,
    CLabel,
    CSelect,
    CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const ExerciseSearchCard = ({ updateSearch, searchValue }) => {

    const handleChange = e => {
        let { value } = e.target;
        updateSearch(value);
    };

    return (
        <>
            {/* <CRow> */}
            <CCol xs="12" sm="12" md="12" lg="12" xl="12">
                <CCard>
                    {/* <CCardHeader>
                        Search Exercises by Name
                        </CCardHeader> */}
                    <CCardBody>
                        <CFormGroup className="margin-bot-0" row>
                            {/* <CCol xs="12" sm="12" md="12" lg="12" xl="12">
                                    <CLabel htmlFor="text-input">Bench Press 1RM</CLabel>
                                </CCol> */}
                            <CCol xs="12" sm="6" md="6" lg="6" xl="6">
                                <CInput
                                    name="search"
                                    id="text-search"
                                    placeholder="Search Exercises"
                                    value={searchValue}
                                    onChange={handleChange}
                                />
                                {/* <CFormText>Ensure this is tested for best results (kg)</CFormText> */}
                            </CCol>
                            {/* <CCol xs="12" sm="3" md="3" lg="3" xl="3">
                                <CButton block color="primary" >
                                    Add an Exercise
                                </CButton>
                            </CCol> */}
                        </CFormGroup>
                    </CCardBody>
                </CCard>
            </CCol>
            {/* </CRow> */}
        </>
    )
}

export default ExerciseSearchCard

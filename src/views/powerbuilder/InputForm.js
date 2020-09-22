import React from 'react'
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

const BasicForms = () => {
    const [collapsed, setCollapsed] = React.useState(true)
    const [showElements, setShowElements] = React.useState(true)
    const [startDate, setStartDate] = React.useState('')
    const [choices, setChoices] = React.useState({
        bench1rm: 50,
        squat1rm: 80,
        deadlift1rm: 80,
        accessory1: 1,
        accessory2: 1,
        accessory3: 1,
        optionalUpper1: 1,
        optionalUpper2: 1,
        optionalCore1: 1,
        optionalCore2: 1,
        optionalLower1: 1,
        optionalLower2: 1,
    })

    return (
        <>
            <CRow>
                <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">


                    <CCol xs="12" md="6">
                        <CCard>
                            <CCardHeader>
                                Current Strength
                        </CCardHeader>
                            <CCardBody>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">Bench Press 1RM</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input" name="text-input" placeholder="Text" />
                                        <CFormText>Ensure this is tested for best results (kg)</CFormText>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">Squat 1RM</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input" name="text-input" placeholder="Text" />
                                        <CFormText>Ensure this is tested for best results (kg)</CFormText>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="text-input">Deadlift 1RM</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput id="text-input" name="text-input" placeholder="Text" />
                                        <CFormText>Ensure this is tested for best results (kg)</CFormText>
                                    </CCol>
                                </CFormGroup>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol xs="12" md="6">
                        <CCard>
                            <CCardHeader>
                                Routine Start Date
                        </CCardHeader>
                            <CCardBody>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="date-input">Select Date</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                                        <CFormText>This routine will always begin on a Monday</CFormText>
                                    </CCol>
                                </CFormGroup>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol xs="12" md="6">
                        <CCard>
                            <CCardHeader>
                                Accessory Exercises
                    </CCardHeader>
                            <CCardBody>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="select">Accessory 1</CLabel>
                                        <CFormText>Upper Body Exercise #1 (Horizontal)</CFormText>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect custom name="select" id="select">
                                            <option value="0">Please select</option>
                                            <option value="1">Option #1</option>
                                            <option value="2">Option #2</option>
                                            <option value="3">Option #3</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="select">Accessory 2</CLabel>
                                        <CFormText>Shoulder Exercise</CFormText>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect custom name="select" id="select">
                                            <option value="0">Please select</option>
                                            <option value="1">Option #1</option>
                                            <option value="2">Option #2</option>
                                            <option value="3">Option #3</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="select">Accessory 3</CLabel>
                                        <CFormText>Upper Body Exercise #2 (Vertical)</CFormText>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect custom name="select" id="select">
                                            <option value="0">Please select</option>
                                            <option value="1">Option #1</option>
                                            <option value="2">Option #2</option>
                                            <option value="3">Option #3</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol xs="12" md="6">
                        <CCard>
                            <CCardHeader>
                                Additional Exercises
                        </CCardHeader>
                            <CCardBody>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="select">Additional 1</CLabel>
                                        <CFormText>Upper Body Exercises</CFormText>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect custom name="select" id="select">
                                            <option value="0">Please select</option>
                                            <option value="1">Option #1</option>
                                            <option value="2">Option #2</option>
                                            <option value="3">Option #3</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="select">Additional 2</CLabel>
                                        <CFormText>Upper Body Exercises</CFormText>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect custom name="select" id="select">
                                            <option value="0">Please select</option>
                                            <option value="1">Option #1</option>
                                            <option value="2">Option #2</option>
                                            <option value="3">Option #3</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="select">Additional 3</CLabel>
                                        <CFormText>Any Exercises</CFormText>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect custom name="select" id="select">
                                            <option value="0">Please select</option>
                                            <option value="1">Option #1</option>
                                            <option value="2">Option #2</option>
                                            <option value="3">Option #3</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="select">Additional 4</CLabel>
                                        <CFormText>Any Exercises</CFormText>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect custom name="select" id="select">
                                            <option value="0">Please select</option>
                                            <option value="1">Option #1</option>
                                            <option value="2">Option #2</option>
                                            <option value="3">Option #3</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="select">Additional 5</CLabel>
                                        <CFormText>Lower Body Exercises</CFormText>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect custom name="select" id="select">
                                            <option value="0">Please select</option>
                                            <option value="1">Option #1</option>
                                            <option value="2">Option #2</option>
                                            <option value="3">Option #3</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="select">Additional 6</CLabel>
                                        <CFormText>Lower Body Exercises</CFormText>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect custom name="select" id="select">
                                            <option value="0">Please select</option>
                                            <option value="1">Option #1</option>
                                            <option value="2">Option #2</option>
                                            <option value="3">Option #3</option>
                                        </CSelect>
                                    </CCol>
                                </CFormGroup>
                            </CCardBody>
                            <CCardFooter>
                                <CButton type="submit" color="primary"><CIcon name="cil-scrubber" /> Submit and Start Routine!</CButton>
                            </CCardFooter>
                        </CCard>
                    </CCol>
                </CForm>
            </CRow>
        </>
    )
}

export default BasicForms

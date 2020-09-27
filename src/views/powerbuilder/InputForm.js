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

import { firebaseUser } from '../../utils/firebase'
import { AuthContext } from "../../services/auth.service";

import { setToMonday } from '../../utils/date'

const BasicForms = () => {
    const { currentUser } = useContext(AuthContext);
    const [collapsed, setCollapsed] = React.useState(true)
    const [showElements, setShowElements] = React.useState(true)
    const [choices, setChoices] = React.useState({
        startDate: '',
        bench1rm: 80,
        squat1rm: 80,
        deadlift1rm: 80,
        accessory1: 1,
        accessory2: 1,
        accessory3: 1,
        optionalUpper1: 1,
        optionalUpper2: 1,
        optionalUpper3: 20,
        optionalUpper4: 35,
        optionalLower1: 1,
        optionalLower2: 1,
    })

    // console.log(choices)

    const handleChange = e => {
        let { name, value } = e.target;
        if (name === 'startDate') {
            value = setToMonday(value)
        }
        setChoices(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitData = async () => {
        console.log('Sending', choices)
        try {
            await firebaseUser(currentUser.uid).update(choices)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <CRow>
                <CCol xs="12" sm="12" md="6" lg="6" xl="6">
                    <CCard>
                        <CCardHeader>
                            Current Strength (kg)
                        </CCardHeader>
                        <CCardBody>
                            <CFormGroup row>
                                <CCol xs="12" sm="12" md="12" lg="12" xl="12">
                                    <CLabel htmlFor="text-input">Bench Press 1RM</CLabel>
                                </CCol>
                                <CCol xs="12" sm="6" md="6" lg="6" xl="6">
                                    <CInput
                                        name="bench1rm"
                                        id="text-input"
                                        placeholder="Input"
                                        value={choices.bench1rm}
                                        onChange={handleChange}
                                    />
                                    <CFormText>Ensure this is tested for best results (kg)</CFormText>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol xs="12" sm="12" md="12" lg="12" xl="12">
                                    <CLabel htmlFor="text-input">Squat 1RM</CLabel>
                                </CCol>
                                <CCol xs="12" sm="6" md="6" lg="6" xl="6">
                                    <CInput
                                        name="squat1rm"
                                        id="text-input"
                                        placeholder="Input"
                                        value={choices.squat1rm}
                                        onChange={handleChange}
                                    />
                                    <CFormText>Ensure this is tested for best results (kg)</CFormText>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol xs="12" sm="12" md="12" lg="12" xl="12">
                                    <CLabel htmlFor="text-input">Deadlift 1RM</CLabel>
                                </CCol>
                                <CCol xs="12" sm="6" md="6" lg="6" xl="6">
                                    <CInput
                                        name="deadlift1rm"
                                        id="text-input"
                                        placeholder="Input"
                                        value={choices.deadlift1rm}
                                        onChange={handleChange}
                                    />
                                    <CFormText>Ensure this is tested for best results (kg)</CFormText>
                                </CCol>
                            </CFormGroup>
                        </CCardBody>
                    </CCard>
                </CCol>
                {/* <CCol xs="12" md="6">
                    <CCard>
                        <CCardHeader>
                            Accessory Exercises
                    </CCardHeader>
                        <CCardBody>
                            <CFormGroup row>
                                <CCol xs="12" sm="12" md="12" lg="12" xl="12">
                                    <CLabel htmlFor="select">Accessory 1</CLabel>
                                </CCol>
                                <CCol xs="12" sm="6" md="9" lg="12" xl="12">
                                    <CSelect custom name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </CSelect>
                                    <CFormText>Upper Body Exercise #1 (Horizontal)</CFormText>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol xs="12" sm="12" md="12" lg="12" xl="12">
                                    <CLabel htmlFor="select">Accessory 2</CLabel>
                                </CCol>
                                <CCol xs="12" sm="6" md="9" lg="12" xl="12">
                                    <CSelect custom name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </CSelect>
                                    <CFormText>Shoulder Exercise</CFormText>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol xs="12" sm="12" md="12" lg="12" xl="12">
                                    <CLabel htmlFor="select">Accessory 3</CLabel>
                                </CCol>
                                <CCol xs="12" sm="6" md="9" lg="12" xl="12">
                                    <CSelect custom name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </CSelect>
                                    <CFormText>Upper Body Exercise #2 (Vertical)</CFormText>
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
                                <CCol xs="12" sm="12" md="12" lg="12" xl="12">
                                    <CLabel htmlFor="select">Additional 1</CLabel>
                                </CCol>
                                <CCol xs="12" sm="6" md="6" lg="6" xl="6">
                                    <CSelect custom name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </CSelect>
                                    <CFormText>Upper Body Exercises</CFormText>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol xs="12" sm="12" md="12" lg="12" xl="12">
                                    <CLabel htmlFor="select">Additional 2</CLabel>
                                </CCol>
                                <CCol xs="12" sm="6" md="6" lg="6" xl="6">
                                    <CSelect custom name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </CSelect>
                                    <CFormText>Upper Body Exercises</CFormText>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol xs="12" sm="12" md="12" lg="12" xl="12">
                                    <CLabel htmlFor="select">Additional 3</CLabel>
                                </CCol>
                                <CCol xs="12" sm="6" md="6" lg="6" xl="6">
                                    <CSelect custom name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </CSelect>
                                    <CFormText>Any Exercises</CFormText>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol xs="12" sm="12" md="12" lg="12" xl="12">
                                    <CLabel htmlFor="select">Additional 4</CLabel>
                                </CCol>
                                <CCol xs="12" sm="6" md="6" lg="6" xl="6">
                                    <CSelect custom name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </CSelect>
                                    <CFormText>Any Exercises</CFormText>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol xs="12" sm="12" md="12" lg="12" xl="12">
                                    <CLabel htmlFor="select">Additional 5</CLabel>
                                </CCol>
                                <CCol xs="12" sm="6" md="6" lg="6" xl="6">
                                    <CSelect custom name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </CSelect>
                                    <CFormText>Lower Body Exercises</CFormText>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol xs="12" sm="12" md="12" lg="12" xl="12">
                                    <CLabel htmlFor="select">Additional 6</CLabel>
                                </CCol>
                                <CCol xs="12" sm="6" md="6" lg="6" xl="6">
                                    <CSelect custom name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </CSelect>
                                    <CFormText>Lower Body Exercises</CFormText>
                                </CCol>
                            </CFormGroup>
                        </CCardBody>
                    </CCard>
                </CCol> */}
                <CCol xs="12" md="6">
                    <CCard>
                        <CCardHeader>
                            Routine Start Date
                        </CCardHeader>
                        <CCardBody>
                            <CFormGroup>
                                <CCol xs="12" sm="12" md="12" lg="12" xl="12">
                                    <CLabel htmlFor="date-input">Select Date</CLabel>
                                </CCol>
                                <CCol xs="12" md="9" l="12">
                                    <CInput
                                        type="date"
                                        id="date-input"
                                        name="startDate"
                                        placeholder="date"
                                        value={choices.startDate}
                                        onChange={handleChange}
                                    />
                                    <CFormText>This routine will always begin on a Monday</CFormText>
                                </CCol>
                            </CFormGroup>
                        </CCardBody>
                        <CCardFooter>
                            {/* <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal"> */}
                            <Link to="/dashboard">
                                <CButton type="submit" onClick={submitData} color="primary"><CIcon name="cil-scrubber" /> Submit and Start Routine!</CButton>
                            </Link>
                            {/* </CForm> */}
                        </CCardFooter>
                    </CCard>
                </CCol>

            </CRow>
        </>
    )
}

export default BasicForms

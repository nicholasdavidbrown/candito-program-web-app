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

// API
import { addExercise } from '../../api/firebase/exercises'

const AddExercisePage = () => {
    const { currentUser } = useContext(AuthContext);
    // const [collapsed, setCollapsed] = React.useState(true)
    // const [showElements, setShowElements] = React.useState(true)
    const [name, setName] = React.useState('')
    const [type, setType] = React.useState('')
    const [muscles, setMuscles] = React.useState([])

    const submitData = async () => {
        try {
            const res = await addExercise(name, type, muscles)
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
                            Add Exercise
                        </CCardHeader>
                        <CCardBody>
                            <CFormGroup row>
                                <CCol xs="12" sm="12" md="12" lg="12" xl="12">
                                    <CLabel htmlFor="text-input">Exercise Name</CLabel>
                                </CCol>
                                <CCol>
                                    <CInput
                                        name="exercise-name"
                                        id="text-input1"
                                        placeholder="Exercise Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <CFormText>This will be added and moderated and if required added to the full database</CFormText>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol xs="12" sm="12" md="12" lg="12" xl="12">
                                    <CLabel htmlFor="text-input">Exercise Type</CLabel>
                                </CCol>
                                <CCol>
                                    <CInput
                                        name="exercise-type"
                                        id="text-input2"
                                        placeholder="Exercise Type"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                    />
                                    <CFormText>This is the generic type definition</CFormText>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol xs="12" sm="12" md="12" lg="12" xl="12">
                                    <CLabel htmlFor="text-input">Muscle Groups</CLabel>
                                </CCol>
                                <CCol>
                                    <CInput
                                        name="exercise-muscles"
                                        id="text-input"
                                        placeholder="Muscles Groups"
                                        value={muscles}
                                        onChange={(e) => setMuscles(e.target.value)}
                                    />
                                    <CFormText>Input multiple in list format: biceps, triceps, ...</CFormText>
                                </CCol>
                            </CFormGroup>
                        </CCardBody>
                        <CCardFooter>
                            {/* <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal"> */}
                            <Link to="/dashboard">
                                <CButton type="submit" onClick={submitData} color="primary"><CIcon name="cil-scrubber" /> Submit New Exercise</CButton>
                            </Link>
                            {/* </CForm> */}
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default AddExercisePage

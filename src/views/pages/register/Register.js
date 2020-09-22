import React, { useCallback, useState } from "react";
import { withRouter } from "react-router";
import { firebaseSignUp, firebaseUser } from "../../../utils/firebase";
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Register = ({ history }) => {
  const [state, setState] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await firebaseSignUp(state.email, state.password)
        .then(authUser => {
          console.log("Signing up new user", authUser.user.uid)
          // Create a user in your Firebase realtime database
          return firebaseUser(authUser.user.uid).set(
            {
              email: state.email,
            },
            { merge: true },
          );
        })
        .catch(error => {
          console.error(error)
        });
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="c-app bg-grey c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4 bg-transparent2">
                <CForm className='custom-color1'>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  {/* <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Username" autoComplete="username" />
                  </CInputGroup> */}
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      id="email"
                      value={state.email}
                      onChange={handleChange}
                      placeholder="Email"
                      autoComplete="email"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      id="password"
                      value={state.password}
                      onChange={handleChange}
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  {/* <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Repeat password" autoComplete="new-password" />
                  </CInputGroup> */}
                  <CButton onClick={handleSignUp} color="success" block>Create Account</CButton>
                </CForm>
              </CCardBody>
              {/* <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton>
                  </CCol>
                </CRow>
              </CCardFooter> */}
            </CCard>
            <Link className='center custom-color1' to="/login">
              <p>or Sign in</p>
              {/* <CButton color="primary" className="mt-3" active tabIndex={-1}>Sign In</CButton> */}
            </Link>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default withRouter(Register)

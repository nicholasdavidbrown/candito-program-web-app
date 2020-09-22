import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from 'react-router-dom'
import { firebaseSignIn } from "../../../utils/firebase";
import { AuthContext } from "../../../services/auth.service";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
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
import img from '../../../assets/icons/neua-sygnet.png'
import img2 from '../../../assets/icons/neua.png'

const Login = ({ history }) => {
  const [state, setState] = useState({
    email: "",
    password: ""
  })

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebaseSignIn(state.email, state.password)
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="c-app bg-grey c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4 bg-transparent">
                <CCardBody>
                  <CForm>
                    <img src={img}></img>
                    <img src={img2} style={{ maxWidth: '100%', marginBottom: '20px' }}></img>
                    {/* <h1>Login</h1> */}
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
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
                    <CInputGroup className="mb-4">
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
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    {/* <CRow> */}
                    {/* <CCol xs="6"> */}
                    <div className='custom-color1'>
                      <CButton
                        color="primary"
                        className="px-4"
                        onClick={handleLogin}>
                        Login
                        </CButton>
                    </div>
                    {/* </CCol> */}
                    {/* <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol> */}
                    {/* </CRow> */}
                  </CForm>
                </CCardBody>
              </CCard>
              <Link className='center custom-color1' to="/register">
                <CButton color="primary" className="mt-3" active tabIndex={-1}>Join Powerbuilder</CButton>
              </Link>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default withRouter(Login)

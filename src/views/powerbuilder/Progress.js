import React from 'react'
import {
    CCard,
    CCardBody,
    CCardGroup,
    CCardHeader
} from '@coreui/react'
import {
    CChartBar,
    CChartLine,
    CChartDoughnut,
    CChartRadar,
    CChartPie,
    CChartPolarArea
} from '@coreui/react-chartjs'

const Charts = () => {

    return (
        <CCardGroup columns className="cols-2" >
            <CCard>
                <CCardHeader>
                    Progression Chart
        </CCardHeader>
                <CCardBody>
                    <CChartLine
                        datasets={[
                            {
                                label: 'Bench Press',
                                backgroundColor: 'rgb(228,102,81,0.9)',
                                data: [90]
                            },
                            {
                                label: 'Squat',
                                backgroundColor: 'rgb(0,216,255,0.9)',
                                data: [100]
                            },
                            {
                                label: 'Deadlift',
                                backgroundColor: '#32a868',
                                data: [130]
                            }
                        ]}
                        options={{
                            tooltips: {
                                enabled: true
                            }
                        }}
                        labels={['Cycle 1']}
                    />
                </CCardBody>
            </CCard>
        </CCardGroup>
    )
}

export default Charts

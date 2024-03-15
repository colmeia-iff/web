import React from 'react'
import NavBar from '../../components/navbar/index'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import './index.css'

const DashBoard = () => {
  return (
    <>
     <NavBar></NavBar>
    <div className='bg-main'>
       
        <div className='bg-dash-main'>
        <div className='box-graph'>
        <CircularProgress value={80} size={220} />
        </div>
        <div className='box-graph'>
        <CircularProgress value={80} size={220} />
        </div>
        <div className='box-graph'>
        <CircularProgress value={80} size={220} />
        </div>
        <div className='box-graph'>
        <CircularProgress value={80} size={220} />
        </div>
        <div className='box-graph'>
        <CircularProgress value={80} size={220} />
        </div>
        <div className='box-graph'>
        <CircularProgress value={80} size={220} />
        </div>
        

        </div>

        <Tabs variant='unstyled' marginTop={100}>
  <TabList>
    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Colmeia 1</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.400' }}>Colmeia  2</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    </div>

    </>
  )
}

export default DashBoard
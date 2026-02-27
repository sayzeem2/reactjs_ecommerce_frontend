import React, { useState } from 'react'
import './UserOrdersPage.css'
import ActiveTab from '../components/UserOrdersPageComponents/ActiveTab'
import CancelledTab from '../components/UserOrdersPageComponents/CancelledTab'
import CompletedTab from '../components/UserOrdersPageComponents/CompletedTab'
// import { useNavigate } from 'react-router-dom'

function UserOrdersPage({ setSideBarValue }) {
    // const navigate = useNavigate();

    const [tabActive, setTabActive] = useState('activeTab')


    function handleTabActive(value) {
        setTabActive(value)
    }
    return (
        <div>
            {/* -------------------------------------------Mid part Start------------------------------------------------------ */}
            <div className='user-orders-right-switch-container'>
                {/* -------------------------------------------Heading Start------------------------------------------------------ */}

                <span className='user-orders-right-heading-info-text'>My Orders</span>
                {/* -------------------------------------------Heading End------------------------------------------------------ */}
                {/* -------------------------------------------Tabs Start------------------------------------------------------ */}

                <div className='user-orders-right-tabs-main-container'>
                    <div className='user-orders-right-tabs-content-container'>
                        <div className={tabActive === 'activeTab' ? 'user-orders-right-tabs-active-container-active' : 'user-orders-right-tabs-active-container'} onClick={() => handleTabActive('activeTab')}>
                            <span className='user-orders-right-tabs-active-span'>Active</span>
                        </div>
                        <div className={tabActive === 'cancelledTab' ? 'user-orders-right-tabs-cancelled-container-active' : 'user-orders-right-tabs-cancelled-container'} onClick={() => handleTabActive('cancelledTab')}>

                            <span className='user-orders-right-tabs-cancelled-span'>Cancelled</span>
                        </div>
                        <div className={tabActive === 'completedTab' ? 'user-orders-right-tabs-completed-container-active' : 'user-orders-right-tabs-completed-container'} onClick={() => handleTabActive('completedTab')}>

                            <span className='user-orders-right-tabs-completed-span'>Completed</span>
                        </div>
                    </div>
                    <hr className='user-orders-right-divider-hr' />
                    {/* -------------------------------------active tab container start--------------------------------- */}
                    {tabActive === 'activeTab' &&
                        <div className='user-orders-right-tab-contents-main-container'>
                            <ActiveTab setSideBarValue={setSideBarValue} />
                        </div>
                    }
                    {/* -------------------------------------active tab container end--------------------------------- */}
                    {/* -------------------------------------Cancelled tab container start--------------------------------- */}
                    {tabActive === 'cancelledTab' &&
                        <div className='user-orders-right-tab-contents-main-container'>
                            <CancelledTab />
                        </div>
                    }
                    {/* -------------------------------------Cancelled tab container end--------------------------------- */}
                    {/* -------------------------------------Completed tab container start--------------------------------- */}
                    {tabActive === 'completedTab' &&
                        <div className='user-orders-right-tab-contents-main-container'>
                            <CompletedTab />
                        </div>
                    }
                    {/* -------------------------------------Completed tab container end--------------------------------- */}

                    {/* -------------------------------------------Tabs End------------------------------------------------------ */}

                </div>

                {/* -------------------------------------------Mid part End------------------------------------------------------ */}
            </div >
        </div>
    )
}

export default UserOrdersPage
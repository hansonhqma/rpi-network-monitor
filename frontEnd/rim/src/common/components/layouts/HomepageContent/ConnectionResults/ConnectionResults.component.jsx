//THIS IS CONNECTION RESULTS (RENAME)

import styles from './ConnectionResults.module.css'


//This is where we get the users current results
//fetch("localhost:3000/get_building_last?ip=129.139.34.29")
//.then((response) => response.json)

export default function ConnectionResults( props ){
     return ( 
        <div className={`webpage-content-section-container ${styles['support-padding-top']}`}> 
            <div className={`flex flow-col webpage-content-section-main-box ${styles['support-second-margin']}`}>
                
                <h3 className={'justify-center'} >Current Connection Results</h3>
                <h5 className={'justify-center '}>"Your connection results below"</h5>
                
                <h3></h3>
                <div className={`${styles['hr']}`}><hr /></div>
                <h3></h3>

                <div class = "container">
                    <h3 className={` justify-center ${styles['results']}`}>
                        Building Name: &nbsp; Darrin Communications Center
                    </h3>
                    <h3 className={` justify-center ${styles['results']}`}>
                        Download Speed: &nbsp; 400kbs
                    </h3>
                    <h3 className={` justify-center ${styles['results']}`}>
                        Last Tested: &nbsp; 11:23am
                    </h3>
                </div>
            </div>
        </div>
    )
    
}
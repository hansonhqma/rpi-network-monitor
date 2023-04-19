//THIS IS RIM DESCRIPTION SECTION (RENAME)

import styles from './FeaturesSection.module.css'


export default function FeaturesSection( props ){

    return ( 
        <div className="webpage-content-section-container">
            <div className={`flex flow-col webpage-content-section-main-box ${styles['features-second-margin']}`}>

                <h3 className={'justify-center'} >What is RPI Internet Monitor?</h3>
                <h5 className={'justify-center'} >&quot;Description of RIM&quot;</h5>

                <p className={`margin-0   margin-bottom-10 ${styles['features-p-line-clamp']}`}>
                The RPI Internet Monitor app (RIM) is a useful and comprehensive solution for monitoring RPI Internet speed. The RIM enables users to quickly discover internet speed within defined coverage areas. Users are able to search for locations on campus based on internet speed, building name, and when the last internet test was. RIM informs users of optimal locations based on their specific criteria and needs. The app, with its simple and informative use, will be accessible to most on the RPI campus and has the potential to be useful in many aspects of campus life.
                </p>
            </div>
        </div>
    ) 
}
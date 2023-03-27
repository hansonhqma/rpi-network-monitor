//THIS IS RIM DESCRIPTION SECTION (RENAME)

import styles from './FeaturesSection.module.css'


export default function FeaturesSection( props ){

    return ( 
        <div className="webpage-content-section-container">
            <div className={`flex flow-col webpage-content-section-main-box ${styles['features-second-margin']}`}>

                <h3>What is RPI Internet Monitor?</h3>
                <h5>"Description of RIM"</h5>

                <p className={`margin-0  margin-bottom-10 ${styles['features-p-line-clamp']}`}>
                Facilisis mauris sit amet massa. Vitae semper quis lectus nulla at volutpat. Nibh venenatis cras sed felis eget velit. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Vitae nunc sed velit dignissim sodales ut eu sem integer. Amet risus nullam eget felis eget nunc lobortis mattis. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Odio ut sem nulla pharetra. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Duis ultricies lacus sed turpis tincidunt id.
                </p>
            </div>
        </div>
    ) 
}
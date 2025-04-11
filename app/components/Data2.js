import React from 'react'

const Data2 = ({ posts }) => {
    return (
        <div className="content-fill">
            <img 
                alt="Jad Zeitouni"
                elementtiming="system-image-block"
                src={posts[0].fields.profile.fields.file.url}
                width={3484}
                height={4355}
                sizes="100vw"
                style={{
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "50% 50%"
                }} 
            />
           
            <div className="fluidImageOverlay" />
        </div>
    )
}

export default Data2
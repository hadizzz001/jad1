import React from 'react' 
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

 

 

const Data3 = ({ posts }) => {
    const { desc } = posts[0].fields
  return (
    <div
    className="sqs-block html-block sqs-block-html"
    data-blend-mode="NORMAL"
    data-block-type={2}
    data-border-radii='{"topLeft":{"unit":"px","value":0.0},"topRight":{"unit":"px","value":0.0},"bottomLeft":{"unit":"px","value":0.0},"bottomRight":{"unit":"px","value":0.0}}'
    id="block-60cd32dd32cfbc9ff71c"
  >
    <div className="sqs-block-content">
      <div className="sqs-html-content">
       
      {documentToReactComponents(desc)}
 
         
        <div className="icon-links" style={{ marginTop: "1rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
          <a
            href={posts[0].fields.cv.fields.file.url}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <i className="fas fa-file-alt" style={{ fontSize: "1.5rem" }}></i> {/* CV Icon */}
            CV/Resume
          </a>
          <a
            href={posts[0].fields.port.fields.file.url}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <i className="fas fa-briefcase" style={{ fontSize: "1.5rem" }}></i> {/* Portfolio Icon */}
            Portfolio
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Data3
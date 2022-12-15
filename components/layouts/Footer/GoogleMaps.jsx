import React from "react"

const GoogleMaps = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          textAlign: "right",
          width: "100%",
          height: "150px",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            background: "none !important",
            width: "100%",
            height: "150px",
          }}
        >
          <iframe
            style={{
              width: "100%",
              border: "none",
              height: "150px !important",
            }}
            src="https://maps.google.com/maps?width=300&amp;height=150&amp;hl=en&amp;q=rhu+road+singapore&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default GoogleMaps

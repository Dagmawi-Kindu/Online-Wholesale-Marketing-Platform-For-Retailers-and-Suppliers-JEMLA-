import React from "react"

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  }
  const mystyle1 = {
    width: "68%",
    height: "340px",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={mystyle}>
            <img src='./images/banner-1.png' width='100%' height='100%' />
          </div>
          <div className='img' style={mystyle1}>
            <img src='https://s.alicdn.com/@img/imgextra/i1/O1CN01vOE4UD1GUILC3Z37K_!!6000000000625-2-tps-990-400.png' width='100%' height='100%' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument

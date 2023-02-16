import React from 'react'
import CompB from './CompB'


class CompA extends React.Component  {
     name="akash"
  place="kundpura"
    render()
    {
  return (
    <div>
  <CompB one={this.name} two={this.place}/>
    </div>
  )
}
}
export default CompA

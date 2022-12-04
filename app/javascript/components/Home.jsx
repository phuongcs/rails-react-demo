import React from 'react'

const Home = props => (
    <div>Hello {props.name}!</div>
)

Home.defaultProps = {
    name: 'David'
}

export default Home;
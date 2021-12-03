import React from 'react'

const SectionOne = ({id}) => {
    return (
        <div id={id} className="relative">
            <h1 className="text-center mt-4">¿Como Participar?</h1>

            <div className="text-center md:flex md:justify-around">
                <div>
                    <h3>1</h3>
                    <p>lorem ipsum dolor sit amet, consectet</p>
                </div>
                <div>
                    <h3>2</h3>
                    <p>lorem ipsum dolor sit amet, consectet</p>
                </div>
                <div>
                    <h3>3</h3>
                    <p>lorem ipsum dolor sit amet, consectet</p>
                </div>
            </div> 
        </div>
    )
}

export default SectionOne

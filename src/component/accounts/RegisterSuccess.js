import React, {useEffect} from 'react'

const RegisterSuccess = ({removeAlert, submited}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
          removeAlert()
        }, 3000);
        return () => clearTimeout(timer);
      }, [submited])
    return (
        <section>
            <div className="container">
                <div className="row">
                    <p className="text-green text-center">successfully registered</p>
                </div>
            </div>
        </section>
    )
}

export default RegisterSuccess

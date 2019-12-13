import React from 'react';
interface ForgotProps {

}

const Forgot: React.FC<ForgotProps> = ({}) => {

    return (
        <div className='fogot'>
            <div>forgot</div>
            <input value='test@email.com'/>
            <div> <button>Send Email</button> </div>
        </div>
    );
};

export default Forgot;

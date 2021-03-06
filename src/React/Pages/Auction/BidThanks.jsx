import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import UniversalForm from 'React/Shared/UniversalForm/UniversalForm.jsx';

const BidThanks = () => {

    const defaultData = [
        { id: 'credit card number', value: '', required: true, label: 'Credit Card Number', type: 'number', },
        { id: 'cvv', value: '', required: false, label: 'CVV', type: 'number', },
    ]

    const handleOnSubmit = (apiResponse) => {
        console.log('apiResponse', apiResponse);
    }

    return (
        <BidThanksStyled className='BidThanks'>
            <div className="payment-header">
                <h3>Please enter payment details</h3>
            </div>
            <UniversalForm
                formData={ defaultData }
                submitText='Submit payment'
                apiEndpoint='/payment/send'
                onSubmit={ handleOnSubmit }
                />
        </BidThanksStyled>
    );
}

export default BidThanks;

const BidThanksStyled = styled.div`
    .payment-header {
        text-align: center;
    }
`;
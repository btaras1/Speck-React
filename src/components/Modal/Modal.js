import React from 'react';

import {ModalWrapper, FormWrapper,FormRow, Title} from './ModalStyle'
import { GrClose } from 'react-icons/gr'
const Modal = (props) => {

    return(
        <>
        <ModalWrapper>
        <FormWrapper>
            <FormRow>
                    <Title>Add Event</Title>
                    <GrClose onClick={()=>props.setModal()}/>
            </FormRow>
            <FormRow>
            {props.children}
            </FormRow>
        </FormWrapper>
        </ModalWrapper>
        </>
    );
}
export default Modal;
import React  from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Form,
    FormRow,
    InputLabel,
    InputText,
    InputError,
    SelectText,
    OptionText,
    RightColumn,
    LeftColumn,
    InputTextArea,
    FormOneRow
} from './EventFormStyle';
import {Button} from '../../components/Button/ButtonStyle'



const EventForm = (props) => {

    
    const formik = useFormik({
        initialValues: {
            id: '',
            title: '',
            description: '',
            category: '',
            date: '',
            timeFrom: '',
            timeTo: '',
            capacity: '',
            firm: ''
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required('Title is required!'),
            description: Yup.string()
                .required('Description is required!'),
            category: Yup.string()
                .required('Category is required!'),
            date: Yup.string()
                .required('Date is required'),
            timeFrom: Yup.string()
                .required('Time from is required'),
            timeTo: Yup.string()
                .required('Time to is required'),
            capacity: Yup.number()
                .required('Capacity is required')
                .typeError('You must specify a number'),
            firm: Yup.string()
                .required('Firm is required')
        }),
    onSubmit: values => {
        values["id"]=props.events.length + 1;
        props.setEvents([...props.events,values]);
        props.setAddPressed(!props.addPressed);
    },
    })
    return(
        
<Form onSubmit={formik.handleSubmit}>
                            <FormOneRow>
                                <InputLabel htmlFor='title'>Title</InputLabel>
                                <InputText
                                    id='title'
                                    type='text'
                                    {...formik.getFieldProps('title')}
                                />
                                {formik.touched.title && formik.errors.title
                                    ?<InputError>{formik.errors.title}</InputError>
                                    : null
                                }
                            </FormOneRow>
                            <FormOneRow>
                                <InputLabel htmlFor='description'>Description</InputLabel>
                                <InputTextArea
                                    id='description'
                                    type='textarea'
                                    {...formik.getFieldProps('description')}
                                />
                                {formik.touched.description && formik.errors.description
                                    ?<InputError>{formik.errors.description}</InputError>
                                    : null
                                }
                            </FormOneRow>
                            <FormRow>
                                <LeftColumn>
                                <InputLabel htmlFor='category'>Category</InputLabel>
                                <SelectText
                                   
                                    id='category'
                                    type='select'
                                    {...formik.getFieldProps('category')}
                                >
                                    <OptionText value="#marketing">#marketing</OptionText>
                                    <OptionText value="#design">#design</OptionText>
                                    <OptionText value="#frontend">#frontend</OptionText>
                                    <OptionText value="#backend">#backend</OptionText>
                                </SelectText>
                                {formik.touched.category && formik.errors.category
                                    ?<InputError>{formik.errors.category}</InputError>
                                    : null
                                }
                                </LeftColumn>
                                <RightColumn>
                                <InputLabel htmlFor='date'>Date</InputLabel>
                                <InputText
                                    id='date'
                                    type='text'
                                    {...formik.getFieldProps('date')}
                                />
                                {formik.touched.date && formik.errors.date
                                    ?<InputError>{formik.errors.date}</InputError>
                                    : null
                                }
                                </RightColumn>
                            </FormRow>
                            <FormRow>
                            <LeftColumn>
                                <InputLabel htmlFor='timeFrom'>Time from</InputLabel>
                                <InputText
                                    id='timeFrom'
                                    type='text'
                                    {...formik.getFieldProps('timeFrom')}
                                />
                                {formik.touched.timeFrom && formik.errors.timeFrom
                                    ?<InputError>{formik.errors.timeFrom}</InputError>
                                    : null
                                }
                                </LeftColumn>
                                <RightColumn>
                                <InputLabel htmlFor='timeTo'>Time to</InputLabel>
                                <InputText
                                    id='timeTo'
                                    type='text'
                                    {...formik.getFieldProps('timeTo')}
                                />
                                {formik.touched.timeTo && formik.errors.timeTo
                                    ?<InputError>{formik.errors.timeTo}</InputError>
                                    : null
                                }</RightColumn>
                            </FormRow>
                            <FormRow>
                                <LeftColumn>
                                <InputLabel htmlFor='timeTo'>Capacity</InputLabel>
                                <InputText
                                    id='capacity'
                                    type='text'
                                    {...formik.getFieldProps('capacity')}
                                />
                                {formik.touched.capacity && formik.errors.capacity
                                    ?<InputError>{formik.errors.capacity}</InputError>
                                    : null
                                }
                                </LeftColumn>
                                <RightColumn>
                                <InputLabel htmlFor='firm'>Firm</InputLabel>
                                <SelectText
                                    id='firm'
                                    type='select'
                                    {...formik.getFieldProps('firm')}
                                >
                                    <OptionText value="Speck" >Speck</OptionText>
                                    <OptionText value="Five">Five</OptionText>
                                    <OptionText value="Bornfight">Bornfight</OptionText>
                                    <OptionText value="Agency 04">Agency 04</OptionText>
                                    </SelectText>
                                {formik.touched.firm && formik.errors.firm
                                    ?<InputError>{formik.errors.firm}</InputError>
                                    : null
                                }
                                </RightColumn>
                            </FormRow>
                            <FormRow>
                                <Button type="submit">Add event</Button>
                            </FormRow>
                        </Form>
                        


           
    );
}

export default EventForm;
import * as yup from 'yup';

export default yup.object().shape({
    title: yup.string().required('required').max(30).label('Title todo')
})
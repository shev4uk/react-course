import {useFormikContext} from 'formik';

export default function SubmitButton() {
  const formik = useFormikContext();
  console.log(formik);
  return (
    <button type="submit" disabled={!formik.isValid}>Send</button>
  )
}

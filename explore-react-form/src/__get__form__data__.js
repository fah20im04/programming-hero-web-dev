/**
 * 1. e.target.[name of the input field.value]
 * 2. use form action and formData in the action handler.formData.get('name of the input field')
 * 
 3. Controlled component . one per each field .u use state on change of the field . usefull to dynamically handle  error.

 4. handle all controlled field on one state object
  const [formData,setFormData ] = useState ({
  name : '',
  password:''
  phone:'';
  })

  5.
  uncomtrolled using useRef
  6. hook form or custom hook
 */
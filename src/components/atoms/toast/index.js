import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toasts = {
  success: toast.success,
  error: toast.error,
  info: toast.info,
};

export default toasts;

import { toast } from "react-toastify";
import Alert from "@material-ui/lab/Alert";

export default function CustomSnackbar(type, message) {
  switch (type) {
    case "warning":
      return toast.warning(({ closeToast }) => (
        <Alert variant="filled" severity="warning">
          {message}
        </Alert>
      ));
    case "error":
      return toast.error(({ closeToast }) => (
        <Alert variant="filled" severity="error">
          {message}
        </Alert>
      ));
    case "success":
      return toast.success(({ closeToast }) => (
        <Alert variant="filled" severity="success">
          {message}
        </Alert>
      ));
    case "info":
      return toast.info(({ closeToast }) => (
        <Alert variant="filled" severity="info">
          {message}
        </Alert>
      ));
    default:
      return toast(message);
  }
}

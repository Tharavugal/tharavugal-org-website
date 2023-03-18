import { useSnackbar } from "notistack";

export default function useAlert() {
  const { enqueueSnackbar } = useSnackbar();

  const showAlert = (type, msg) => {
    switch (type) {
      case "success":
        enqueueSnackbar(msg, {
          variant: "success",
          anchorOrigin: { horizontal: "right", vertical: "top" },
        });
        break;

      case "error":
        enqueueSnackbar(msg, {
          variant: "error",
          anchorOrigin: { horizontal: "right", vertical: "top" },
        });
        break;

      case "info":
        enqueueSnackbar(msg, {
          variant: "info",
          anchorOrigin: { horizontal: "right", vertical: "top" },
        });
        break;

      case "warning":
        enqueueSnackbar(msg, {
          variant: "warning",
          anchorOrigin: { horizontal: "right", vertical: "top" },
        });
        break;

      default:
        enqueueSnackbar(msg, {
          variant: "default",
          anchorOrigin: { horizontal: "right", vertical: "top" },
        });
        break;
    }
  };

  return showAlert;
}

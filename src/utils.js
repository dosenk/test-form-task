export const getNotificStyle = (variant = "") => {
  return {
    variant: variant ?? "success",
    autoHideDuration: 1500,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
  };
};

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const withSpinner = (WrapperdComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapperdComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default withSpinner;

import React from "react";
import { Modal, ModalContent } from "../../../components/modal";
import { useSteps } from "../../../hook/useSteps";
import { navigate } from "gatsby";
import { RouteComponentProps } from "@reach/router";

export const ReservationModal: React.FC<RouteComponentProps> = () => {
  const { step, nextStep, prevStep, gotoStep } = useSteps([
    "welcome" as const,
    "provider" as const,
    "datepicker" as const,
    "info" as const,
    "success" as const,
    "error" as const,
  ]);

  const handleClose = React.useCallback(() => {
    navigate("/consulenze/");
  }, [navigate]);

  const handleContinue = React.useCallback(() => nextStep(), [nextStep]);

  const renderModalContent = React.useCallback(() => {
    switch (step) {
      case "welcome":
        return <div onClick={handleContinue}>Welcome</div>;
      case "provider":
        return <div onClick={handleContinue}>Provider</div>;
      case "datepicker":
        return <div onClick={handleContinue}>Scegli Data</div>;
      case "info":
        return <div onClick={handleContinue}>info</div>;
      case "success":
        return <div onClick={handleContinue}>Success</div>;
      case "error":
        return <div onClick={() => gotoStep("welcome")}>Error</div>;
    }
  }, [step]);

  return (
    <Modal onClose={handleClose}>
      <ModalContent>{renderModalContent()}</ModalContent>
    </Modal>
  );
};

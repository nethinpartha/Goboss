import React from "react";
import Carddetails from "./carddetails";
import Billingdetails from "./billingdetails";
import UpdateOrAddCard from './UpdateOrAddCard';
import ProfileInformation from './ProfileInformation';
import { useMembershipDetails } from '../../../hooks/useMembershipDetails';
import { NewsLetters } from '../../NewsLetters';

export default function Membershipdetails() {
  const {
    showCard,
    setShowCard,
    updateCardHandler,
    // setSelectedPaymentMethod,
    selectedPaymentMethod,
    handleUpdateConfirm,
    // handleAcceptanceMem
  } = useMembershipDetails();
  return (
    <>
      <Billingdetails />
      <ProfileInformation />
      <NewsLetters />
      <Carddetails
        setShowCard={setShowCard}
        updateCardHnadler={updateCardHandler}
        handleUpdateConfirm={handleUpdateConfirm}
      />
      <UpdateOrAddCard
        showCard={showCard}
        setShowCard={setShowCard}
        selectedPaymentMethod={selectedPaymentMethod}
      />

    </>
  );
}

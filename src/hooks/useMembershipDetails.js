import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { showAlertAction } from "../actions/showalert.action";
import { removePaymentMethod } from "../actions/removepaymentmethod";


export const useMembershipDetails = () => {
  const [showCard, setShowCard] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const dispatch = useDispatch();
  const updateCardHandler = (paymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);
  }

  useEffect(() => {
    return () => { }
  }, [selectedPaymentMethod]);

  const handleUpdateConfirm = (paymentMethod) => {
    if (!paymentMethod) return;
    dispatch(removePaymentMethod.removePaymentMethodAction({ paymentMethod }));
    setSelectedPaymentMethod("");
  }

  const handleAcceptanceMem = () => {
    if (!selectedPaymentMethod) return;
    dispatch(removePaymentMethod.removePaymentMethodAction({ paymentMethod: selectedPaymentMethod }));
    setSelectedPaymentMethod("");
  }

  return {
    showCard,
    setShowCard,
    updateCardHandler,
    setSelectedPaymentMethod,
    selectedPaymentMethod,
    handleUpdateConfirm,
    handleAcceptanceMem
  }
}
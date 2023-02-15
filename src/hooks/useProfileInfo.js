import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pathOr } from 'ramda';
import { __parseThemeSelector } from "../selectors/themestyleselector";
import { updateProfileInfoAction } from '../actions/updateProfileInfo.action';
import ProfileInfoSelector from '../selectors/profileinfoselector';
import { useForm } from "react-hook-form";

export const useProfileInfo = () => {
  const { handleSubmit, register, errors } = useForm();
  const { firstName, lastName, gender } = ProfileInfoSelector();
  const [selectedGender, setSelectedGender] = useState("");
  const { colors } = __parseThemeSelector();
  const [enableUpdate, setEnableUpdate] = useState(true);
  const { primaryBtnColor, primaryTxtColor, bgColor } = colors;
  const dispatch = useDispatch();
  const [profileInfoValue, setProfileInfoValue] = useState({
    firstName: "",
    lastName: "",
    gender: [
      {
        value: "Male",
        id: "M",
        selected: true
      },
      {
        value: "Female", id: "F",
        selected: false
      },
      {
        value: "Prefer not to say",
        id: "O",
        selected: false
      }
    ]
  });

  const handleGenderSelect = (evKey, ev) => {
    let changeSelectedGender = profileInfoValue.gender.map(gVal => {
      if (evKey === gVal.id) {
        setSelectedGender(gVal.value);
        return {
          value: gVal.value,
          selected: evKey === gVal.id,
          id: gVal.id
        }
      }
      return {
        value: gVal.value,
        selected: evKey === gVal.id,
        id: gVal.id
      }
    })
    setProfileInfoValue({ ...profileInfoValue, gender: changeSelectedGender });
    setEnableUpdate(false);
  }

  useEffect(() => {
    setProfileInfoValue({
      ...profileInfoValue,
      firstName: firstName,
      lastName: lastName
    });
    profileInfoValue.gender.forEach(gVal => {
      if (gVal.selected === true) {
        setSelectedGender(gVal.value)
      }
    });

  }, [firstName, lastName]);

  useEffect(() => {
    profileInfoValue.gender.forEach(gVal => {
      if (gVal.value === gender) {
        setSelectedGender(gVal.value)
      }
    });
  }, []);

  const handleChange = (e) => {
    setProfileInfoValue({
      ...profileInfoValue,
      [e.target.name]: e.target.value
    });
    setEnableUpdate(false);
  }

  const handleUpdate = () => {
    if (profileInfoValue.firstName || profileInfoValue.lastName || selectedGender) {
      let payload = {
        firstname: pathOr("", ['firstName'])(profileInfoValue),
        lastname: pathOr("", ['lastName'])(profileInfoValue),
        gender: selectedGender
      }
      dispatch(updateProfileInfoAction.updateProfileInfo(payload));
      setEnableUpdate(true);
    }
  }
  return {
    setEnableUpdate,
    profileInfoValue,
    handleChange,
    handleUpdate,
    handleGenderSelect,
    primaryBtnColor,
    primaryTxtColor,
    enableUpdate,
    handleSubmit,
    register,
    gender,
    errors,
    selectedGender,
    bgColor
  }
}
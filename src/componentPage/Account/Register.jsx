import React from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";

export const Register = () => {

  const navigate = useNavigate();

  return (
    <div className="text-[var(--primary-text-color)]">
      Đăng kí
    </div>
  );
};

export default Register;

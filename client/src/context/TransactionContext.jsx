import { useState, useEffect, createContext } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signers = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signers
  );

  console.log({
    provider,
    signers,
    transactionContract,
  });
};

export const TransactionProviders = ({ children }) => {
  return (
    <TransactionContext.Provider value={{ value: "test" }}>
      {children}
    </TransactionContext.Provider>
  );
};

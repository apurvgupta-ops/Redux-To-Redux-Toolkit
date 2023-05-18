import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment } from "../ReduxToolkit/bonusReducer";
import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountsQuery,
  useUpdateAccountMutation,
} from "../ReduxToolkit/AdminReducer";

const Admin = () => {
  const { data, error, isLoading } = useGetAccountsQuery();
  const [addAccount] = useAddAccountMutation();
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();

  return (
    <>
      <h1>Admin Component</h1>
      <div className="container">
        <div className="account">
          <h4>All Accounts</h4>
          {data &&
            data.map((acc) => (
              <p key={acc.id}>
                {acc.id} : {acc.amount}
                <button onClick={() => deleteAccount(acc.id)}>
                  Delete Account
                </button>
                <button
                  onClick={() => updateAccount({ id: acc.id, amount: 12000 })}
                >
                  update Account
                </button>
              </p>
            ))}
          <div className="btn">
            <button onClick={() => addAccount(120, data.length + 1)}>
              Add Amount
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;

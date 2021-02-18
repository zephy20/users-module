import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../api";
import UserTableWrapper from "../../components/UserTable";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers, sortUsers } from "../../redux/actions";
import { Spinner } from "react-bootstrap";
import ErrorPage from "../../components/UserDetails/UserNotFound";

export default function UserTableContainer() {
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const userData = useSelector(state => state.users);
  const sortInfo = useSelector(state => state.sortInfo);
  const loader = useSelector(state => state.loader);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData || !userData.length) dispatch(getUsers());
  }, []);

  const sortTableByType = (type, order) => {
    const payload = {
      type,
      order
    };
    dispatch(sortUsers(payload));
  };

  const handleSelectRowsPerPage = num => {
    setCurrentPageNo(1);
    setRowsPerPage(num);
  };

  const handleSelectPageNumber = num => {
    setCurrentPageNo(num);
  };

  const deleteRow = userId => {
    dispatch(deleteUser({ userId }));
  };

  // calculate pagination stats based on current rows per page and page no
  const indexOfLastTodo = currentPageNo * rowsPerPage;
  const indexOfFirstTodo = indexOfLastTodo - rowsPerPage;
  const currentRows = userData.slice(indexOfFirstTodo, indexOfLastTodo);

  if (loader)
    return (
      <div className="topSpacing">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );

  if (error)
    return (
      <div className="topSpacing">
        <ErrorPage />
      </div>
    );

  return (
    <UserTableWrapper
      rows={currentRows}
      sortInfo={sortInfo}
      rowsPerPage={rowsPerPage}
      totalRowCount={userData.length}
      currentPageNo={currentPageNo}
      sortTableByType={sortTableByType}
      handleSelectRowsPerPage={handleSelectRowsPerPage}
      handleSelectPageNumber={handleSelectPageNumber}
      deleteUser={deleteRow}
    />
  );
}

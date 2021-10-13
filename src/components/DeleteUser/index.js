import React, { useState, useEffect } from "react";

const DeleteUser = props => {
  const [user, setUser] = useState(props.currentUser);

  const cancel = event => {
    event.preventDefault();
    props.setActiveModal({ active: false });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.deleteUser(user.id);
      }}
    >
      <div className="form-group">
         {user.first_name} {user.last_name}を削除してよろしいでしょうか?
      </div>
      <div className="form-group form-group--actions">
        <button className="primary-btn">削除</button>
        <button className="cancel-btn" onClick={cancel}>
          キャンセル
        </button>
      </div>
    </form>
  );
};

export default DeleteUser;

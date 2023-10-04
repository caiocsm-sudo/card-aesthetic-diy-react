import React from "react";

const AddCard = ({ clicked }) => {
  return (
    <div className="add-card-modal__shadow">
      <div className="add-card-modal">
        <h3>Add your card</h3>
        <form action="POST">
          <div className="type-text-form">
            <label>Title</label>
            <input type="text" id="title-form"></input>
            <label>Description</label>
            <input type="text" id="description-form"></input>
          </div>
          <div className="type-file-form">
            <label>Header</label>
            <input type="file" id="header-image" accept="image/png, image/jpeg">
              Select Image
            </input>
            <label>Profile Picture</label>
            <input
              type="file"
              id="profile-image"
              accept="image/png, image/jpeg"
            >
              Select Image
            </input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCard;

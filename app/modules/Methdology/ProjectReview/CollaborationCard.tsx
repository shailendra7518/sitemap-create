import React from "react";

const CollaborationCard: React.FC<{ data: string }> = ({ data }) => {
  return (
    <div className="col-lg-4 mb-3 mb-lg-0 h-">
      <div className="block p-4">
        <p className="content-details my-2 me-2">
          {data}
        </p>
      </div>
    </div>
  );
};

export default CollaborationCard;
